// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateScopeInput, CreateScopeOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_CreateScopeCommand, se_CreateScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>In Network Flow Monitor, you specify a scope for the service to generate metrics for. By using the scope, Network Flow Monitor can generate a topology of all the resources to measure performance metrics for. When you create a scope, you enable permissions for Network Flow Monitor.</p> <p>A scope is a Region-account pair or multiple Region-account pairs. Network Flow Monitor uses your scope to determine all the resources (the topology) where Network Flow Monitor will gather network flow performance metrics for you. To provide performance metrics, Network Flow Monitor uses the data that is sent by the Network Flow Monitor agents you install on the resources.</p> <p>To define the Region-account pairs for your scope, the Network Flow Monitor API uses the following constucts, which allow for future flexibility in defining scopes:</p> <ul> <li> <p> <i>Targets</i>, which are arrays of targetResources.</p> </li> <li> <p> <i>Target resources</i>, which are Region-targetIdentifier pairs.</p> </li> <li> <p> <i>Target identifiers</i>, made up of a targetID (currently always an account ID) and a targetType (currently always an account). </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, CreateScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, CreateScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested resource is in use.</p>
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
 *
 * @public
 */
export class CreateScopeCommand extends $Command
  .classBuilder<
    CreateScopeCommandInput,
    CreateScopeCommandOutput,
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
  .s("NetworkFlowMonitor", "CreateScope", {})
  .n("NetworkFlowMonitorClient", "CreateScopeCommand")
  .f(void 0, void 0)
  .ser(se_CreateScopeCommand)
  .de(de_CreateScopeCommand)
  .build() {
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
