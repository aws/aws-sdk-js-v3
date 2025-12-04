// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutThirdPartyJobSuccessResultInput } from "../models/models_0";
import { PutThirdPartyJobSuccessResult } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutThirdPartyJobSuccessResultCommand}.
 */
export interface PutThirdPartyJobSuccessResultCommandInput extends PutThirdPartyJobSuccessResultInput {}
/**
 * @public
 *
 * The output of {@link PutThirdPartyJobSuccessResultCommand}.
 */
export interface PutThirdPartyJobSuccessResultCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents the success of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // PutThirdPartyJobSuccessResultInput
 *   jobId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   currentRevision: { // CurrentRevision
 *     revision: "STRING_VALUE", // required
 *     changeIdentifier: "STRING_VALUE", // required
 *     created: new Date("TIMESTAMP"),
 *     revisionSummary: "STRING_VALUE",
 *   },
 *   continuationToken: "STRING_VALUE",
 *   executionDetails: { // ExecutionDetails
 *     summary: "STRING_VALUE",
 *     externalExecutionId: "STRING_VALUE",
 *     percentComplete: Number("int"),
 *   },
 * };
 * const command = new PutThirdPartyJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutThirdPartyJobSuccessResultCommandInput - {@link PutThirdPartyJobSuccessResultCommandInput}
 * @returns {@link PutThirdPartyJobSuccessResultCommandOutput}
 * @see {@link PutThirdPartyJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobSuccessResultCommandOutput} for command's `response` shape.
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
export class PutThirdPartyJobSuccessResultCommand extends $Command
  .classBuilder<
    PutThirdPartyJobSuccessResultCommandInput,
    PutThirdPartyJobSuccessResultCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "PutThirdPartyJobSuccessResult", {})
  .n("CodePipelineClient", "PutThirdPartyJobSuccessResultCommand")
  .sc(PutThirdPartyJobSuccessResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutThirdPartyJobSuccessResultInput;
      output: {};
    };
    sdk: {
      input: PutThirdPartyJobSuccessResultCommandInput;
      output: PutThirdPartyJobSuccessResultCommandOutput;
    };
  };
}
