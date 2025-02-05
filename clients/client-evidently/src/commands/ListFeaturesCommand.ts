// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListFeaturesRequest, ListFeaturesResponse } from "../models/models_0";
import { de_ListFeaturesCommand, se_ListFeaturesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFeaturesCommand}.
 */
export interface ListFeaturesCommandInput extends ListFeaturesRequest {}
/**
 * @public
 *
 * The output of {@link ListFeaturesCommand}.
 */
export interface ListFeaturesCommandOutput extends ListFeaturesResponse, __MetadataBearer {}

/**
 * <p>Returns configuration details about all the features in the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListFeaturesCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListFeaturesCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EvidentlyClient(config);
 * const input = { // ListFeaturesRequest
 *   project: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFeaturesCommand(input);
 * const response = await client.send(command);
 * // { // ListFeaturesResponse
 * //   features: [ // FeatureSummariesList
 * //     { // FeatureSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       project: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       evaluationStrategy: "STRING_VALUE", // required
 * //       evaluationRules: [ // EvaluationRulesList
 * //         { // EvaluationRule
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       defaultVariation: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFeaturesCommandInput - {@link ListFeaturesCommandInput}
 * @returns {@link ListFeaturesCommandOutput}
 * @see {@link ListFeaturesCommandInput} for command's `input` shape.
 * @see {@link ListFeaturesCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 * @public
 */
export class ListFeaturesCommand extends $Command
  .classBuilder<
    ListFeaturesCommandInput,
    ListFeaturesCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "ListFeatures", {})
  .n("EvidentlyClient", "ListFeaturesCommand")
  .f(void 0, void 0)
  .ser(se_ListFeaturesCommand)
  .de(de_ListFeaturesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFeaturesRequest;
      output: ListFeaturesResponse;
    };
    sdk: {
      input: ListFeaturesCommandInput;
      output: ListFeaturesCommandOutput;
    };
  };
}
