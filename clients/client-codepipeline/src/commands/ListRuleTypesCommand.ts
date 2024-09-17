// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleTypesInput, ListRuleTypesOutput } from "../models/models_0";
import { de_ListRuleTypesCommand, se_ListRuleTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleTypesCommand}.
 */
export interface ListRuleTypesCommandInput extends ListRuleTypesInput {}
/**
 * @public
 *
 * The output of {@link ListRuleTypesCommand}.
 */
export interface ListRuleTypesCommandOutput extends ListRuleTypesOutput, __MetadataBearer {}

/**
 * <p>Lists the rules for the condition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListRuleTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListRuleTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // ListRuleTypesInput
 *   ruleOwnerFilter: "AWS",
 *   regionFilter: "STRING_VALUE",
 * };
 * const command = new ListRuleTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleTypesOutput
 * //   ruleTypes: [ // RuleTypeList // required
 * //     { // RuleType
 * //       id: { // RuleTypeId
 * //         category: "Rule", // required
 * //         owner: "AWS",
 * //         provider: "STRING_VALUE", // required
 * //         version: "STRING_VALUE",
 * //       },
 * //       settings: { // RuleTypeSettings
 * //         thirdPartyConfigurationUrl: "STRING_VALUE",
 * //         entityUrlTemplate: "STRING_VALUE",
 * //         executionUrlTemplate: "STRING_VALUE",
 * //         revisionUrlTemplate: "STRING_VALUE",
 * //       },
 * //       ruleConfigurationProperties: [ // RuleConfigurationPropertyList
 * //         { // RuleConfigurationProperty
 * //           name: "STRING_VALUE", // required
 * //           required: true || false, // required
 * //           key: true || false, // required
 * //           secret: true || false, // required
 * //           queryable: true || false,
 * //           description: "STRING_VALUE",
 * //           type: "String" || "Number" || "Boolean",
 * //         },
 * //       ],
 * //       inputArtifactDetails: { // ArtifactDetails
 * //         minimumCount: Number("int"), // required
 * //         maximumCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRuleTypesCommandInput - {@link ListRuleTypesCommandInput}
 * @returns {@link ListRuleTypesCommandOutput}
 * @see {@link ListRuleTypesCommandInput} for command's `input` shape.
 * @see {@link ListRuleTypesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListRuleTypesCommand extends $Command
  .classBuilder<
    ListRuleTypesCommandInput,
    ListRuleTypesCommandOutput,
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
  .s("CodePipeline_20150709", "ListRuleTypes", {})
  .n("CodePipelineClient", "ListRuleTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleTypesCommand)
  .de(de_ListRuleTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleTypesInput;
      output: ListRuleTypesOutput;
    };
    sdk: {
      input: ListRuleTypesCommandInput;
      output: ListRuleTypesCommandOutput;
    };
  };
}
