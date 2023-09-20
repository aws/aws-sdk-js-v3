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

import { UpdateDomainContactPrivacyRequest, UpdateDomainContactPrivacyResponse } from "../models/models_0";
import { de_UpdateDomainContactPrivacyCommand, se_UpdateDomainContactPrivacyCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainContactPrivacyCommand}.
 */
export interface UpdateDomainContactPrivacyCommandInput extends UpdateDomainContactPrivacyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainContactPrivacyCommand}.
 */
export interface UpdateDomainContactPrivacyCommandOutput extends UpdateDomainContactPrivacyResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation updates the specified domain contact's privacy setting. When privacy
 * 			protection is enabled, your contact information is replaced with contact information for
 * 			the registrar or with the phrase "REDACTED FOR PRIVACY", or "On behalf of <domain
 * 			name> owner."</p>
 *          <note>
 *             <p>While some domains may allow different privacy settings per contact, we recommend
 * 				specifying the same privacy setting for all contacts.</p>
 *          </note>
 *          <p>This operation affects only the contact information for the specified contact type
 * 			(administrative, registrant, or technical). If the request succeeds, Amazon Route 53
 * 			returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If
 * 			the request doesn't complete successfully, the domain registrant will be notified by
 * 			email.</p>
 *          <important>
 *             <p>By disabling the privacy service via API, you consent to the publication of the
 * 				contact information provided for this domain via the public WHOIS database. You
 * 				certify that you are the registrant of this domain name and have the authority to
 * 				make this decision. You may withdraw your consent at any time by enabling privacy
 * 				protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53
 * 				console. Enabling privacy protection removes the contact information provided for
 * 				this domain from the WHOIS database. For more information on our privacy practices,
 * 				see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactPrivacyCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactPrivacyCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // UpdateDomainContactPrivacyRequest
 *   DomainName: "STRING_VALUE", // required
 *   AdminPrivacy: true || false,
 *   RegistrantPrivacy: true || false,
 *   TechPrivacy: true || false,
 * };
 * const command = new UpdateDomainContactPrivacyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainContactPrivacyResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainContactPrivacyCommandInput - {@link UpdateDomainContactPrivacyCommandInput}
 * @returns {@link UpdateDomainContactPrivacyCommandOutput}
 * @see {@link UpdateDomainContactPrivacyCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactPrivacyCommandOutput} for command's `response` shape.
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
export class UpdateDomainContactPrivacyCommand extends $Command<
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
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
  constructor(readonly input: UpdateDomainContactPrivacyCommandInput) {
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
  ): Handler<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDomainContactPrivacyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainContactPrivacyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "UpdateDomainContactPrivacy",
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
  private serialize(input: UpdateDomainContactPrivacyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDomainContactPrivacyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainContactPrivacyCommandOutput> {
    return de_UpdateDomainContactPrivacyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
