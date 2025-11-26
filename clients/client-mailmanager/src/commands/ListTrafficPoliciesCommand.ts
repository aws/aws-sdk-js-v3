// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/models_0";
import { ListTrafficPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandInput extends ListTrafficPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandOutput extends ListTrafficPoliciesResponse, __MetadataBearer {}

/**
 * <p>List traffic policy resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListTrafficPoliciesCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListTrafficPoliciesCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListTrafficPoliciesRequest
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPoliciesResponse
 * //   TrafficPolicies: [ // TrafficPolicyList
 * //     { // TrafficPolicy
 * //       TrafficPolicyName: "STRING_VALUE", // required
 * //       TrafficPolicyId: "STRING_VALUE", // required
 * //       DefaultAction: "ALLOW" || "DENY", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrafficPoliciesCommandInput - {@link ListTrafficPoliciesCommandInput}
 * @returns {@link ListTrafficPoliciesCommandOutput}
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @example List TrafficPolicies
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrafficPolicies: [
 *     {
 *       DefaultAction: "DENY",
 *       TrafficPolicyId: "tp-12345",
 *       TrafficPolicyName: "trafficPolicyName"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List TrafficPolicies with PageSize
 * ```javascript
 * //
 * const input = {
 *   PageSize: 10
 * };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrafficPolicies: [
 *     {
 *       DefaultAction: "DENY",
 *       TrafficPolicyId: "tp-12345",
 *       TrafficPolicyName: "trafficPolicyName"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List TrafficPolicies with NextToken
 * ```javascript
 * //
 * const input = {
 *   NextToken: "nextToken"
 * };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrafficPolicies: [
 *     {
 *       DefaultAction: "DENY",
 *       TrafficPolicyId: "tp-12345",
 *       TrafficPolicyName: "trafficPolicyName"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTrafficPoliciesCommand extends $Command
  .classBuilder<
    ListTrafficPoliciesCommandInput,
    ListTrafficPoliciesCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListTrafficPolicies", {})
  .n("MailManagerClient", "ListTrafficPoliciesCommand")
  .sc(ListTrafficPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficPoliciesRequest;
      output: ListTrafficPoliciesResponse;
    };
    sdk: {
      input: ListTrafficPoliciesCommandInput;
      output: ListTrafficPoliciesCommandOutput;
    };
  };
}
