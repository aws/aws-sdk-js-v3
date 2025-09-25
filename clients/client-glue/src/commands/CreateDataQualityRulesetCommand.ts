// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateDataQualityRulesetRequest, CreateDataQualityRulesetResponse } from "../models/models_1";
import { CreateDataQualityRuleset } from "../schemas/schemas_16_DataQuality";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataQualityRulesetCommand}.
 */
export interface CreateDataQualityRulesetCommandInput extends CreateDataQualityRulesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataQualityRulesetCommand}.
 */
export interface CreateDataQualityRulesetCommandOutput extends CreateDataQualityRulesetResponse, __MetadataBearer {}

/**
 * <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p>
 *          <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDataQualityRulesetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDataQualityRulesetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateDataQualityRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Ruleset: "STRING_VALUE", // required
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TargetTable: { // DataQualityTargetTable
 *     TableName: "STRING_VALUE", // required
 *     DatabaseName: "STRING_VALUE", // required
 *     CatalogId: "STRING_VALUE",
 *   },
 *   DataQualitySecurityConfiguration: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataQualityRulesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataQualityRulesetResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataQualityRulesetCommandInput - {@link CreateDataQualityRulesetCommandInput}
 * @returns {@link CreateDataQualityRulesetCommandOutput}
 * @see {@link CreateDataQualityRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateDataQualityRulesetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateDataQualityRulesetCommand extends $Command
  .classBuilder<
    CreateDataQualityRulesetCommandInput,
    CreateDataQualityRulesetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateDataQualityRuleset", {})
  .n("GlueClient", "CreateDataQualityRulesetCommand")
  .sc(CreateDataQualityRuleset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataQualityRulesetRequest;
      output: CreateDataQualityRulesetResponse;
    };
    sdk: {
      input: CreateDataQualityRulesetCommandInput;
      output: CreateDataQualityRulesetCommandOutput;
    };
  };
}
