// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataQualityRulesetRequest, CreateDataQualityRulesetResponse } from "../models/models_1";
import { CreateDataQualityRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a data quality ruleset with DQDL rules applied to a specified Glue table.
 *
 * You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.
 *
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
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateDataQualityRulesetCommand extends command<CreateDataQualityRulesetCommandInput, CreateDataQualityRulesetCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataQualityRuleset",
  CreateDataQualityRuleset$
) {
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
