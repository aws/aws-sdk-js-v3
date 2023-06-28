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

import { GetCanaryRequest, GetCanaryResponse } from "../models/models_0";
import { de_GetCanaryCommand, se_GetCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCanaryCommand}.
 */
export interface GetCanaryCommandInput extends GetCanaryRequest {}
/**
 * @public
 *
 * The output of {@link GetCanaryCommand}.
 */
export interface GetCanaryCommandOutput extends GetCanaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // GetCanaryRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetCanaryCommand(input);
 * const response = await client.send(command);
 * // { // GetCanaryResponse
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
 * @param GetCanaryCommandInput - {@link GetCanaryCommandInput}
 * @returns {@link GetCanaryCommandOutput}
 * @see {@link GetCanaryCommandInput} for command's `input` shape.
 * @see {@link GetCanaryCommandOutput} for command's `response` shape.
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
export class GetCanaryCommand extends $Command<
  GetCanaryCommandInput,
  GetCanaryCommandOutput,
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
  constructor(readonly input: GetCanaryCommandInput) {
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
  ): Handler<GetCanaryCommandInput, GetCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCanaryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "GetCanaryCommand";
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
  private serialize(input: GetCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCanaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCanaryCommandOutput> {
    return de_GetCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
