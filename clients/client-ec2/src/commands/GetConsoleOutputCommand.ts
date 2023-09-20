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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleOutputRequest, GetConsoleOutputResult } from "../models/models_5";
import { de_GetConsoleOutputCommand, se_GetConsoleOutputCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConsoleOutputCommand}.
 */
export interface GetConsoleOutputCommandInput extends GetConsoleOutputRequest {}
/**
 * @public
 *
 * The output of {@link GetConsoleOutputCommand}.
 */
export interface GetConsoleOutputCommandOutput extends GetConsoleOutputResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the console output for the specified instance. For Linux instances, the instance
 *             console output displays the exact console output that would normally be displayed on a
 *             physical monitor attached to a computer. For Windows instances, the instance console
 *             output includes the last three system event log errors.</p>
 *          <p>By default, the console output returns buffered information that was posted shortly
 *             after an instance transition state (start, stop, reboot, or terminate). This information
 *             is available for at least one hour after the most recent post. Only the most recent 64
 *             KB of console output is available.</p>
 *          <p>You can optionally retrieve the latest serial console output at any time during the
 *             instance lifecycle. This option is supported on instance types that use the Nitro
 *             hypervisor.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
 *                 console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleOutputCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleOutputCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetConsoleOutputRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   Latest: true || false,
 * };
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * // { // GetConsoleOutputResult
 * //   InstanceId: "STRING_VALUE",
 * //   Output: "STRING_VALUE",
 * //   Timestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetConsoleOutputCommandInput - {@link GetConsoleOutputCommandInput}
 * @returns {@link GetConsoleOutputCommandOutput}
 * @see {@link GetConsoleOutputCommandInput} for command's `input` shape.
 * @see {@link GetConsoleOutputCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To get the console output
 * ```javascript
 * // This example gets the console output for the specified instance.
 * const input = {
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new GetConsoleOutputCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceId": "i-1234567890abcdef0",
 *   "Output": "...",
 *   "Timestamp": "2018-05-25T21:23:53.000Z"
 * }
 * *\/
 * // example id: to-get-the-console-output-1529355683194
 * ```
 *
 */
export class GetConsoleOutputCommand extends $Command<
  GetConsoleOutputCommandInput,
  GetConsoleOutputCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetConsoleOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConsoleOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetConsoleOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetConsoleOutput",
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
  private serialize(input: GetConsoleOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConsoleOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConsoleOutputCommandOutput> {
    return de_GetConsoleOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
