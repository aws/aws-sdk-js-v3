// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLinkRoutingRuleRequest, CreateLinkRoutingRuleResponse } from "../models/models_0";
import { CreateLinkRoutingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLinkRoutingRuleCommand}.
 */
export interface CreateLinkRoutingRuleCommandInput extends CreateLinkRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateLinkRoutingRuleCommand}.
 */
export interface CreateLinkRoutingRuleCommandOutput extends CreateLinkRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a routing rule for a link.</p> <p>Routing rules use priority-based evaluation where lower priority numbers are evaluated first. Each rule specifies conditions that must all match for the rule to apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateLinkRoutingRuleCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateLinkRoutingRuleCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateLinkRoutingRuleRequest
 *   clientToken: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
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
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateLinkRoutingRuleResponse
 * //   ruleId: "STRING_VALUE", // required
 * //   status: "CREATION_IN_PROGRESS" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "DELETED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateLinkRoutingRuleCommandInput - {@link CreateLinkRoutingRuleCommandInput}
 * @returns {@link CreateLinkRoutingRuleCommandOutput}
 * @see {@link CreateLinkRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateLinkRoutingRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because you exceeded a service quota.</p>
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
 * @example Create a link routing rule
 * ```javascript
 * // Create a routing rule with host header and path prefix conditions
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   conditions: {
 *     hostHeader: "api.customer.com",
 *     pathPrefix: "/openrtb/"
 *   },
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   priority: 10
 * };
 * const command = new CreateLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2024-01-01T12:00:00Z",
 *   ruleId: "rule-abc123def456",
 *   status: "CREATION_IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLinkRoutingRuleCommand extends command<CreateLinkRoutingRuleCommandInput, CreateLinkRoutingRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateLinkRoutingRule",
  CreateLinkRoutingRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLinkRoutingRuleRequest;
      output: CreateLinkRoutingRuleResponse;
    };
    sdk: {
      input: CreateLinkRoutingRuleCommandInput;
      output: CreateLinkRoutingRuleCommandOutput;
    };
  };
}
