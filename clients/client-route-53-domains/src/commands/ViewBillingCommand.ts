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

import { ViewBillingRequest, ViewBillingResponse } from "../models/models_0";
import { de_ViewBillingCommand, se_ViewBillingCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ViewBillingCommand}.
 */
export interface ViewBillingCommandInput extends ViewBillingRequest {}
/**
 * @public
 *
 * The output of {@link ViewBillingCommand}.
 */
export interface ViewBillingCommandOutput extends ViewBillingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all the domain-related billing records for the current Amazon Web Services account for a specified period</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ViewBillingCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ViewBillingCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // ViewBillingRequest
 *   Start: new Date("TIMESTAMP"),
 *   End: new Date("TIMESTAMP"),
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ViewBillingCommand(input);
 * const response = await client.send(command);
 * // { // ViewBillingResponse
 * //   NextPageMarker: "STRING_VALUE",
 * //   BillingRecords: [ // BillingRecords
 * //     { // BillingRecord
 * //       DomainName: "STRING_VALUE",
 * //       Operation: "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN",
 * //       InvoiceId: "STRING_VALUE",
 * //       BillDate: new Date("TIMESTAMP"),
 * //       Price: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ViewBillingCommandInput - {@link ViewBillingCommandInput}
 * @returns {@link ViewBillingCommandOutput}
 * @see {@link ViewBillingCommandInput} for command's `input` shape.
 * @see {@link ViewBillingCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class ViewBillingCommand extends $Command<
  ViewBillingCommandInput,
  ViewBillingCommandOutput,
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
  constructor(readonly input: ViewBillingCommandInput) {
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
  ): Handler<ViewBillingCommandInput, ViewBillingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ViewBillingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ViewBillingCommand";
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
  private serialize(input: ViewBillingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ViewBillingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ViewBillingCommandOutput> {
    return de_ViewBillingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
