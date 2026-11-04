// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateScopeInput, UpdateScopeOutput } from "../models/models_0";
import { UpdateScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update a scope to add or remove resources that you want to be available for Network Flow Monitor to generate metrics for, when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, UpdateScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, UpdateScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
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
 * //   status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED" || "DEACTIVATING" || "DEACTIVATED", // required
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested resource is in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkFlowMonitor service.
 *
 * @public
 */
export class UpdateScopeCommand extends command<UpdateScopeCommandInput, UpdateScopeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateScope",
  UpdateScope$
) {
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
