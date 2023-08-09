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
} from "@smithy/types";

import { DistributeDatasetEntriesRequest, DistributeDatasetEntriesResponse } from "../models/models_0";
import { de_DistributeDatasetEntriesCommand, se_DistributeDatasetEntriesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DistributeDatasetEntriesCommand}.
 */
export interface DistributeDatasetEntriesCommandInput extends DistributeDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link DistributeDatasetEntriesCommand}.
 */
export interface DistributeDatasetEntriesCommandOutput extends DistributeDatasetEntriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project.
 *          <code>DistributeDatasetEntries</code> moves 20% of the training dataset images to the test dataset.
 *          An entry is a JSON Line that describes an image.
 *       </p>
 *          <p>You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset.
 *          The training dataset must contain the images that you want to split. The test dataset
 *       must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call <a>CreateDataset</a>.</p>
 *          <p>Distributing a dataset takes a while to complete. To check the status call <code>DescribeDataset</code>. The operation
 *          is complete when the <code>Status</code> field for the training dataset and the test dataset is <code>UPDATE_COMPLETE</code>.
 *          If the dataset split fails, the value of <code>Status</code> is <code>UPDATE_FAILED</code>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DistributeDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DistributeDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DistributeDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DistributeDatasetEntriesRequest
 *   Datasets: [ // DistributeDatasetMetadataList // required
 *     { // DistributeDataset
 *       Arn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DistributeDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DistributeDatasetEntriesCommandInput - {@link DistributeDatasetEntriesCommandInput}
 * @returns {@link DistributeDatasetEntriesCommandOutput}
 * @see {@link DistributeDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link DistributeDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
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
 * @example To distribute an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Distributes an Amazon Rekognition Custom Labels training dataset to a test dataset.
 * const input = {
 *   "Datasets": [
 *     {
 *       "Arn": "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106"
 *     },
 *     {
 *       "Arn": "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/test/1690564858106"
 *     }
 *   ]
 * };
 * const command = new DistributeDatasetEntriesCommand(input);
 * await client.send(command);
 * // example id: to-distribute-to-an-amazon-rekognition-custom-labels-dataset-1690816977073
 * ```
 *
 */
export class DistributeDatasetEntriesCommand extends $Command<
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
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
  constructor(readonly input: DistributeDatasetEntriesCommandInput) {
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
  ): Handler<DistributeDatasetEntriesCommandInput, DistributeDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DistributeDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DistributeDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DistributeDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DistributeDatasetEntriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DistributeDatasetEntriesCommandOutput> {
    return de_DistributeDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
