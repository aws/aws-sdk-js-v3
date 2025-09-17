// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelinesInput, ListPipelinesOutput } from "../models/models_0";
import { de_ListPipelinesCommand, se_ListPipelinesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesInput {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesOutput, __MetadataBearer {}

/**
 * <p>Gets a summary of all of the pipelines associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelinesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // ListPipelinesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesOutput
 * //   pipelines: [ // PipelineList
 * //     { // PipelineSummary
 * //       name: "STRING_VALUE",
 * //       version: Number("int"),
 * //       pipelineType: "V1" || "V2",
 * //       executionMode: "QUEUED" || "SUPERSEDED" || "PARALLEL",
 * //       created: new Date("TIMESTAMP"),
 * //       updated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format. Make sure that the next token
 *             you provide is the token returned by a previous call.</p>
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
export class ListPipelinesCommand extends $Command
  .classBuilder<
    ListPipelinesCommandInput,
    ListPipelinesCommandOutput,
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
  .s("CodePipeline_20150709", "ListPipelines", {})
  .n("CodePipelineClient", "ListPipelinesCommand")
  .f(void 0, void 0)
  .ser(se_ListPipelinesCommand)
  .de(de_ListPipelinesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesInput;
      output: ListPipelinesOutput;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
