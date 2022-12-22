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
  EnableDomainAutoRenewRequest,
  EnableDomainAutoRenewRequestFilterSensitiveLog,
  EnableDomainAutoRenewResponse,
  EnableDomainAutoRenewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableDomainAutoRenewCommand,
  serializeAws_json1_1EnableDomainAutoRenewCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface EnableDomainAutoRenewCommandInput extends EnableDomainAutoRenewRequest {}
export interface EnableDomainAutoRenewCommandOutput extends EnableDomainAutoRenewResponse, __MetadataBearer {}

/**
 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain
 * 			before the domain registration expires. The cost of renewing your domain registration is
 * 			billed to your Amazon Web Services account.</p>
 *          <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs
 * 			and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can
 * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
 * 				Guide</i>. Route 53 requires that you renew before the end of the renewal
 * 			period so we can complete processing before the deadline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainAutoRenewCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainAutoRenewCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainAutoRenewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainAutoRenewCommandInput} for command's `input` shape.
 * @see {@link EnableDomainAutoRenewCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class EnableDomainAutoRenewCommand extends $Command<
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
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

  constructor(readonly input: EnableDomainAutoRenewCommandInput) {
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
  ): Handler<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableDomainAutoRenewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "EnableDomainAutoRenewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableDomainAutoRenewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableDomainAutoRenewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDomainAutoRenewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableDomainAutoRenewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableDomainAutoRenewCommandOutput> {
    return deserializeAws_json1_1EnableDomainAutoRenewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
