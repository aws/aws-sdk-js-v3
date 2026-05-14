// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLinkRoutingRuleRequest, GetLinkRoutingRuleResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetLinkRoutingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinkRoutingRuleCommand}.
 */
export interface GetLinkRoutingRuleCommandInput extends GetLinkRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetLinkRoutingRuleCommand}.
 */
export interface GetLinkRoutingRuleCommandOutput extends GetLinkRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a routing rule for a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetLinkRoutingRuleCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetLinkRoutingRuleCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetLinkRoutingRuleRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   ruleId: "STRING_VALUE", // required
 * };
 * const command = new GetLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkRoutingRuleResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   ruleId: "STRING_VALUE", // required
 * //   priority: Number("int"), // required
 * //   conditions: { // RuleCondition
 * //     hostHeader: "STRING_VALUE",
 * //     hostHeaderWildcard: "STRING_VALUE",
 * //     pathPrefix: "STRING_VALUE",
 * //     pathExact: "STRING_VALUE",
 * //     queryStringEquals: { // QueryStringKeyValuePair
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //     queryStringExists: "STRING_VALUE",
 * //   },
 * //   status: "CREATION_IN_PROGRESS" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "DELETED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLinkRoutingRuleCommandInput - {@link GetLinkRoutingRuleCommandInput}
 * @returns {@link GetLinkRoutingRuleCommandOutput}
 * @see {@link GetLinkRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link GetLinkRoutingRuleCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get link routing rule details
 * ```javascript
 * // Get details of a link routing rule
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   ruleId: "rule-abc123def456"
 * };
 * const command = new GetLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   conditions: {
 *     hostHeader: "api.customer.com",
 *     pathPrefix: "/openrtb/"
 *   },
 *   createdAt: "2024-01-01T12:00:00Z",
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   priority: 10,
 *   ruleId: "rule-abc123def456",
 *   status: "ACTIVE",
 *   updatedAt: "2024-01-01T12:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetLinkRoutingRuleCommand extends $Command
  .classBuilder<
    GetLinkRoutingRuleCommandInput,
    GetLinkRoutingRuleCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetLinkRoutingRule", {})
  .n("RTBFabricClient", "GetLinkRoutingRuleCommand")
  .sc(GetLinkRoutingRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkRoutingRuleRequest;
      output: GetLinkRoutingRuleResponse;
    };
    sdk: {
      input: GetLinkRoutingRuleCommandInput;
      output: GetLinkRoutingRuleCommandOutput;
    };
  };
}
