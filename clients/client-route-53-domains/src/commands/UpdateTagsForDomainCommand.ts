// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTagsForDomainRequest, UpdateTagsForDomainResponse } from "../models/models_0";
import { de_UpdateTagsForDomainCommand, se_UpdateTagsForDomainCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTagsForDomainCommand}.
 */
export interface UpdateTagsForDomainCommandInput extends UpdateTagsForDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTagsForDomainCommand}.
 */
export interface UpdateTagsForDomainCommandOutput extends UpdateTagsForDomainResponse, __MetadataBearer {}

/**
 * <p>This operation adds or updates tags for a specified domain.</p>
 *          <p>All tag operations are eventually consistent; subsequent operations might not
 * 			immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // UpdateTagsForDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   TagsToUpdate: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateTagsForDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTagsForDomainCommandInput - {@link UpdateTagsForDomainCommandInput}
 * @returns {@link UpdateTagsForDomainCommandOutput}
 * @see {@link UpdateTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
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
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 *
 * @public
 */
export class UpdateTagsForDomainCommand extends $Command
  .classBuilder<
    UpdateTagsForDomainCommandInput,
    UpdateTagsForDomainCommandOutput,
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
  .s("Route53Domains_v20140515", "UpdateTagsForDomain", {})
  .n("Route53DomainsClient", "UpdateTagsForDomainCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTagsForDomainCommand)
  .de(de_UpdateTagsForDomainCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTagsForDomainRequest;
      output: {};
    };
    sdk: {
      input: UpdateTagsForDomainCommandInput;
      output: UpdateTagsForDomainCommandOutput;
    };
  };
}
