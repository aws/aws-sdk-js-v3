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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartTopicsDetectionJobRequest, StartTopicsDetectionJobResponse } from "../models/models_0";
import { de_StartTopicsDetectionJobCommand, se_StartTopicsDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTopicsDetectionJobCommand}.
 */
export interface StartTopicsDetectionJobCommandInput extends StartTopicsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTopicsDetectionJobCommand}.
 */
export interface StartTopicsDetectionJobCommandOutput extends StartTopicsDetectionJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an asynchronous topic detection job. Use the
 *         <code>DescribeTopicDetectionJob</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartTopicsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartTopicsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // StartTopicsDetectionJobRequest
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *     DocumentReaderConfig: { // DocumentReaderConfig
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE",
 *   NumberOfTopics: Number("int"),
 *   ClientRequestToken: "STRING_VALUE",
 *   VolumeKmsKeyId: "STRING_VALUE",
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartTopicsDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTopicsDetectionJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobArn: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartTopicsDetectionJobCommandInput - {@link StartTopicsDetectionJobCommandInput}
 * @returns {@link StartTopicsDetectionJobCommandOutput}
 * @see {@link StartTopicsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartTopicsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class StartTopicsDetectionJobCommand extends $Command<
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: StartTopicsDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTopicsDetectionJobCommandInput, StartTopicsDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTopicsDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartTopicsDetectionJobCommand";
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
  private serialize(input: StartTopicsDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTopicsDetectionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTopicsDetectionJobCommandOutput> {
    return de_StartTopicsDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
