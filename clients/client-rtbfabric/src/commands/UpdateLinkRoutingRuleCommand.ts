// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLinkRoutingRuleRequest, UpdateLinkRoutingRuleResponse } from "../models/models_0";
import { UpdateLinkRoutingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLinkRoutingRuleCommand}.
 */
export interface UpdateLinkRoutingRuleCommandInput extends UpdateLinkRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLinkRoutingRuleCommand}.
 */
export interface UpdateLinkRoutingRuleCommandOutput extends UpdateLinkRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Updates a routing rule for a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, UpdateLinkRoutingRuleCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, UpdateLinkRoutingRuleCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // UpdateLinkRoutingRuleRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   ruleId: "STRING_VALUE", // required
 *   priority: Number("int"), // required
 *   conditions: { // RuleCondition
 *     hostHeader: "STRING_VALUE",
 *     hostHeaderWildcard: "STRING_VALUE",
 *     pathPrefix: "STRING_VALUE",
 *     pathExact: "STRING_VALUE",
 *     queryStringEquals: { // QueryStringKeyValuePair
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *     queryStringExists: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLinkRoutingRuleResponse
 * //   ruleId: "STRING_VALUE", // required
 * //   status: "CREATION_IN_PROGRESS" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "DELETED" || "FAILED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateLinkRoutingRuleCommandInput - {@link UpdateLinkRoutingRuleCommandInput}
 * @returns {@link UpdateLinkRoutingRuleCommandOutput}
 * @see {@link UpdateLinkRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkRoutingRuleCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
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
 * @example Update a link routing rule
 * ```javascript
 * // Update the conditions of a routing rule
 * const input = {
 *   conditions: {
 *     hostHeader: "api.customer.com",
 *     pathPrefix: "/openrtb/"
 *   },
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   priority: 20,
 *   ruleId: "rule-abc123def456"
 * };
 * const command = new UpdateLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ruleId: "rule-abc123def456",
 *   status: "UPDATE_IN_PROGRESS",
 *   updatedAt: "2024-01-01T12:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLinkRoutingRuleCommand extends command<UpdateLinkRoutingRuleCommandInput, UpdateLinkRoutingRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLinkRoutingRule",
  UpdateLinkRoutingRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLinkRoutingRuleRequest;
      output: UpdateLinkRoutingRuleResponse;
    };
    sdk: {
      input: UpdateLinkRoutingRuleCommandInput;
      output: UpdateLinkRoutingRuleCommandOutput;
    };
  };
}
