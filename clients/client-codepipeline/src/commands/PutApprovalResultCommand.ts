// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutApprovalResultInput, PutApprovalResultOutput } from "../models/models_0";
import { de_PutApprovalResultCommand, se_PutApprovalResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandInput extends PutApprovalResultInput {}
/**
 * @public
 *
 * The output of {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandOutput extends PutApprovalResultOutput, __MetadataBearer {}

/**
 * <p>Provides the response to a manual approval request to CodePipeline. Valid
 *             responses include Approved and Rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodePipelineClient(config);
 * const input = { // PutApprovalResultInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   result: { // ApprovalResult
 *     summary: "STRING_VALUE", // required
 *     status: "Approved" || "Rejected", // required
 *   },
 *   token: "STRING_VALUE", // required
 * };
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * // { // PutApprovalResultOutput
 * //   approvedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutApprovalResultCommandInput - {@link PutApprovalResultCommandInput}
 * @returns {@link PutApprovalResultCommandOutput}
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ActionNotFoundException} (client fault)
 *  <p>The specified action cannot be found.</p>
 *
 * @throws {@link ApprovalAlreadyCompletedException} (client fault)
 *  <p>The approval action has already been approved or rejected.</p>
 *
 * @throws {@link InvalidApprovalTokenException} (client fault)
 *  <p>The approval request already received a response or has expired.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class PutApprovalResultCommand extends $Command
  .classBuilder<
    PutApprovalResultCommandInput,
    PutApprovalResultCommandOutput,
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
  .s("CodePipeline_20150709", "PutApprovalResult", {})
  .n("CodePipelineClient", "PutApprovalResultCommand")
  .f(void 0, void 0)
  .ser(se_PutApprovalResultCommand)
  .de(de_PutApprovalResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApprovalResultInput;
      output: PutApprovalResultOutput;
    };
    sdk: {
      input: PutApprovalResultCommandInput;
      output: PutApprovalResultCommandOutput;
    };
  };
}
