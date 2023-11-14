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

import { RenewDomainRequest, RenewDomainResponse } from "../models/models_0";
import { de_RenewDomainCommand, se_RenewDomainCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RenewDomainCommand}.
 */
export interface RenewDomainCommandInput extends RenewDomainRequest {}
/**
 * @public
 *
 * The output of {@link RenewDomainCommand}.
 */
export interface RenewDomainCommandOutput extends RenewDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation renews a domain for the specified number of years. The cost of renewing
 * 			your domain is billed to your Amazon Web Services account.</p>
 *          <p>We recommend that you renew your domain several weeks before the expiration date. Some
 * 			TLD registries delete domains before the expiration date if you haven't renewed far
 * 			enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing
 * 				Registration for a Domain</a> in the <i>Amazon Route 53 Developer
 * 				Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RenewDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RenewDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // RenewDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   DurationInYears: Number("int"),
 *   CurrentExpiryYear: Number("int"), // required
 * };
 * const command = new RenewDomainCommand(input);
 * const response = await client.send(command);
 * // { // RenewDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RenewDomainCommandInput - {@link RenewDomainCommandInput}
 * @returns {@link RenewDomainCommandOutput}
 * @see {@link RenewDomainCommandInput} for command's `input` shape.
 * @see {@link RenewDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The request is already in progress for the domain.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *  <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 *
 * @throws {@link TLDRulesViolation} (client fault)
 *  <p>The top-level domain does not support this operation.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class RenewDomainCommand extends $Command<
  RenewDomainCommandInput,
  RenewDomainCommandOutput,
  Route53DomainsClientResolvedConfig
> {
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
  constructor(readonly input: RenewDomainCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RenewDomainCommandInput, RenewDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RenewDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RenewDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "RenewDomain",
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
  private serialize(input: RenewDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RenewDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenewDomainCommandOutput> {
    return de_RenewDomainCommand(output, context);
  }
}
