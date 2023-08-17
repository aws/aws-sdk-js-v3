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

import { UpdateCanaryRequest, UpdateCanaryResponse } from "../models/models_0";
import { de_UpdateCanaryCommand, se_UpdateCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCanaryCommand}.
 */
export interface UpdateCanaryCommandInput extends UpdateCanaryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCanaryCommand}.
 */
export interface UpdateCanaryCommandOutput extends UpdateCanaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of a canary that has
 *          already been created.</p>
 *          <p>You can't use this operation to update the tags of an existing canary. To
 *          change the tags of an existing canary, use
 *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, UpdateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, UpdateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // UpdateCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   Code: { // CanaryCodeInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3Version: "STRING_VALUE",
 *     ZipFile: "BLOB_VALUE",
 *     Handler: "STRING_VALUE", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   RuntimeVersion: "STRING_VALUE",
 *   Schedule: { // CanaryScheduleInput
 *     Expression: "STRING_VALUE", // required
 *     DurationInSeconds: Number("long"),
 *   },
 *   RunConfig: { // CanaryRunConfigInput
 *     TimeoutInSeconds: Number("int"),
 *     MemoryInMB: Number("int"),
 *     ActiveTracing: true || false,
 *     EnvironmentVariables: { // EnvironmentVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   SuccessRetentionPeriodInDays: Number("int"),
 *   FailureRetentionPeriodInDays: Number("int"),
 *   VpcConfig: { // VpcConfigInput
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   VisualReference: { // VisualReferenceInput
 *     BaseScreenshots: [ // BaseScreenshots
 *       { // BaseScreenshot
 *         ScreenshotName: "STRING_VALUE", // required
 *         IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     BaseCanaryRunId: "STRING_VALUE", // required
 *   },
 *   ArtifactS3Location: "STRING_VALUE",
 *   ArtifactConfig: { // ArtifactConfigInput
 *     S3Encryption: { // S3EncryptionConfig
 *       EncryptionMode: "STRING_VALUE",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCanaryCommandInput - {@link UpdateCanaryCommandInput}
 * @returns {@link UpdateCanaryCommandOutput}
 * @see {@link UpdateCanaryCommandInput} for command's `input` shape.
 * @see {@link UpdateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>One of the input resources is larger than is allowed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class UpdateCanaryCommand extends $Command<
  UpdateCanaryCommandInput,
  UpdateCanaryCommandOutput,
  SyntheticsClientResolvedConfig
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
  constructor(readonly input: UpdateCanaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCanaryCommandInput, UpdateCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateCanaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "UpdateCanaryCommand";
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
  private serialize(input: UpdateCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCanaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCanaryCommandOutput> {
    return de_UpdateCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
