// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListActionTypesInput, ListActionTypesOutput } from "../models/models_0";
import { ListActionTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActionTypesCommand}.
 */
export interface ListActionTypesCommandInput extends ListActionTypesInput {}
/**
 * @public
 *
 * The output of {@link ListActionTypesCommand}.
 */
export interface ListActionTypesCommandOutput extends ListActionTypesOutput, __MetadataBearer {}

/**
 * <p>Gets a summary of all CodePipeline action types associated with your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // ListActionTypesInput
 *   actionOwnerFilter: "AWS" || "ThirdParty" || "Custom",
 *   nextToken: "STRING_VALUE",
 *   regionFilter: "STRING_VALUE",
 * };
 * const command = new ListActionTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListActionTypesOutput
 * //   actionTypes: [ // ActionTypeList // required
 * //     { // ActionType
 * //       id: { // ActionTypeId
 * //         category: "Source" || "Build" || "Deploy" || "Test" || "Invoke" || "Approval" || "Compute", // required
 * //         owner: "AWS" || "ThirdParty" || "Custom", // required
 * //         provider: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       settings: { // ActionTypeSettings
 * //         thirdPartyConfigurationUrl: "STRING_VALUE",
 * //         entityUrlTemplate: "STRING_VALUE",
 * //         executionUrlTemplate: "STRING_VALUE",
 * //         revisionUrlTemplate: "STRING_VALUE",
 * //       },
 * //       actionConfigurationProperties: [ // ActionConfigurationPropertyList
 * //         { // ActionConfigurationProperty
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
 * //       outputArtifactDetails: {
 * //         minimumCount: Number("int"), // required
 * //         maximumCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionTypesCommandInput - {@link ListActionTypesCommandInput}
 * @returns {@link ListActionTypesCommandOutput}
 * @see {@link ListActionTypesCommandInput} for command's `input` shape.
 * @see {@link ListActionTypesCommandOutput} for command's `response` shape.
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
export class ListActionTypesCommand extends $Command
  .classBuilder<
    ListActionTypesCommandInput,
    ListActionTypesCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "ListActionTypes", {})
  .n("CodePipelineClient", "ListActionTypesCommand")
  .sc(ListActionTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActionTypesInput;
      output: ListActionTypesOutput;
    };
    sdk: {
      input: ListActionTypesCommandInput;
      output: ListActionTypesCommandOutput;
    };
  };
}
