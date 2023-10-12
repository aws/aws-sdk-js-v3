// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListDatasetEntriesRequest, ListDatasetEntriesResponse } from "../models/models_0";
import { de_ListDatasetEntriesCommand, se_ListDatasetEntriesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetEntriesCommand}.
 */
export interface ListDatasetEntriesCommandInput extends ListDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetEntriesCommand}.
 */
export interface ListDatasetEntriesCommandOutput extends ListDatasetEntriesResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>
 * Lists the entries (images) within a dataset. An entry is a
 * JSON Line that contains the information for a single image, including
 * the image location, assigned labels, and object location bounding boxes. For
 * more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-manifest-files.html">Creating a manifest file</a>.</p>
 *          <p>JSON Lines in the response include information about non-terminal
 *    errors found in the dataset.
 *    Non terminal errors are reported in <code>errors</code> lists within each JSON Line. The
 *    same information is reported in the training and testing validation result manifests that
 *    Amazon Rekognition Custom Labels creates during model training.
 *  </p>
 *          <p>You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date.
 * </p>
 *          <p>This operation requires permissions to perform the <code>rekognition:ListDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // ListDatasetEntriesRequest
 *   DatasetArn: "STRING_VALUE", // required
 *   ContainsLabels: [ // DatasetLabels
 *     "STRING_VALUE",
 *   ],
 *   Labeled: true || false,
 *   SourceRefContains: "STRING_VALUE",
 *   HasErrors: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetEntriesResponse
 * //   DatasetEntries: [ // DatasetEntries
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetEntriesCommandInput - {@link ListDatasetEntriesCommandInput}
 * @returns {@link ListDatasetEntriesCommandOutput}
 * @see {@link ListDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To list the entries in an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Lists the JSON line entries in an Amazon Rekognition Custom Labels dataset.
 * const input = {
 *   "ContainsLabels": [
 *     "camellia"
 *   ],
 *   "DatasetArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106",
 *   "HasErrors": true,
 *   "Labeled": true,
 *   "MaxResults": 100,
 *   "NextToken": "",
 *   "SourceRefContains": "camellia4.jpg"
 * };
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DatasetEntries": [
 *     "{\"source-ref\":\"s3://custom-labels-console-us-east-1-1111111111/assets/flowers_1_train_dataset/camellia4.jpg\",\"camellia\":1,\"camellia-metadata\":{\"confidence\":1,\"job-name\":\"labeling-job/camellia\",\"class-name\":\"camellia\",\"human-annotated\":\"yes\",\"creation-date\":\"2021-07-11T03:32:13.456Z\",\"type\":\"groundtruth/image-classification\"},\"with_leaves\":1,\"with_leaves-metadata\":{\"confidence\":1,\"job-name\":\"labeling-job/with_leaves\",\"class-name\":\"with_leaves\",\"human-annotated\":\"yes\",\"creation-date\":\"2021-07-11T03:32:13.456Z\",\"type\":\"groundtruth/image-classification\"},\"cl-metadata\":{\"is_labeled\":true}}"
 *   ],
 *   "NextToken": ""
 * }
 * *\/
 * // example id: to-list-the-entries-in-an-amazon-rekognition-custom-labels-dataset-1690823292345
 * ```
 *
 */
export class ListDatasetEntriesCommand extends $Command<
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListDatasetEntriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "ListDatasetEntries",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatasetEntriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetEntriesCommandOutput> {
    return de_ListDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
