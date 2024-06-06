// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResumeWorkflowRunRequest, ResumeWorkflowRunResponse } from "../models/models_2";
import { de_ResumeWorkflowRunCommand, se_ResumeWorkflowRunCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ResumeWorkflowRun", {})
  .n("GlueClient", "ResumeWorkflowRunCommand")
  .f(void 0, void 0)
  .ser(se_ResumeWorkflowRunCommand)
  .de(de_ResumeWorkflowRunCommand)
  .build() {}
