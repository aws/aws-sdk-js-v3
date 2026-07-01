// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLinkRoutingRulesRequest, ListLinkRoutingRulesResponse } from "../models/models_0";
import { ListLinkRoutingRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListLinkRoutingRulesCommand}.
 */
export interface ListLinkRoutingRulesCommandInput extends ListLinkRoutingRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListLinkRoutingRulesCommand}.
 */
export interface ListLinkRoutingRulesCommandOutput extends ListLinkRoutingRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the routing rules for a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListLinkRoutingRulesCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListLinkRoutingRulesCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListLinkRoutingRulesRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLinkRoutingRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListLinkRoutingRulesResponse
 * //   rules: [ // LinkRoutingRuleList
 * //     { // LinkRoutingRuleSummary
 * //       ruleId: "STRING_VALUE", // required
 * //       priority: Number("int"), // required
 * //       conditions: { // RuleCondition
 * //         hostHeader: "STRING_VALUE",
 * //         hostHeaderWildcard: "STRING_VALUE",
 * //         pathPrefix: "STRING_VALUE",
 * //         pathExact: "STRING_VALUE",
 * //         queryStringEquals: { // QueryStringKeyValuePair
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //         queryStringExists: "STRING_VALUE",
 * //       },
 * //       status: "CREATION_IN_PROGRESS" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "DELETED" || "FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinkRoutingRulesCommandInput - {@link ListLinkRoutingRulesCommandInput}
 * @returns {@link ListLinkRoutingRulesCommandOutput}
 * @see {@link ListLinkRoutingRulesCommandInput} for command's `input` shape.
 * @see {@link ListLinkRoutingRulesCommandOutput} for command's `response` shape.
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
 * @example List link routing rules
 * ```javascript
 * // List all routing rules for a link
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   maxResults: 10
 * };
 * const command = new ListLinkRoutingRulesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "token123",
 *   rules: [
 *     {
 *       conditions: {
 *         hostHeader: "api.customer.com"
 *       },
 *       createdAt: "2024-01-01T12:00:00Z",
 *       priority: 10,
 *       ruleId: "rule-abc123def456",
 *       status: "ACTIVE",
 *       updatedAt: "2024-01-01T12:00:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLinkRoutingRulesCommand extends command<ListLinkRoutingRulesCommandInput, ListLinkRoutingRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListLinkRoutingRules",
  ListLinkRoutingRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLinkRoutingRulesRequest;
      output: ListLinkRoutingRulesResponse;
    };
    sdk: {
      input: ListLinkRoutingRulesCommandInput;
      output: ListLinkRoutingRulesCommandOutput;
    };
  };
}
