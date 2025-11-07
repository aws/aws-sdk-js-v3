// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/models_0";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetOperationDetail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation returns the current status of an operation that is not
 * 			completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetOperationDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetOperationDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
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
 * //   Type: "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN" || "RELEASE_TO_GANDI" || "TRANSFER_ON_RENEW" || "RESTORE_DOMAIN",
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
 *
 * @public
 */
export class GetOperationDetailCommand extends $Command
  .classBuilder<
    GetOperationDetailCommandInput,
    GetOperationDetailCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "GetOperationDetail", {})
  .n("Route53DomainsClient", "GetOperationDetailCommand")
  .sc(GetOperationDetail)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOperationDetailRequest;
      output: GetOperationDetailResponse;
    };
    sdk: {
      input: GetOperationDetailCommandInput;
      output: GetOperationDetailCommandOutput;
    };
  };
}
