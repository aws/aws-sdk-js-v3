// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchTypesInput, SearchTypesOutput } from "../models/models_2";
import { SearchTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchTypesCommand}.
 */
export interface SearchTypesCommandInput extends SearchTypesInput {}
/**
 * @public
 *
 * The output of {@link SearchTypesCommand}.
 */
export interface SearchTypesCommandOutput extends SearchTypesOutput, __MetadataBearer {}

/**
 * Searches for types in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The --domain-identifier must refer to an existing Amazon DataZone domain.
 * - --search-scope must be one of the valid values including: ASSET_TYPE, GLOSSARY_TERM_TYPE, DATA_PRODUCT_TYPE.
 * - The --managed flag must be present without a value.
 * - The user must have permissions for form or asset types in the domain.
 * - If using --filters, ensure that the JSON is valid.
 * - Filters contain correct structure (attribute, value, operator).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchTypesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchTypesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // SearchTypesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchScope: "ASSET_TYPE" || "FORM_TYPE" || "LINEAGE_NODE_TYPE", // required
 *   searchText: "STRING_VALUE",
 *   searchIn: [ // SearchInList
 *     { // SearchInItem
 *       attribute: "STRING_VALUE", // required
 *     },
 *   ],
 *   filters: { // FilterClause Union: only one key present
 *     filter: { // Filter
 *       attribute: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *       intValue: Number("long"),
 *       operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *     },
 *     and: [ // FilterList
 *       {//  Union: only one key present
 *         filter: {
 *           attribute: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *           intValue: Number("long"),
 *           operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *         },
 *         and: [
 *           "<FilterClause>",
 *         ],
 *         or: [
 *           "<FilterClause>",
 *         ],
 *       },
 *     ],
 *     or: [
 *       "<FilterClause>",
 *     ],
 *   },
 *   sort: { // SearchSort
 *     attribute: "STRING_VALUE", // required
 *     order: "ASCENDING" || "DESCENDING",
 *   },
 *   managed: true || false, // required
 * };
 * const command = new SearchTypesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTypesOutput
 * //   items: [ // SearchTypesResultItems
 * //     { // SearchTypesResultItem Union: only one key present
 * //       assetTypeItem: { // AssetTypeItem
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         formsOutput: { // FormsOutputMap // required
 * //           "<keys>": { // FormEntryOutput
 * //             typeName: "STRING_VALUE", // required
 * //             typeRevision: "STRING_VALUE", // required
 * //             required: true || false,
 * //           },
 * //         },
 * //         owningProjectId: "STRING_VALUE", // required
 * //         originDomainId: "STRING_VALUE",
 * //         originProjectId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //       },
 * //       formTypeItem: { // FormTypeData
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE", // required
 * //         model: { // Model Union: only one key present
 * //           smithy: "STRING_VALUE",
 * //         },
 * //         status: "ENABLED" || "DISABLED",
 * //         owningProjectId: "STRING_VALUE",
 * //         originDomainId: "STRING_VALUE",
 * //         originProjectId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         imports: [ // ImportList
 * //           { // Import
 * //             name: "STRING_VALUE", // required
 * //             revision: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       lineageNodeTypeItem: { // LineageNodeTypeItem
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //         revision: "STRING_VALUE", // required
 * //         formsOutput: { // required
 * //           "<keys>": {
 * //             typeName: "STRING_VALUE", // required
 * //             typeRevision: "STRING_VALUE", // required
 * //             required: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   totalMatchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchTypesCommandInput - {@link SearchTypesCommandInput}
 * @returns {@link SearchTypesCommandOutput}
 * @see {@link SearchTypesCommandInput} for command's `input` shape.
 * @see {@link SearchTypesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class SearchTypesCommand extends command<SearchTypesCommandInput, SearchTypesCommandOutput>(
  _ep0,
  _mw0,
  "SearchTypes",
  SearchTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTypesInput;
      output: SearchTypesOutput;
    };
    sdk: {
      input: SearchTypesCommandInput;
      output: SearchTypesCommandOutput;
    };
  };
}
