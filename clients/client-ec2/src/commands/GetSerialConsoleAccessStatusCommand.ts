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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetSerialConsoleAccessStatusRequest, GetSerialConsoleAccessStatusResult } from "../models/models_5";
import { de_GetSerialConsoleAccessStatusCommand, se_GetSerialConsoleAccessStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSerialConsoleAccessStatusCommand}.
 */
export interface GetSerialConsoleAccessStatusCommandInput extends GetSerialConsoleAccessStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetSerialConsoleAccessStatusCommand}.
 */
export interface GetSerialConsoleAccessStatusCommandOutput
  extends GetSerialConsoleAccessStatusResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the access status of your account to the EC2 serial console of all instances. By
 * 			default, access to the EC2 serial console is disabled for your account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSerialConsoleAccessStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSerialConsoleAccessStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSerialConsoleAccessStatusRequest
 *   DryRun: true || false,
 * };
 * const command = new GetSerialConsoleAccessStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSerialConsoleAccessStatusResult
 * //   SerialConsoleAccessEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetSerialConsoleAccessStatusCommandInput - {@link GetSerialConsoleAccessStatusCommandInput}
 * @returns {@link GetSerialConsoleAccessStatusCommandOutput}
 * @see {@link GetSerialConsoleAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetSerialConsoleAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetSerialConsoleAccessStatusCommand extends $Command<
  GetSerialConsoleAccessStatusCommandInput,
  GetSerialConsoleAccessStatusCommandOutput,
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
  constructor(readonly input: GetSerialConsoleAccessStatusCommandInput) {
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
  ): Handler<GetSerialConsoleAccessStatusCommandInput, GetSerialConsoleAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSerialConsoleAccessStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSerialConsoleAccessStatusCommand";
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
  private serialize(input: GetSerialConsoleAccessStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSerialConsoleAccessStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSerialConsoleAccessStatusCommandOutput> {
    return de_GetSerialConsoleAccessStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
