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

import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/models_0";
import { de_GetOperationDetailCommand, se_GetOperationDetailCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOperationDetailCommand}.
 */
export interface GetOperationDetailCommandInput extends GetOperationDetailRequest {}
/**
 * @public
 *
 * The output of {@link GetOperationDetailCommand}.
 */
export interface GetOperationDetailCommandOutput extends GetOperationDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns the current status of an operation that is not
 * 			completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetOperationDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetOperationDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // GetOperationDetailRequest
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new GetOperationDetailCommand(input);
 * const response = await client.send(command);
 * // { // GetOperationDetailResponse
 * //   OperationId: "STRING_VALUE",
 * //   Status: "SUBMITTED" || "IN_PROGRESS" || "ERROR" || "SUCCESSFUL" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   Type: "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN",
 * //   SubmittedDate: new Date("TIMESTAMP"),
 * //   LastUpdatedDate: new Date("TIMESTAMP"),
 * //   StatusFlag: "PENDING_ACCEPTANCE" || "PENDING_CUSTOMER_ACTION" || "PENDING_AUTHORIZATION" || "PENDING_PAYMENT_VERIFICATION" || "PENDING_SUPPORT_CASE",
 * // };
 *
 * ```
 *
 * @param GetOperationDetailCommandInput - {@link GetOperationDetailCommandInput}
 * @returns {@link GetOperationDetailCommandOutput}
 * @see {@link GetOperationDetailCommandInput} for command's `input` shape.
 * @see {@link GetOperationDetailCommandOutput} for command's `response` shape.
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
export class GetOperationDetailCommand extends $Command<
  GetOperationDetailCommandInput,
  GetOperationDetailCommandOutput,
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
  constructor(readonly input: GetOperationDetailCommandInput) {
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
  ): Handler<GetOperationDetailCommandInput, GetOperationDetailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOperationDetailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetOperationDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "GetOperationDetail",
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
  private serialize(input: GetOperationDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOperationDetailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationDetailCommandOutput> {
    return de_GetOperationDetailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
