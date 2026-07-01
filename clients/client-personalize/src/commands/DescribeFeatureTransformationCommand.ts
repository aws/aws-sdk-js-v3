// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0";
import { DescribeFeatureTransformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeFeatureTransformationCommandOutput extends DescribeFeatureTransformationResponse, __MetadataBearer {}

/**
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
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
export class DescribeFeatureTransformationCommand extends command<DescribeFeatureTransformationCommandInput, DescribeFeatureTransformationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFeatureTransformation",
  DescribeFeatureTransformation$
) {
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
