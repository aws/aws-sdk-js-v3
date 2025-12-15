// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutThirdPartyJobFailureResultInput } from "../models/models_0";
import { PutThirdPartyJobFailureResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutThirdPartyJobFailureResultCommand}.
 */
export interface PutThirdPartyJobFailureResultCommandInput extends PutThirdPartyJobFailureResultInput {}
/**
 * @public
 *
 * The output of {@link PutThirdPartyJobFailureResultCommand}.
 */
export interface PutThirdPartyJobFailureResultCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents the failure of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PutThirdPartyJobFailureResultInput
 *   jobId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   failureDetails: { // FailureDetails
 *     type: "JobFailed" || "ConfigurationError" || "PermissionError" || "RevisionOutOfSync" || "RevisionUnavailable" || "SystemUnavailable", // required
 *     message: "STRING_VALUE", // required
 *     externalExecutionId: "STRING_VALUE",
 *   },
 * };
 * const command = new PutThirdPartyJobFailureResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutThirdPartyJobFailureResultCommandInput - {@link PutThirdPartyJobFailureResultCommandInput}
 * @returns {@link PutThirdPartyJobFailureResultCommandOutput}
 * @see {@link PutThirdPartyJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The client token was specified in an invalid format</p>
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The job state was specified in an invalid format.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The job was specified in an invalid format or cannot be found.</p>
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
export class PutThirdPartyJobFailureResultCommand extends $Command
  .classBuilder<
    PutThirdPartyJobFailureResultCommandInput,
    PutThirdPartyJobFailureResultCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "PutThirdPartyJobFailureResult", {})
  .n("CodePipelineClient", "PutThirdPartyJobFailureResultCommand")
  .sc(PutThirdPartyJobFailureResult$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutThirdPartyJobFailureResultInput;
      output: {};
    };
    sdk: {
      input: PutThirdPartyJobFailureResultCommandInput;
      output: PutThirdPartyJobFailureResultCommandOutput;
    };
  };
}
