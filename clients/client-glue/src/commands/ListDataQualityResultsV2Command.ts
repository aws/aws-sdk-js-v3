// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataQualityResultsV2Request, ListDataQualityResultsV2Response } from "../models/models_2";
import { ListDataQualityResultsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataQualityResultsV2Command}.
 */
export interface ListDataQualityResultsV2CommandInput extends ListDataQualityResultsV2Request {}
/**
 * @public
 *
 * The output of {@link ListDataQualityResultsV2Command}.
 */
export interface ListDataQualityResultsV2CommandOutput extends ListDataQualityResultsV2Response, __MetadataBearer {}

/**
 * <p>Returns a paginated list of data quality execution results for your account, filtered by the specified criteria. Use the <code>NextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityResultsV2Command } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityResultsV2Command } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityResultsV2Request
 *   Filter: { // DataQualityResultsV2FilterCriteria
 *     DataSource: { // DataSource
 *       GlueTable: { // GlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: { // GlueTableAdditionalOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       DataQualityGlueTable: { // DataQualityGlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         PreProcessingQuery: "STRING_VALUE",
 *       },
 *     },
 *     PublishedAfter: new Date("TIMESTAMP"),
 *     PublishedBefore: new Date("TIMESTAMP"),
 *     Dimensions: { // PublishDataQualityResultDimensions
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EvaluationContext: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataQualityResultsV2Command(input);
 * const response = await client.send(command);
 * // { // ListDataQualityResultsV2Response
 * //   Results: [ // DataQualityResultsV2DescriptionList // required
 * //     { // DataQualityResultsV2Description
 * //       ResultId: "STRING_VALUE",
 * //       DataSource: { // DataSource
 * //         GlueTable: { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         DataQualityGlueTable: { // DataQualityGlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           PreProcessingQuery: "STRING_VALUE",
 * //         },
 * //       },
 * //       ResultPublishedOn: new Date("TIMESTAMP"),
 * //       Dimensions: { // PublishDataQualityResultDimensions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       EvaluationContext: "STRING_VALUE",
 * //       Descriptors: { // PublishDataQualityResultDescriptors
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityResultsV2CommandInput - {@link ListDataQualityResultsV2CommandInput}
 * @returns {@link ListDataQualityResultsV2CommandOutput}
 * @see {@link ListDataQualityResultsV2CommandInput} for command's `input` shape.
 * @see {@link ListDataQualityResultsV2CommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class ListDataQualityResultsV2Command extends command<ListDataQualityResultsV2CommandInput, ListDataQualityResultsV2CommandOutput>(
  _ep0,
  _mw0,
  "ListDataQualityResultsV2",
  ListDataQualityResultsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityResultsV2Request;
      output: ListDataQualityResultsV2Response;
    };
    sdk: {
      input: ListDataQualityResultsV2CommandInput;
      output: ListDataQualityResultsV2CommandOutput;
    };
  };
}
