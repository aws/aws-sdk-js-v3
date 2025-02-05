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
 * <p>Create a scope of resources that you want to be available for Network Flow Monitor to generate metrics for,
 *    		when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend.
 *    		This call returns a scope ID to identify the scope.</p>
 *          <p>When you create a scope, you enable permissions for Network Flow Monitor. The scope is set to the
 *    		resources for the Amazon Web Services that enables the feature.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, CreateScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, CreateScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * //   status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
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
