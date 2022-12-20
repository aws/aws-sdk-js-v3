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
  AssociateDelegationSignerToDomainRequest,
  AssociateDelegationSignerToDomainRequestFilterSensitiveLog,
  AssociateDelegationSignerToDomainResponse,
  AssociateDelegationSignerToDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDelegationSignerToDomainCommand,
  serializeAws_json1_1AssociateDelegationSignerToDomainCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface AssociateDelegationSignerToDomainCommandInput extends AssociateDelegationSignerToDomainRequest {}
export interface AssociateDelegationSignerToDomainCommandOutput
  extends AssociateDelegationSignerToDomainResponse,
    __MetadataBearer {}

/**
 * <p> Creates a delegation signer (DS) record in the registry zone for this domain
 * 			name.</p>
 *          <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS
 * 			records. This action may render your domain name unavailable on the internet if the
 * 			steps are completed in the wrong order, or with incorrect timing. For more information
 * 			about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC
 * 				signing</a> in the <i>Route 53 developer
 * 			guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, AssociateDelegationSignerToDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, AssociateDelegationSignerToDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new AssociateDelegationSignerToDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDelegationSignerToDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegationSignerToDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class AssociateDelegationSignerToDomainCommand extends $Command<
  AssociateDelegationSignerToDomainCommandInput,
  AssociateDelegationSignerToDomainCommandOutput,
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

  constructor(readonly input: AssociateDelegationSignerToDomainCommandInput) {
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
  ): Handler<AssociateDelegationSignerToDomainCommandInput, AssociateDelegationSignerToDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDelegationSignerToDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "AssociateDelegationSignerToDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDelegationSignerToDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDelegationSignerToDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateDelegationSignerToDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDelegationSignerToDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDelegationSignerToDomainCommandOutput> {
    return deserializeAws_json1_1AssociateDelegationSignerToDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
