// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartWorkflowRunRequest, StartWorkflowRunResponse } from "../models/models_3";
import { de_StartWorkflowRunCommand, se_StartWorkflowRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWorkflowRunCommand}.
 */
export interface StartWorkflowRunCommandInput extends StartWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link StartWorkflowRunCommand}.
 */
export interface StartWorkflowRunCommandOutput extends StartWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Starts a new run of the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartWorkflowRunRequest
 *   Name: "STRING_VALUE", // required
 *   RunProperties: { // WorkflowRunProperties
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // StartWorkflowRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartWorkflowRunCommandInput - {@link StartWorkflowRunCommandInput}
 * @returns {@link StartWorkflowRunCommandOutput}
 * @see {@link StartWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StartWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartWorkflowRunCommand extends $Command
  .classBuilder<
    StartWorkflowRunCommandInput,
    StartWorkflowRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StartWorkflowRun", {})
  .n("GlueClient", "StartWorkflowRunCommand")
  .f(void 0, void 0)
  .ser(se_StartWorkflowRunCommand)
  .de(de_StartWorkflowRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWorkflowRunRequest;
      output: StartWorkflowRunResponse;
    };
    sdk: {
      input: StartWorkflowRunCommandInput;
      output: StartWorkflowRunCommandOutput;
    };
  };
}
