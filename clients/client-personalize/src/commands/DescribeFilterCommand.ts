// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeFilterRequest,
  DescribeFilterResponse,
  DescribeFilterResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeFilterCommand, se_DescribeFilterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFilterCommand}.
 */
export interface DescribeFilterCommandInput extends DescribeFilterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFilterCommand}.
 */
export interface DescribeFilterCommandOutput extends DescribeFilterResponse, __MetadataBearer {}

/**
 * <p>Describes a filter's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFilterCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFilterCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeFilterRequest
 *   filterArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFilterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFilterResponse
 * //   filter: { // Filter
 * //     name: "STRING_VALUE",
 * //     filterArn: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     datasetGroupArn: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     filterExpression: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFilterCommandInput - {@link DescribeFilterCommandInput}
 * @returns {@link DescribeFilterCommandOutput}
 * @see {@link DescribeFilterCommandInput} for command's `input` shape.
 * @see {@link DescribeFilterCommandOutput} for command's `response` shape.
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
export class DescribeFilterCommand extends $Command
  .classBuilder<
    DescribeFilterCommandInput,
    DescribeFilterCommandOutput,
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
  .s("AmazonPersonalize", "DescribeFilter", {})
  .n("PersonalizeClient", "DescribeFilterCommand")
  .f(void 0, DescribeFilterResponseFilterSensitiveLog)
  .ser(se_DescribeFilterCommand)
  .de(de_DescribeFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFilterRequest;
      output: DescribeFilterResponse;
    };
    sdk: {
      input: DescribeFilterCommandInput;
      output: DescribeFilterCommandOutput;
    };
  };
}
