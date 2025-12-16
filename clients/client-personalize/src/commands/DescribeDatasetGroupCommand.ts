// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandInput extends DescribeDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandOutput extends DescribeDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Describes the given dataset group. For more information on dataset
 *       groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDatasetGroupRequest
 *   datasetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetGroupResponse
 * //   datasetGroup: { // DatasetGroup
 * //     name: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //     domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetGroupCommandInput - {@link DescribeDatasetGroupCommandInput}
 * @returns {@link DescribeDatasetGroupCommandOutput}
 * @see {@link DescribeDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetGroupCommandOutput} for command's `response` shape.
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
export class DescribeDatasetGroupCommand extends $Command
  .classBuilder<
    DescribeDatasetGroupCommandInput,
    DescribeDatasetGroupCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeDatasetGroup", {})
  .n("PersonalizeClient", "DescribeDatasetGroupCommand")
  .sc(DescribeDatasetGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetGroupRequest;
      output: DescribeDatasetGroupResponse;
    };
    sdk: {
      input: DescribeDatasetGroupCommandInput;
      output: DescribeDatasetGroupCommandOutput;
    };
  };
}
