// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLinkRoutingRuleRequest, DeleteLinkRoutingRuleResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { DeleteLinkRoutingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLinkRoutingRuleCommand}.
 */
export interface DeleteLinkRoutingRuleCommandInput extends DeleteLinkRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLinkRoutingRuleCommand}.
 */
export interface DeleteLinkRoutingRuleCommandOutput extends DeleteLinkRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes a routing rule from a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, DeleteLinkRoutingRuleCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, DeleteLinkRoutingRuleCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // DeleteLinkRoutingRuleRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   ruleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLinkRoutingRuleResponse
 * //   ruleId: "STRING_VALUE", // required
 * //   status: "CREATION_IN_PROGRESS" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "DELETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteLinkRoutingRuleCommandInput - {@link DeleteLinkRoutingRuleCommandInput}
 * @returns {@link DeleteLinkRoutingRuleCommandOutput}
 * @see {@link DeleteLinkRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkRoutingRuleCommandOutput} for command's `response` shape.
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
 * @example Delete a link routing rule
 * ```javascript
 * // Delete a link routing rule
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   ruleId: "rule-abc123def456"
 * };
 * const command = new DeleteLinkRoutingRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ruleId: "rule-abc123def456",
 *   status: "DELETION_IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLinkRoutingRuleCommand extends $Command
  .classBuilder<
    DeleteLinkRoutingRuleCommandInput,
    DeleteLinkRoutingRuleCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "DeleteLinkRoutingRule", {})
  .n("RTBFabricClient", "DeleteLinkRoutingRuleCommand")
  .sc(DeleteLinkRoutingRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLinkRoutingRuleRequest;
      output: DeleteLinkRoutingRuleResponse;
    };
    sdk: {
      input: DeleteLinkRoutingRuleCommandInput;
      output: DeleteLinkRoutingRuleCommandOutput;
    };
  };
}
