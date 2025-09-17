// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/models_0";
import { de_PollForThirdPartyJobsCommand, se_PollForThirdPartyJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PollForThirdPartyJobsCommand}.
 */
export interface PollForThirdPartyJobsCommandInput extends PollForThirdPartyJobsInput {}
/**
 * @public
 *
 * The output of {@link PollForThirdPartyJobsCommand}.
 */
export interface PollForThirdPartyJobsCommandOutput extends PollForThirdPartyJobsOutput, __MetadataBearer {}

/**
 * <p>Determines whether there are any third party jobs for a job worker to act on. Used
 *             for partner actions only.</p>
 *          <important>
 *             <p>When this API is called, CodePipeline returns temporary credentials for
 *                 the S3 bucket used to store artifacts for the pipeline, if the action requires
 *                 access to that S3 bucket for input or output artifacts.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForThirdPartyJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForThirdPartyJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PollForThirdPartyJobsInput
 *   actionTypeId: { // ActionTypeId
 *     category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *     owner: "AWS" || "ThirdParty" || "Custom", // required
 *     provider: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 *   maxBatchSize: Number("int"),
 * };
 * const command = new PollForThirdPartyJobsCommand(input);
 * const response = await client.send(command);
 * // { // PollForThirdPartyJobsOutput
 * //   jobs: [ // ThirdPartyJobList
 * //     { // ThirdPartyJob
 * //       clientId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PollForThirdPartyJobsCommandInput - {@link PollForThirdPartyJobsCommandInput}
 * @returns {@link PollForThirdPartyJobsCommandOutput}
 * @see {@link PollForThirdPartyJobsCommandInput} for command's `input` shape.
 * @see {@link PollForThirdPartyJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionTypeNotFoundException} (client fault)
 *  <p>The specified action type cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class PollForThirdPartyJobsCommand extends $Command
  .classBuilder<
    PollForThirdPartyJobsCommandInput,
    PollForThirdPartyJobsCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "PollForThirdPartyJobs", {})
  .n("CodePipelineClient", "PollForThirdPartyJobsCommand")
  .f(void 0, void 0)
  .ser(se_PollForThirdPartyJobsCommand)
  .de(de_PollForThirdPartyJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PollForThirdPartyJobsInput;
      output: PollForThirdPartyJobsOutput;
    };
    sdk: {
      input: PollForThirdPartyJobsCommandInput;
      output: PollForThirdPartyJobsCommandOutput;
    };
  };
}
