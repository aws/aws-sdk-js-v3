// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeIpRulesRequest, RevokeIpRulesResult } from "../models/models_0";
import { RevokeIpRules } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeIpRulesCommand}.
 */
export interface RevokeIpRulesCommandInput extends RevokeIpRulesRequest {}
/**
 * @public
 *
 * The output of {@link RevokeIpRulesCommand}.
 */
export interface RevokeIpRulesCommandOutput extends RevokeIpRulesResult, __MetadataBearer {}

/**
 * <p>Removes one or more rules from the specified IP access control group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RevokeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RevokeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // RevokeIpRulesRequest
 *   GroupId: "STRING_VALUE", // required
 *   UserRules: [ // IpRevokedRuleList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RevokeIpRulesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeIpRulesCommandInput - {@link RevokeIpRulesCommandInput}
 * @returns {@link RevokeIpRulesCommandOutput}
 * @see {@link RevokeIpRulesCommandInput} for command's `input` shape.
 * @see {@link RevokeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class RevokeIpRulesCommand extends $Command
  .classBuilder<
    RevokeIpRulesCommandInput,
    RevokeIpRulesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "RevokeIpRules", {})
  .n("WorkSpacesClient", "RevokeIpRulesCommand")
  .sc(RevokeIpRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeIpRulesRequest;
      output: {};
    };
    sdk: {
      input: RevokeIpRulesCommandInput;
      output: RevokeIpRulesCommandOutput;
    };
  };
}
