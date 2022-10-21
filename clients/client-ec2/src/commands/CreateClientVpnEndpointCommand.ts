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
  CreateClientVpnEndpointRequest,
  CreateClientVpnEndpointRequestFilterSensitiveLog,
  CreateClientVpnEndpointResult,
  CreateClientVpnEndpointResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CreateClientVpnEndpointCommand,
  serializeAws_ec2CreateClientVpnEndpointCommand,
} from "../protocols/Aws_ec2";

export interface CreateClientVpnEndpointCommandInput extends CreateClientVpnEndpointRequest {}
export interface CreateClientVpnEndpointCommandOutput extends CreateClientVpnEndpointResult, __MetadataBearer {}

/**
 * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
 * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
 * 			are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateClientVpnEndpointCommand extends $Command<
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
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

  constructor(readonly input: CreateClientVpnEndpointCommandInput) {
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
  ): Handler<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClientVpnEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClientVpnEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateClientVpnEndpointResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateClientVpnEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClientVpnEndpointCommandOutput> {
    return deserializeAws_ec2CreateClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
