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

import {
  AssociateDelegationSignerToDomainRequest,
  AssociateDelegationSignerToDomainResponse,
} from "../models/models_0";
import {
  de_AssociateDelegationSignerToDomainCommand,
  se_AssociateDelegationSignerToDomainCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateDelegationSignerToDomainCommand}.
 */
export interface AssociateDelegationSignerToDomainCommandInput extends AssociateDelegationSignerToDomainRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDelegationSignerToDomainCommand}.
 */
export interface AssociateDelegationSignerToDomainCommandOutput
  extends AssociateDelegationSignerToDomainResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // AssociateDelegationSignerToDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   SigningAttributes: { // DnssecSigningAttributes
 *     Algorithm: Number("int"),
 *     Flags: Number("int"),
 *     PublicKey: "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateDelegationSignerToDomainCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDelegationSignerToDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateDelegationSignerToDomainCommandInput - {@link AssociateDelegationSignerToDomainCommandInput}
 * @returns {@link AssociateDelegationSignerToDomainCommandOutput}
 * @see {@link AssociateDelegationSignerToDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegationSignerToDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DnssecLimitExceeded} (client fault)
 *  <p> This error is returned if you call <code>AssociateDelegationSignerToDomain</code>
 * 			when the specified domain has reached the maximum number of DS records. You can't add
 * 			any additional DS records unless you delete an existing one first. </p>
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

  /**
   * @public
   */
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
  private serialize(
    input: AssociateDelegationSignerToDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateDelegationSignerToDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDelegationSignerToDomainCommandOutput> {
    return de_AssociateDelegationSignerToDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
