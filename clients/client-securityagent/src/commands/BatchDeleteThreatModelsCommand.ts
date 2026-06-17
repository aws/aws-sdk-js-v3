// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteThreatModelsInput, BatchDeleteThreatModelsOutput } from "../models/models_0";
import { BatchDeleteThreatModels$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteThreatModelsCommand}.
 */
export interface BatchDeleteThreatModelsCommandInput extends BatchDeleteThreatModelsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteThreatModelsCommand}.
 */
export interface BatchDeleteThreatModelsCommandOutput extends BatchDeleteThreatModelsOutput, __MetadataBearer {}

/**
 * <p>Deletes one or more threat models from an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchDeleteThreatModelsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchDeleteThreatModelsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchDeleteThreatModelsInput
 *   threatModelIds: [ // ThreatModelIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteThreatModelsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteThreatModelsOutput
 * //   deleted: [ // ThreatModelIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   failed: [ // DeleteThreatModelFailureList
 * //     { // DeleteThreatModelFailure
 * //       threatModelId: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteThreatModelsCommandInput - {@link BatchDeleteThreatModelsCommandInput}
 * @returns {@link BatchDeleteThreatModelsCommandOutput}
 * @see {@link BatchDeleteThreatModelsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteThreatModelsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchDeleteThreatModelsCommand extends $Command
  .classBuilder<
    BatchDeleteThreatModelsCommandInput,
    BatchDeleteThreatModelsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchDeleteThreatModels", {})
  .n("SecurityAgentClient", "BatchDeleteThreatModelsCommand")
  .sc(BatchDeleteThreatModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteThreatModelsInput;
      output: BatchDeleteThreatModelsOutput;
    };
    sdk: {
      input: BatchDeleteThreatModelsCommandInput;
      output: BatchDeleteThreatModelsCommandOutput;
    };
  };
}
