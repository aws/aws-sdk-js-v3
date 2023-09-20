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

import { DescribeCanariesRequest, DescribeCanariesResponse } from "../models/models_0";
import { de_DescribeCanariesCommand, se_DescribeCanariesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCanariesCommand}.
 */
export interface DescribeCanariesCommandInput extends DescribeCanariesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCanariesCommand}.
 */
export interface DescribeCanariesCommandOutput extends DescribeCanariesResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *          <p>This operation supports resource-level authorization using an IAM policy and
 *       the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view
 *          all the canaries that you specify in your request. If you do not have permission to view any of
 *          the canaries, the request fails with a 403 response.</p>
 *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
 *          IAM policy that restricts which canaries that you are allowed to view. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
 *             Limiting a user to viewing specific canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeCanariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Names: [ // DescribeCanariesNameFilter
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCanariesResponse
 * //   Canaries: [ // Canaries
 * //     { // Canary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Code: { // CanaryCodeOutput
 * //         SourceLocationArn: "STRING_VALUE",
 * //         Handler: "STRING_VALUE",
 * //       },
 * //       ExecutionRoleArn: "STRING_VALUE",
 * //       Schedule: { // CanaryScheduleOutput
 * //         Expression: "STRING_VALUE",
 * //         DurationInSeconds: Number("long"),
 * //       },
 * //       RunConfig: { // CanaryRunConfigOutput
 * //         TimeoutInSeconds: Number("int"),
 * //         MemoryInMB: Number("int"),
 * //         ActiveTracing: true || false,
 * //       },
 * //       SuccessRetentionPeriodInDays: Number("int"),
 * //       FailureRetentionPeriodInDays: Number("int"),
 * //       Status: { // CanaryStatus
 * //         State: "CREATING" || "READY" || "STARTING" || "RUNNING" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR" || "DELETING",
 * //         StateReason: "STRING_VALUE",
 * //         StateReasonCode: "INVALID_PERMISSIONS" || "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_PENDING" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "SYNC_DELETE_IN_PROGRESS",
 * //       },
 * //       Timeline: { // CanaryTimeline
 * //         Created: new Date("TIMESTAMP"),
 * //         LastModified: new Date("TIMESTAMP"),
 * //         LastStarted: new Date("TIMESTAMP"),
 * //         LastStopped: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactS3Location: "STRING_VALUE",
 * //       EngineArn: "STRING_VALUE",
 * //       RuntimeVersion: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfigOutput
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       VisualReference: { // VisualReferenceOutput
 * //         BaseScreenshots: [ // BaseScreenshots
 * //           { // BaseScreenshot
 * //             ScreenshotName: "STRING_VALUE", // required
 * //             IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         BaseCanaryRunId: "STRING_VALUE",
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ArtifactConfig: { // ArtifactConfigOutput
 * //         S3Encryption: { // S3EncryptionConfig
 * //           EncryptionMode: "SSE_S3" || "SSE_KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCanariesCommandInput - {@link DescribeCanariesCommandInput}
 * @returns {@link DescribeCanariesCommandOutput}
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 */
export class DescribeCanariesCommand extends $Command<
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
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
  constructor(readonly input: DescribeCanariesCommandInput) {
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
  ): Handler<DescribeCanariesCommandInput, DescribeCanariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCanariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DescribeCanariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Synthetics",
        operation: "DescribeCanaries",
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
  private serialize(input: DescribeCanariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCanariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCanariesCommandOutput> {
    return de_DescribeCanariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
