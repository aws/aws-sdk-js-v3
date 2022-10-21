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
  AuthorizeClientVpnIngressRequest,
  AuthorizeClientVpnIngressRequestFilterSensitiveLog,
  AuthorizeClientVpnIngressResult,
  AuthorizeClientVpnIngressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AuthorizeClientVpnIngressCommand,
  serializeAws_ec2AuthorizeClientVpnIngressCommand,
} from "../protocols/Aws_ec2";

export interface AuthorizeClientVpnIngressCommandInput extends AuthorizeClientVpnIngressRequest {}
export interface AuthorizeClientVpnIngressCommandOutput extends AuthorizeClientVpnIngressResult, __MetadataBearer {}

/**
 * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
 * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
 * 			enable clients to access resources in Amazon Web Services or on-premises networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AuthorizeClientVpnIngressCommand extends $Command<
  AuthorizeClientVpnIngressCommandInput,
  AuthorizeClientVpnIngressCommandOutput,
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

  constructor(readonly input: AuthorizeClientVpnIngressCommandInput) {
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
  ): Handler<AuthorizeClientVpnIngressCommandInput, AuthorizeClientVpnIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeClientVpnIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AuthorizeClientVpnIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeClientVpnIngressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeClientVpnIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeClientVpnIngressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AuthorizeClientVpnIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeClientVpnIngressCommandOutput> {
    return deserializeAws_ec2AuthorizeClientVpnIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
