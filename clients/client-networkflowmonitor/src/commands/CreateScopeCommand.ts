// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScopeInput, CreateScopeOutput } from "../models/models_0";
import { CreateScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScopeCommand}.
 */
export interface CreateScopeCommandInput extends CreateScopeInput {}
/**
 * @public
 *
 * The output of {@link CreateScopeCommand}.
 */
export interface CreateScopeCommandOutput extends CreateScopeOutput, __MetadataBearer {}

/**
 * In Network Flow Monitor, you specify a scope for the service to generate metrics for. By using the scope, Network Flow Monitor can generate a topology of all the resources to measure performance metrics for. When you create a scope, you enable permissions for Network Flow Monitor.
 *
 * A scope is a Region-account pair or multiple Region-account pairs. Network Flow Monitor uses your scope to determine all the resources (the topology) where Network Flow Monitor will gather network flow performance metrics for you. To provide performance metrics, Network Flow Monitor uses the data that is sent by the Network Flow Monitor agents you install on the resources.
 *
 * To define the Region-account pairs for your scope, the Network Flow Monitor API uses the following constucts, which allow for future flexibility in defining scopes:
 *
 * - *Targets*, which are arrays of targetResources.
 * - *Target resources*, which are Region-targetIdentifier pairs.
 * - *Target identifiers*, made up of a targetID (currently always an account ID) and a targetType (currently always an account).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, CreateScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, CreateScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // CreateScopeInput
 *   targets: [ // TargetResourceList // required
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
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScopeCommand(input);
 * const response = await client.send(command);
 * // { // CreateScopeOutput
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
 * @param CreateScopeCommandInput - {@link CreateScopeCommandInput}
 * @returns {@link CreateScopeCommandOutput}
 * @see {@link CreateScopeCommandInput} for command's `input` shape.
 * @see {@link CreateScopeCommandOutput} for command's `response` shape.
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
export class CreateScopeCommand extends command<CreateScopeCommandInput, CreateScopeCommandOutput>(
  _ep0,
  _mw0,
  "CreateScope",
  CreateScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScopeInput;
      output: CreateScopeOutput;
    };
    sdk: {
      input: CreateScopeCommandInput;
      output: CreateScopeCommandOutput;
    };
  };
}
