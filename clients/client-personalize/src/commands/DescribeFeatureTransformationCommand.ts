// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  de_DescribeFeatureTransformationCommand,
  se_DescribeFeatureTransformationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureTransformationCommand}.
 */
export interface DescribeFeatureTransformationCommandInput extends DescribeFeatureTransformationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureTransformationCommand}.
 */
export interface DescribeFeatureTransformationCommandOutput
  extends DescribeFeatureTransformationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeFeatureTransformationRequest
 *   featureTransformationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFeatureTransformationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureTransformationResponse
 * //   featureTransformation: { // FeatureTransformation
 * //     name: "STRING_VALUE",
 * //     featureTransformationArn: "STRING_VALUE",
 * //     defaultParameters: { // FeaturizationParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFeatureTransformationCommandInput - {@link DescribeFeatureTransformationCommandInput}
 * @returns {@link DescribeFeatureTransformationCommandOutput}
 * @see {@link DescribeFeatureTransformationCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureTransformationCommandOutput} for command's `response` shape.
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
export class DescribeFeatureTransformationCommand extends $Command
  .classBuilder<
    DescribeFeatureTransformationCommandInput,
    DescribeFeatureTransformationCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeFeatureTransformation", {})
  .n("PersonalizeClient", "DescribeFeatureTransformationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFeatureTransformationCommand)
  .de(de_DescribeFeatureTransformationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFeatureTransformationRequest;
      output: DescribeFeatureTransformationResponse;
    };
    sdk: {
      input: DescribeFeatureTransformationCommandInput;
      output: DescribeFeatureTransformationCommandOutput;
    };
  };
}
