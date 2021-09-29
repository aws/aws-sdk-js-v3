import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateFirewallDomainListRequest, CreateFirewallDomainListResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFirewallDomainListCommand,
  serializeAws_json1_1CreateFirewallDomainListCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateFirewallDomainListCommandInput extends CreateFirewallDomainListRequest {}
export interface CreateFirewallDomainListCommandOutput extends CreateFirewallDomainListResponse, __MetadataBearer {}

/**
 * <p>Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFirewallDomainListCommand extends $Command<
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFirewallDomainListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFirewallDomainListCommandInput, CreateFirewallDomainListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateFirewallDomainListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallDomainListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallDomainListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFirewallDomainListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFirewallDomainListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallDomainListCommandOutput> {
    return deserializeAws_json1_1CreateFirewallDomainListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
