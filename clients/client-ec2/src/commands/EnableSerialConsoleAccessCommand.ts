// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  EnableSerialConsoleAccessRequest,
  EnableSerialConsoleAccessRequestFilterSensitiveLog,
  EnableSerialConsoleAccessResult,
  EnableSerialConsoleAccessResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2EnableSerialConsoleAccessCommand,
  serializeAws_ec2EnableSerialConsoleAccessCommand,
} from "../protocols/Aws_ec2";

export interface EnableSerialConsoleAccessCommandInput extends EnableSerialConsoleAccessRequest {}
export interface EnableSerialConsoleAccessCommandOutput extends EnableSerialConsoleAccessResult, __MetadataBearer {}

/**
 * <p>Enables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a>
 * 			in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableSerialConsoleAccessCommand extends $Command<
  EnableSerialConsoleAccessCommandInput,
  EnableSerialConsoleAccessCommandOutput,
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

  constructor(readonly input: EnableSerialConsoleAccessCommandInput) {
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
  ): Handler<EnableSerialConsoleAccessCommandInput, EnableSerialConsoleAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSerialConsoleAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableSerialConsoleAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSerialConsoleAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableSerialConsoleAccessResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableSerialConsoleAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableSerialConsoleAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSerialConsoleAccessCommandOutput> {
    return deserializeAws_ec2EnableSerialConsoleAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
