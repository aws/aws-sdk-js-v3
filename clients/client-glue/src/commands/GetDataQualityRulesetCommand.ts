// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataQualityRulesetRequest, GetDataQualityRulesetResponse } from "../models/models_2";
import { de_GetDataQualityRulesetCommand, se_GetDataQualityRulesetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityRulesetCommand}.
 */
export interface GetDataQualityRulesetCommandInput extends GetDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityRulesetCommand}.
 */
export interface GetDataQualityRulesetCommandOutput extends GetDataQualityRulesetResponse, __MetadataBearer {}

/**
 * <p>Returns an existing ruleset by identifier or name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityRulesetResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Ruleset: "STRING_VALUE",
 * //   TargetTable: { // DataQualityTargetTable
 * //     TableName: "STRING_VALUE", // required
 * //     DatabaseName: "STRING_VALUE", // required
 * //     CatalogId: "STRING_VALUE",
 * //   },
 * //   CreatedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   RecommendationRunId: "STRING_VALUE",
 * //   DataQualitySecurityConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataQualityRulesetCommandInput - {@link GetDataQualityRulesetCommandInput}
 * @returns {@link GetDataQualityRulesetCommandOutput}
 * @see {@link GetDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetDataQualityRulesetCommand extends $Command
  .classBuilder<
    GetDataQualityRulesetCommandInput,
    GetDataQualityRulesetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetDataQualityRuleset", {})
  .n("GlueClient", "GetDataQualityRulesetCommand")
  .f(void 0, void 0)
  .ser(se_GetDataQualityRulesetCommand)
  .de(de_GetDataQualityRulesetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityRulesetRequest;
      output: GetDataQualityRulesetResponse;
    };
    sdk: {
      input: GetDataQualityRulesetCommandInput;
      output: GetDataQualityRulesetCommandOutput;
    };
  };
}
