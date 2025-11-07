// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/models_0";
import { CreateCustomActionType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomActionTypeCommand}.
 */
export interface CreateCustomActionTypeCommandInput extends CreateCustomActionTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateCustomActionTypeCommand}.
 */
export interface CreateCustomActionTypeCommandOutput extends CreateCustomActionTypeOutput, __MetadataBearer {}

/**
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *                 Amazon Web Services account. Only used for custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreateCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreateCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // CreateCustomActionTypeInput
 *   category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 *   provider: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   settings: { // ActionTypeSettings
 *     thirdPartyConfigurationUrl: "STRING_VALUE",
 *     entityUrlTemplate: "STRING_VALUE",
 *     executionUrlTemplate: "STRING_VALUE",
 *     revisionUrlTemplate: "STRING_VALUE",
 *   },
 *   configurationProperties: [ // ActionConfigurationPropertyList
 *     { // ActionConfigurationProperty
 *       name: "STRING_VALUE", // required
 *       required: true || false, // required
 *       key: true || false, // required
 *       secret: true || false, // required
 *       queryable: true || false,
 *       description: "STRING_VALUE",
 *       type: "String" || "Number" || "Boolean",
 *     },
 *   ],
 *   inputArtifactDetails: { // ArtifactDetails
 *     minimumCount: Number("int"), // required
 *     maximumCount: Number("int"), // required
 *   },
 *   outputArtifactDetails: {
 *     minimumCount: Number("int"), // required
 *     maximumCount: Number("int"), // required
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomActionTypeOutput
 * //   actionType: { // ActionType
 * //     id: { // ActionTypeId
 * //       category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //       owner: "AWS" || "ThirdParty" || "Custom", // required
 * //       provider: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     settings: { // ActionTypeSettings
 * //       thirdPartyConfigurationUrl: "STRING_VALUE",
 * //       entityUrlTemplate: "STRING_VALUE",
 * //       executionUrlTemplate: "STRING_VALUE",
 * //       revisionUrlTemplate: "STRING_VALUE",
 * //     },
 * //     actionConfigurationProperties: [ // ActionConfigurationPropertyList
 * //       { // ActionConfigurationProperty
 * //         name: "STRING_VALUE", // required
 * //         required: true || false, // required
 * //         key: true || false, // required
 * //         secret: true || false, // required
 * //         queryable: true || false,
 * //         description: "STRING_VALUE",
 * //         type: "String" || "Number" || "Boolean",
 * //       },
 * //     ],
 * //     inputArtifactDetails: { // ArtifactDetails
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //     outputArtifactDetails: {
 * //       minimumCount: Number("int"), // required
 * //       maximumCount: Number("int"), // required
 * //     },
 * //   },
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateCustomActionTypeCommandInput - {@link CreateCustomActionTypeCommandInput}
 * @returns {@link CreateCustomActionTypeCommandOutput}
 * @see {@link CreateCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link InvalidTagsException} (client fault)
 *  <p>The specified resource tags are invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the Amazon Web Services account has exceeded
 *             the limit allowed for the account.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The tags limit for a resource has been exceeded.</p>
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
export class CreateCustomActionTypeCommand extends $Command
  .classBuilder<
    CreateCustomActionTypeCommandInput,
    CreateCustomActionTypeCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "CreateCustomActionType", {})
  .n("CodePipelineClient", "CreateCustomActionTypeCommand")
  .sc(CreateCustomActionType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomActionTypeInput;
      output: CreateCustomActionTypeOutput;
    };
    sdk: {
      input: CreateCustomActionTypeCommandInput;
      output: CreateCustomActionTypeCommandOutput;
    };
  };
}
