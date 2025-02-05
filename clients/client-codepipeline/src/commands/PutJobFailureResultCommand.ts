// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutJobFailureResultInput } from "../models/models_0";
import { de_PutJobFailureResultCommand, se_PutJobFailureResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutJobFailureResultCommand}.
 */
export interface PutJobFailureResultCommandInput extends PutJobFailureResultInput {}
/**
 * @public
 *
 * The output of {@link PutJobFailureResultCommand}.
 */
export interface PutJobFailureResultCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // PutJobFailureResultInput
 *   jobId: "STRING_VALUE", // required
 *   failureDetails: { // FailureDetails
 *     type: "JobFailed" || "ConfigurationError" || "PermissionError" || "RevisionOutOfSync" || "RevisionUnavailable" || "SystemUnavailable", // required
 *     message: "STRING_VALUE", // required
 *     externalExecutionId: "STRING_VALUE",
 *   },
 * };
 * const command = new PutJobFailureResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutJobFailureResultCommandInput - {@link PutJobFailureResultCommandInput}
 * @returns {@link PutJobFailureResultCommandOutput}
 * @see {@link PutJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
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
 * @public
 */
export class PutJobFailureResultCommand extends $Command
  .classBuilder<
    PutJobFailureResultCommandInput,
    PutJobFailureResultCommandOutput,
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
  .s("CodePipeline_20150709", "PutJobFailureResult", {})
  .n("CodePipelineClient", "PutJobFailureResultCommand")
  .f(void 0, void 0)
  .ser(se_PutJobFailureResultCommand)
  .de(de_PutJobFailureResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutJobFailureResultInput;
      output: {};
    };
    sdk: {
      input: PutJobFailureResultCommandInput;
      output: PutJobFailureResultCommandOutput;
    };
  };
}
