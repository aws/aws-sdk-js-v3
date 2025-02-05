// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRulesetsRequest, ListRulesetsResponse } from "../models/models_0";
import { de_ListRulesetsCommand, se_ListRulesetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRulesetsCommand}.
 */
export interface ListRulesetsCommandInput extends ListRulesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesetsCommand}.
 */
export interface ListRulesetsCommandOutput extends ListRulesetsResponse, __MetadataBearer {}

/**
 * <p>List all rulesets available in the current account or rulesets associated
 *             with a specific resource (dataset).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRulesetsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRulesetsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataBrewClient(config);
 * const input = { // ListRulesetsRequest
 *   TargetArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRulesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesetsResponse
 * //   Rulesets: [ // RulesetItemList // required
 * //     { // RulesetItem
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE",
 * //       RuleCount: Number("int"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TargetArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesetsCommandInput - {@link ListRulesetsCommandInput}
 * @returns {@link ListRulesetsCommandOutput}
 * @see {@link ListRulesetsCommandInput} for command's `input` shape.
 * @see {@link ListRulesetsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 * @public
 */
export class ListRulesetsCommand extends $Command
  .classBuilder<
    ListRulesetsCommandInput,
    ListRulesetsCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "ListRulesets", {})
  .n("DataBrewClient", "ListRulesetsCommand")
  .f(void 0, void 0)
  .ser(se_ListRulesetsCommand)
  .de(de_ListRulesetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesetsRequest;
      output: ListRulesetsResponse;
    };
    sdk: {
      input: ListRulesetsCommandInput;
      output: ListRulesetsCommandOutput;
    };
  };
}
