// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAssetFiltersInput,
  ListAssetFiltersOutput,
  ListAssetFiltersOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAssetFiltersCommand, se_ListAssetFiltersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists asset filters.</p> <p>Prerequisites:</p> <ul> <li> <p>A valid domain and asset must exist. </p> </li> <li> <p>The asset must have at least one filter created to return results. </p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListAssetFiltersCommand extends $Command
  .classBuilder<
    ListAssetFiltersCommandInput,
    ListAssetFiltersCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListAssetFilters", {})
  .n("DataZoneClient", "ListAssetFiltersCommand")
  .f(void 0, ListAssetFiltersOutputFilterSensitiveLog)
  .ser(se_ListAssetFiltersCommand)
  .de(de_ListAssetFiltersCommand)
  .build() {
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
