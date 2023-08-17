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

import { CreateCanaryRequest, CreateCanaryResponse } from "../models/models_0";
import { de_CreateCanaryCommand, se_CreateCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCanaryCommand}.
 */
export interface CreateCanaryCommandInput extends CreateCanaryRequest {}
/**
 * @public
 *
 * The output of {@link CreateCanaryCommand}.
 */
export interface CreateCanaryCommandOutput extends CreateCanaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the
 *          outside-in. Canaries help you check the availability and latency of your web services and
 *          troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and
 *          metrics. You can set up a canary to run continuously or just once. </p>
 *          <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p>
 *          <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy.
 *          If you are creating a new IAM role for the canary, you also need the
 *          <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and
 *             <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary
 *             Roles and Permissions</a>.</p>
 *          <p>Do not include secrets or proprietary information in your canary names. The canary name
 *          makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in
 *          outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, CreateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, CreateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // CreateCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   Code: { // CanaryCodeInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3Version: "STRING_VALUE",
 *     ZipFile: "BLOB_VALUE",
 *     Handler: "STRING_VALUE", // required
 *   },
 *   ArtifactS3Location: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE", // required
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
 *   RuntimeVersion: "STRING_VALUE", // required
 *   VpcConfig: { // VpcConfigInput
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ArtifactConfig: { // ArtifactConfigInput
 *     S3Encryption: { // S3EncryptionConfig
 *       EncryptionMode: "STRING_VALUE",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateCanaryCommand(input);
 * const response = await client.send(command);
 * // { // CreateCanaryResponse
 * //   Canary: { // Canary
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Code: { // CanaryCodeOutput
 * //       SourceLocationArn: "STRING_VALUE",
 * //       Handler: "STRING_VALUE",
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     Schedule: { // CanaryScheduleOutput
 * //       Expression: "STRING_VALUE",
 * //       DurationInSeconds: Number("long"),
 * //     },
 * //     RunConfig: { // CanaryRunConfigOutput
 * //       TimeoutInSeconds: Number("int"),
 * //       MemoryInMB: Number("int"),
 * //       ActiveTracing: true || false,
 * //     },
 * //     SuccessRetentionPeriodInDays: Number("int"),
 * //     FailureRetentionPeriodInDays: Number("int"),
 * //     Status: { // CanaryStatus
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonCode: "STRING_VALUE",
 * //     },
 * //     Timeline: { // CanaryTimeline
 * //       Created: new Date("TIMESTAMP"),
 * //       LastModified: new Date("TIMESTAMP"),
 * //       LastStarted: new Date("TIMESTAMP"),
 * //       LastStopped: new Date("TIMESTAMP"),
 * //     },
 * //     ArtifactS3Location: "STRING_VALUE",
 * //     EngineArn: "STRING_VALUE",
 * //     RuntimeVersion: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfigOutput
 * //       VpcId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     VisualReference: { // VisualReferenceOutput
 * //       BaseScreenshots: [ // BaseScreenshots
 * //         { // BaseScreenshot
 * //           ScreenshotName: "STRING_VALUE", // required
 * //           IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       BaseCanaryRunId: "STRING_VALUE",
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ArtifactConfig: { // ArtifactConfigOutput
 * //       S3Encryption: { // S3EncryptionConfig
 * //         EncryptionMode: "STRING_VALUE",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCanaryCommandInput - {@link CreateCanaryCommandInput}
 * @returns {@link CreateCanaryCommandOutput}
 * @see {@link CreateCanaryCommandInput} for command's `input` shape.
 * @see {@link CreateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>One of the input resources is larger than is allowed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class CreateCanaryCommand extends $Command<
  CreateCanaryCommandInput,
  CreateCanaryCommandOutput,
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
  constructor(readonly input: CreateCanaryCommandInput) {
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
  ): Handler<CreateCanaryCommandInput, CreateCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateCanaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "CreateCanaryCommand";
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
  private serialize(input: CreateCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCanaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCanaryCommandOutput> {
    return de_CreateCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
