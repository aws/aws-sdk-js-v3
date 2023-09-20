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

import {
  UpdateDomainNameserversRequest,
  UpdateDomainNameserversRequestFilterSensitiveLog,
  UpdateDomainNameserversResponse,
} from "../models/models_0";
import { de_UpdateDomainNameserversCommand, se_UpdateDomainNameserversCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainNameserversCommand}.
 */
export interface UpdateDomainNameserversCommandInput extends UpdateDomainNameserversRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainNameserversCommand}.
 */
export interface UpdateDomainNameserversCommandOutput extends UpdateDomainNameserversResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation replaces the current set of name servers for the domain with the
 * 			specified set of name servers. If you use Amazon Route 53 as your DNS service, specify
 * 			the four name servers in the delegation set for the hosted zone for the domain.</p>
 *          <p>If successful, this operation returns an operation ID that you can use to track the
 * 			progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainNameserversCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainNameserversCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // UpdateDomainNameserversRequest
 *   DomainName: "STRING_VALUE", // required
 *   FIAuthKey: "STRING_VALUE",
 *   Nameservers: [ // NameserverList // required
 *     { // Nameserver
 *       Name: "STRING_VALUE", // required
 *       GlueIps: [ // GlueIpList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateDomainNameserversCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainNameserversResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainNameserversCommandInput - {@link UpdateDomainNameserversCommandInput}
 * @returns {@link UpdateDomainNameserversCommandOutput}
 * @see {@link UpdateDomainNameserversCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameserversCommandOutput} for command's `response` shape.
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
export class UpdateDomainNameserversCommand extends $Command<
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
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
  constructor(readonly input: UpdateDomainNameserversCommandInput) {
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
  ): Handler<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDomainNameserversCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "UpdateDomainNameserversCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainNameserversRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "UpdateDomainNameservers",
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
  private serialize(input: UpdateDomainNameserversCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDomainNameserversCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainNameserversCommandOutput> {
    return de_UpdateDomainNameserversCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
