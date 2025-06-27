// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 *
 * @public
 */
export class CheckDomainTransferabilityCommand extends $Command
  .classBuilder<
    CheckDomainTransferabilityCommandInput,
    CheckDomainTransferabilityCommandOutput,
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
  .s("Route53Domains_v20140515", "CheckDomainTransferability", {})
  .n("Route53DomainsClient", "CheckDomainTransferabilityCommand")
  .f(CheckDomainTransferabilityRequestFilterSensitiveLog, void 0)
  .ser(se_CheckDomainTransferabilityCommand)
  .de(de_CheckDomainTransferabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckDomainTransferabilityRequest;
      output: CheckDomainTransferabilityResponse;
    };
    sdk: {
      input: CheckDomainTransferabilityCommandInput;
      output: CheckDomainTransferabilityCommandOutput;
    };
  };
}
