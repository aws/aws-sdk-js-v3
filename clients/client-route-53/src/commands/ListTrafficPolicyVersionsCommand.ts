// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyVersions } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPolicyVersionsCommand}.
 */
export interface ListTrafficPolicyVersionsCommandInput extends ListTrafficPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPolicyVersionsCommand}.
 */
export interface ListTrafficPolicyVersionsCommandOutput extends ListTrafficPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 *          <p>Traffic policy versions are listed in numerical order by
 * 			<code>VersionNumber</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyVersionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyVersionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPolicyVersionsRequest
 *   Id: "STRING_VALUE", // required
 *   TrafficPolicyVersionMarker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPolicyVersionsResponse
 * //   TrafficPolicies: [ // TrafficPolicies // required
 * //     { // TrafficPolicy
 * //       Id: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //       Document: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   TrafficPolicyVersionMarker: "STRING_VALUE", // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPolicyVersionsCommandInput - {@link ListTrafficPolicyVersionsCommandInput}
 * @returns {@link ListTrafficPolicyVersionsCommandOutput}
 * @see {@link ListTrafficPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListTrafficPolicyVersionsCommand extends $Command
  .classBuilder<
    ListTrafficPolicyVersionsCommandInput,
    ListTrafficPolicyVersionsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "ListTrafficPolicyVersions", {})
  .n("Route53Client", "ListTrafficPolicyVersionsCommand")
  .sc(ListTrafficPolicyVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficPolicyVersionsRequest;
      output: ListTrafficPolicyVersionsResponse;
    };
    sdk: {
      input: ListTrafficPolicyVersionsCommandInput;
      output: ListTrafficPolicyVersionsCommandOutput;
    };
  };
}
