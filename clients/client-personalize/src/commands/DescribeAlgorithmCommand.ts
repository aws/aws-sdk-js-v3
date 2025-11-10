// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAlgorithmRequest, DescribeAlgorithmResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeAlgorithm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandInput extends DescribeAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandOutput extends DescribeAlgorithmResponse, __MetadataBearer {}

/**
 * <p>Describes the given algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeAlgorithmCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeAlgorithmRequest
 *   algorithmArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlgorithmResponse
 * //   algorithm: { // Algorithm
 * //     name: "STRING_VALUE",
 * //     algorithmArn: "STRING_VALUE",
 * //     algorithmImage: { // AlgorithmImage
 * //       name: "STRING_VALUE",
 * //       dockerURI: "STRING_VALUE", // required
 * //     },
 * //     defaultHyperParameters: { // HyperParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     defaultHyperParameterRanges: { // DefaultHyperParameterRanges
 * //       integerHyperParameterRanges: [ // DefaultIntegerHyperParameterRanges
 * //         { // DefaultIntegerHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           minValue: Number("int"),
 * //           maxValue: Number("int"),
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //       continuousHyperParameterRanges: [ // DefaultContinuousHyperParameterRanges
 * //         { // DefaultContinuousHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           minValue: Number("double"),
 * //           maxValue: Number("double"),
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //       categoricalHyperParameterRanges: [ // DefaultCategoricalHyperParameterRanges
 * //         { // DefaultCategoricalHyperParameterRange
 * //           name: "STRING_VALUE",
 * //           values: [ // CategoricalValues
 * //             "STRING_VALUE",
 * //           ],
 * //           isTunable: true || false,
 * //         },
 * //       ],
 * //     },
 * //     defaultResourceConfig: { // ResourceConfig
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     trainingInputMode: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlgorithmCommandInput - {@link DescribeAlgorithmCommandInput}
 * @returns {@link DescribeAlgorithmCommandOutput}
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class DescribeAlgorithmCommand extends $Command
  .classBuilder<
    DescribeAlgorithmCommandInput,
    DescribeAlgorithmCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeAlgorithm", {})
  .n("PersonalizeClient", "DescribeAlgorithmCommand")
  .sc(DescribeAlgorithm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlgorithmRequest;
      output: DescribeAlgorithmResponse;
    };
    sdk: {
      input: DescribeAlgorithmCommandInput;
      output: DescribeAlgorithmCommandOutput;
    };
  };
}
