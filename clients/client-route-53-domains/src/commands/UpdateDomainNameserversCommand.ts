// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
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
 *
 * @public
 */
export class UpdateDomainNameserversCommand extends $Command
  .classBuilder<
    UpdateDomainNameserversCommandInput,
    UpdateDomainNameserversCommandOutput,
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
  .s("Route53Domains_v20140515", "UpdateDomainNameservers", {})
  .n("Route53DomainsClient", "UpdateDomainNameserversCommand")
  .f(UpdateDomainNameserversRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateDomainNameserversCommand)
  .de(de_UpdateDomainNameserversCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainNameserversRequest;
      output: UpdateDomainNameserversResponse;
    };
    sdk: {
      input: UpdateDomainNameserversCommandInput;
      output: UpdateDomainNameserversCommandOutput;
    };
  };
}
