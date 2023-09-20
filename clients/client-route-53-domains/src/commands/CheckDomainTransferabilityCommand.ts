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
  CheckDomainTransferabilityRequest,
  CheckDomainTransferabilityRequestFilterSensitiveLog,
  CheckDomainTransferabilityResponse,
} from "../models/models_0";
import { de_CheckDomainTransferabilityCommand, se_CheckDomainTransferabilityCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckDomainTransferabilityCommand}.
 */
export interface CheckDomainTransferabilityCommandInput extends CheckDomainTransferabilityRequest {}
/**
 * @public
 *
 * The output of {@link CheckDomainTransferabilityCommand}.
 */
export interface CheckDomainTransferabilityCommandOutput extends CheckDomainTransferabilityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainTransferabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainTransferabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // CheckDomainTransferabilityRequest
 *   DomainName: "STRING_VALUE", // required
 *   AuthCode: "STRING_VALUE",
 * };
 * const command = new CheckDomainTransferabilityCommand(input);
 * const response = await client.send(command);
 * // { // CheckDomainTransferabilityResponse
 * //   Transferability: { // DomainTransferability
 * //     Transferable: "TRANSFERABLE" || "UNTRANSFERABLE" || "DONT_KNOW" || "DOMAIN_IN_OWN_ACCOUNT" || "DOMAIN_IN_ANOTHER_ACCOUNT" || "PREMIUM_DOMAIN",
 * //   },
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckDomainTransferabilityCommandInput - {@link CheckDomainTransferabilityCommandInput}
 * @returns {@link CheckDomainTransferabilityCommandOutput}
 * @see {@link CheckDomainTransferabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainTransferabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class CheckDomainTransferabilityCommand extends $Command<
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
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
  constructor(readonly input: CheckDomainTransferabilityCommandInput) {
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
  ): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckDomainTransferabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "CheckDomainTransferabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDomainTransferabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "CheckDomainTransferability",
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
  private serialize(input: CheckDomainTransferabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckDomainTransferabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckDomainTransferabilityCommandOutput> {
    return de_CheckDomainTransferabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
