// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainsRequest, ListDomainsResponse } from "../models/models_0";
import { de_ListDomainsCommand, se_ListDomainsCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends ListDomainsResponse, __MetadataBearer {}

/**
 * <p>This operation returns all the domain names registered with Amazon Route 53 for the
 * 			current Amazon Web Services account if no filtering conditions are used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListDomainsCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListDomainsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // ListDomainsRequest
 *   FilterConditions: [ // FilterConditions
 *     { // FilterCondition
 *       Name: "DomainName" || "Expiry", // required
 *       Operator: "LE" || "GE" || "BEGINS_WITH", // required
 *       Values: [ // Values // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCondition: { // SortCondition
 *     Name: "DomainName" || "Expiry", // required
 *     SortOrder: "ASC" || "DESC", // required
 *   },
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainsResponse
 * //   Domains: [ // DomainSummaryList
 * //     { // DomainSummary
 * //       DomainName: "STRING_VALUE",
 * //       AutoRenew: true || false,
 * //       TransferLock: true || false,
 * //       Expiry: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextPageMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
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
export class ListDomainsCommand extends $Command
  .classBuilder<
    ListDomainsCommandInput,
    ListDomainsCommandOutput,
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
  .s("Route53Domains_v20140515", "ListDomains", {})
  .n("Route53DomainsClient", "ListDomainsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainsCommand)
  .de(de_ListDomainsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainsRequest;
      output: ListDomainsResponse;
    };
    sdk: {
      input: ListDomainsCommandInput;
      output: ListDomainsCommandOutput;
    };
  };
}
