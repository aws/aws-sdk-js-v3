// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetScopeInput, GetScopeOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_GetScopeCommand, se_GetScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScopeCommand}.
 */
export interface GetScopeCommandInput extends GetScopeInput {}
/**
 * @public
 *
 * The output of {@link GetScopeCommand}.
 */
export interface GetScopeCommandOutput extends GetScopeOutput, __MetadataBearer {}

/**
 * <p>Gets information about a scope, including the name, status, tags, and target details.
 *    		The scope in Network Flow Monitor is an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetScopeInput
 *   scopeId: "STRING_VALUE", // required
 * };
 * const command = new GetScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetScopeOutput
 * //   scopeId: "STRING_VALUE", // required
 * //   status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
 * //   scopeArn: "STRING_VALUE", // required
 * //   targets: [ // TargetResourceList // required
 * //     { // TargetResource
 * //       targetIdentifier: { // TargetIdentifier
 * //         targetId: { // TargetId Union: only one key present
 * //           accountId: "STRING_VALUE",
 * //         },
 * //         targetType: "ACCOUNT", // required
 * //       },
 * //       region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetScopeCommandInput - {@link GetScopeCommandInput}
 * @returns {@link GetScopeCommandOutput}
 * @see {@link GetScopeCommandInput} for command's `input` shape.
 * @see {@link GetScopeCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
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
export class GetScopeCommand extends $Command
  .classBuilder<
    GetScopeCommandInput,
    GetScopeCommandOutput,
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
  .s("NetworkFlowMonitor", "GetScope", {})
  .n("NetworkFlowMonitorClient", "GetScopeCommand")
  .f(void 0, void 0)
  .ser(se_GetScopeCommand)
  .de(de_GetScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScopeInput;
      output: GetScopeOutput;
    };
    sdk: {
      input: GetScopeCommandInput;
      output: GetScopeCommandOutput;
    };
  };
}
