// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateScopeInput, UpdateScopeOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_UpdateScopeCommand, se_UpdateScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScopeCommand}.
 */
export interface UpdateScopeCommandInput extends UpdateScopeInput {}
/**
 * @public
 *
 * The output of {@link UpdateScopeCommand}.
 */
export interface UpdateScopeCommandOutput extends UpdateScopeOutput, __MetadataBearer {}

/**
 * <p>Update a scope to add or remove resources that you want to be available for Network Flow Monitor to generate metrics for,
 *    		when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, UpdateScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, UpdateScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // UpdateScopeInput
 *   scopeId: "STRING_VALUE", // required
 *   resourcesToAdd: [ // TargetResourceList
 *     { // TargetResource
 *       targetIdentifier: { // TargetIdentifier
 *         targetId: { // TargetId Union: only one key present
 *           accountId: "STRING_VALUE",
 *         },
 *         targetType: "ACCOUNT", // required
 *       },
 *       region: "STRING_VALUE", // required
 *     },
 *   ],
 *   resourcesToDelete: [
 *     {
 *       targetIdentifier: {
 *         targetId: {//  Union: only one key present
 *           accountId: "STRING_VALUE",
 *         },
 *         targetType: "ACCOUNT", // required
 *       },
 *       region: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateScopeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScopeOutput
 * //   scopeId: "STRING_VALUE", // required
 * //   status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
 * //   scopeArn: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScopeCommandInput - {@link UpdateScopeCommandInput}
 * @returns {@link UpdateScopeCommandOutput}
 * @see {@link UpdateScopeCommandInput} for command's `input` shape.
 * @see {@link UpdateScopeCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 * @public
 */
export class UpdateScopeCommand extends $Command
  .classBuilder<
    UpdateScopeCommandInput,
    UpdateScopeCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "UpdateScope", {})
  .n("NetworkFlowMonitorClient", "UpdateScopeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScopeCommand)
  .de(de_UpdateScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScopeInput;
      output: UpdateScopeOutput;
    };
    sdk: {
      input: UpdateScopeCommandInput;
      output: UpdateScopeCommandOutput;
    };
  };
}
