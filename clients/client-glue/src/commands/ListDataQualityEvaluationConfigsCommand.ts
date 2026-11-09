// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDataQualityEvaluationConfigsRequest,
  ListDataQualityEvaluationConfigsResponse,
} from "../models/models_2";
import { ListDataQualityEvaluationConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataQualityEvaluationConfigsCommand}.
 */
export interface ListDataQualityEvaluationConfigsCommandInput extends ListDataQualityEvaluationConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityEvaluationConfigsCommand}.
 */
export interface ListDataQualityEvaluationConfigsCommandOutput extends ListDataQualityEvaluationConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the data quality evaluation configurations in your account, optionally filtered by level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityEvaluationConfigsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityEvaluationConfigsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityEvaluationConfigsRequest
 *   Level: "CATALOG" || "DATABASE" || "TABLE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataQualityEvaluationConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityEvaluationConfigsResponse
 * //   DataQualityEvaluationConfigs: [ // DataQualityEvaluationConfigList
 * //     { // DataQualityEvaluationConfigListDetails
 * //       Name: "STRING_VALUE",
 * //       EvaluationRunMode: "ON_DEMAND" || "EVALUATION_CONFIG",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       Level: "CATALOG" || "DATABASE" || "TABLE",
 * //       DataSource: { // DataQualityEvaluationConfigListDataSource
 * //         GlueTables: { // DataQualityEvaluationConfigListGlueTables
 * //           CatalogId: "STRING_VALUE", // required
 * //           DatabaseName: "STRING_VALUE",
 * //           TableNamePattern: "STRING_VALUE",
 * //         },
 * //       },
 * //       RulesetName: "STRING_VALUE",
 * //       ManagedRulesetName: "SIMPLE" || "ADVANCED",
 * //       PauseRuns: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityEvaluationConfigsCommandInput - {@link ListDataQualityEvaluationConfigsCommandInput}
 * @returns {@link ListDataQualityEvaluationConfigsCommandOutput}
 * @see {@link ListDataQualityEvaluationConfigsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityEvaluationConfigsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 *
 * @public
 */
export class ListDataQualityEvaluationConfigsCommand extends command<ListDataQualityEvaluationConfigsCommandInput, ListDataQualityEvaluationConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataQualityEvaluationConfigs",
  ListDataQualityEvaluationConfigs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityEvaluationConfigsRequest;
      output: ListDataQualityEvaluationConfigsResponse;
    };
    sdk: {
      input: ListDataQualityEvaluationConfigsCommandInput;
      output: ListDataQualityEvaluationConfigsCommandOutput;
    };
  };
}
