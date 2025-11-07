// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOperationsRequest, ListOperationsResponse } from "../models/models_0";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListOperations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOperationsCommand}.
 */
export interface ListOperationsCommandInput extends ListOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOperationsCommand}.
 */
export interface ListOperationsCommandOutput extends ListOperationsResponse, __MetadataBearer {}

/**
 * <p>Returns information about all of the operations that return an operation ID and that
 * 			have ever been performed on domains that were registered by the current account. </p>
 *          <p>This command runs only in the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListOperationsCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListOperationsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // ListOperationsRequest
 *   SubmittedSince: new Date("TIMESTAMP"),
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Status: [ // OperationStatusList
 *     "SUBMITTED" || "IN_PROGRESS" || "ERROR" || "SUCCESSFUL" || "FAILED",
 *   ],
 *   Type: [ // OperationTypeList
 *     "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN" || "RELEASE_TO_GANDI" || "TRANSFER_ON_RENEW" || "RESTORE_DOMAIN",
 *   ],
 *   SortBy: "SubmittedDate",
 *   SortOrder: "ASC" || "DESC",
 * };
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOperationsResponse
 * //   Operations: [ // OperationSummaryList
 * //     { // OperationSummary
 * //       OperationId: "STRING_VALUE",
 * //       Status: "SUBMITTED" || "IN_PROGRESS" || "ERROR" || "SUCCESSFUL" || "FAILED",
 * //       Type: "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN" || "RELEASE_TO_GANDI" || "TRANSFER_ON_RENEW" || "RESTORE_DOMAIN",
 * //       SubmittedDate: new Date("TIMESTAMP"),
 * //       DomainName: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       StatusFlag: "PENDING_ACCEPTANCE" || "PENDING_CUSTOMER_ACTION" || "PENDING_AUTHORIZATION" || "PENDING_PAYMENT_VERIFICATION" || "PENDING_SUPPORT_CASE",
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextPageMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOperationsCommandInput - {@link ListOperationsCommandInput}
 * @returns {@link ListOperationsCommandOutput}
 * @see {@link ListOperationsCommandInput} for command's `input` shape.
 * @see {@link ListOperationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListOperationsCommand extends $Command
  .classBuilder<
    ListOperationsCommandInput,
    ListOperationsCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "ListOperations", {})
  .n("Route53DomainsClient", "ListOperationsCommand")
  .sc(ListOperations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOperationsRequest;
      output: ListOperationsResponse;
    };
    sdk: {
      input: ListOperationsCommandInput;
      output: ListOperationsCommandOutput;
    };
  };
}
