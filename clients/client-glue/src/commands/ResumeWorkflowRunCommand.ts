// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ResumeWorkflowRunRequest, ResumeWorkflowRunResponse } from "../models/models_2";
import { ResumeWorkflowRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeWorkflowRunCommand}.
 */
export interface ResumeWorkflowRunCommandInput extends ResumeWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link ResumeWorkflowRunCommand}.
 */
export interface ResumeWorkflowRunCommandOutput extends ResumeWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResumeWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResumeWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ResumeWorkflowRunRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 *   NodeIds: [ // NodeIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ResumeWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // ResumeWorkflowRunResponse
 * //   RunId: "STRING_VALUE",
 * //   NodeIds: [ // NodeIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ResumeWorkflowRunCommandInput - {@link ResumeWorkflowRunCommandInput}
 * @returns {@link ResumeWorkflowRunCommandOutput}
 * @see {@link ResumeWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link ResumeWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalWorkflowStateException} (client fault)
 *  <p>The workflow is in an invalid state to perform a requested operation.</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ResumeWorkflowRunCommand extends $Command
  .classBuilder<
    ResumeWorkflowRunCommandInput,
    ResumeWorkflowRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ResumeWorkflowRun", {})
  .n("GlueClient", "ResumeWorkflowRunCommand")
  .sc(ResumeWorkflowRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeWorkflowRunRequest;
      output: ResumeWorkflowRunResponse;
    };
    sdk: {
      input: ResumeWorkflowRunCommandInput;
      output: ResumeWorkflowRunCommandOutput;
    };
  };
}
