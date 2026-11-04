// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetFiltersInput, ListAssetFiltersOutput } from "../models/models_1";
import { ListAssetFilters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetFiltersCommand}.
 */
export interface ListAssetFiltersCommandInput extends ListAssetFiltersInput {}
/**
 * @public
 *
 * The output of {@link ListAssetFiltersCommand}.
 */
export interface ListAssetFiltersCommandOutput extends ListAssetFiltersOutput, __MetadataBearer {}

/**
 * Lists asset filters.
 *
 * Prerequisites:
 *
 * - A valid domain and asset must exist.
 * - The asset must have at least one filter created to return results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListAssetFiltersCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListAssetFiltersCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListAssetFiltersInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   assetIdentifier: "STRING_VALUE", // required
 *   status: "VALID" || "INVALID",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetFiltersOutput
 * //   items: [ // AssetFilters // required
 * //     { // AssetFilterSummary
 * //       id: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       assetId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "VALID" || "INVALID",
 * //       effectiveColumnNames: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       effectiveRowFilter: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetFiltersCommandInput - {@link ListAssetFiltersCommandInput}
 * @returns {@link ListAssetFiltersCommandOutput}
 * @see {@link ListAssetFiltersCommandInput} for command's `input` shape.
 * @see {@link ListAssetFiltersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class ListAssetFiltersCommand extends command<ListAssetFiltersCommandInput, ListAssetFiltersCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetFilters",
  ListAssetFilters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetFiltersInput;
      output: ListAssetFiltersOutput;
    };
    sdk: {
      input: ListAssetFiltersCommandInput;
      output: ListAssetFiltersCommandOutput;
    };
  };
}
