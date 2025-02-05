// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ViewBillingRequest, ViewBillingResponse } from "../models/models_0";
import { de_ViewBillingCommand, se_ViewBillingCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns all the domain-related billing records for the current Amazon Web Services account for a specified period</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ViewBillingCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ViewBillingCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * //       Operation: "REGISTER_DOMAIN" || "DELETE_DOMAIN" || "TRANSFER_IN_DOMAIN" || "UPDATE_DOMAIN_CONTACT" || "UPDATE_NAMESERVER" || "CHANGE_PRIVACY_PROTECTION" || "DOMAIN_LOCK" || "ENABLE_AUTORENEW" || "DISABLE_AUTORENEW" || "ADD_DNSSEC" || "REMOVE_DNSSEC" || "EXPIRE_DOMAIN" || "TRANSFER_OUT_DOMAIN" || "CHANGE_DOMAIN_OWNER" || "RENEW_DOMAIN" || "PUSH_DOMAIN" || "INTERNAL_TRANSFER_OUT_DOMAIN" || "INTERNAL_TRANSFER_IN_DOMAIN" || "RELEASE_TO_GANDI" || "TRANSFER_ON_RENEW" || "RESTORE_DOMAIN",
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
 * @public
 */
export class ViewBillingCommand extends $Command
  .classBuilder<
    ViewBillingCommandInput,
    ViewBillingCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "ViewBilling", {})
  .n("Route53DomainsClient", "ViewBillingCommand")
  .f(void 0, void 0)
  .ser(se_ViewBillingCommand)
  .de(de_ViewBillingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ViewBillingRequest;
      output: ViewBillingResponse;
    };
    sdk: {
      input: ViewBillingCommandInput;
      output: ViewBillingCommandOutput;
    };
  };
}
