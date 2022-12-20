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

import {
  RegisterDomainRequest,
  RegisterDomainRequestFilterSensitiveLog,
  RegisterDomainResponse,
  RegisterDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterDomainCommand,
  serializeAws_json1_1RegisterDomainCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface RegisterDomainCommandInput extends RegisterDomainRequest {}
export interface RegisterDomainCommandOutput extends RegisterDomainResponse, __MetadataBearer {}

/**
 * <p>This operation registers a domain. Domains are registered either by Amazon Registrar
 * 			(for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other
 * 			domains). For some top-level domains (TLDs), this operation requires extra
 * 			parameters.</p>
 *          <p>When you register a domain, Amazon Route 53 does the following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53
 * 					assigns four name servers to your hosted zone and automatically updates your
 * 					domain registration with the names of these name servers.</p>
 *             </li>
 *             <li>
 *                <p>Enables auto renew, so your domain registration will renew automatically each
 * 					year. We'll notify you in advance of the renewal date so you can choose whether
 * 					to renew the registration.</p>
 *             </li>
 *             <li>
 *                <p>Optionally enables privacy protection, so WHOIS queries return contact
 * 					information either for Amazon Registrar (for .com, .net, and .org domains) or
 * 					for our registrar associate, Gandi (for all other TLDs). If you don't enable
 * 					privacy protection, WHOIS queries return the information that you entered for
 * 					the administrative, registrant, and technical contacts.</p>
 *                <note>
 *                   <p>You must specify the same privacy setting for the administrative,
 * 						registrant, and technical contacts.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>If registration is successful, returns an operation ID that you can use to
 * 					track the progress and completion of the action. If the request is not completed
 * 					successfully, the domain registrant is notified by email.</p>
 *             </li>
 *             <li>
 *                <p>Charges your Amazon Web Services account an amount based on the top-level
 * 					domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RegisterDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RegisterDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RegisterDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDomainCommandInput} for command's `input` shape.
 * @see {@link RegisterDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class RegisterDomainCommand extends $Command<
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput,
  Route53DomainsClientResolvedConfig
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

  constructor(readonly input: RegisterDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterDomainCommandInput, RegisterDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RegisterDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDomainCommandOutput> {
    return deserializeAws_json1_1RegisterDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
