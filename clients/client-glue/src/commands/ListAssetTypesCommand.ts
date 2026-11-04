// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetTypesRequest, ListAssetTypesResponse } from "../models/models_2";
import { ListAssetTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetTypesCommand}.
 */
export interface ListAssetTypesCommandInput extends ListAssetTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetTypesCommand}.
 */
export interface ListAssetTypesCommandOutput extends ListAssetTypesResponse, __MetadataBearer {}

/**
 * Lists the asset types defined in Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListAssetTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListAssetTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListAssetTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssetTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetTypesResponse
 * //   Items: [ // AssetTypeItemList
 * //     { // AssetTypeItem
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetTypesCommandInput - {@link ListAssetTypesCommandInput}
 * @returns {@link ListAssetTypesCommandOutput}
 * @see {@link ListAssetTypesCommandInput} for command's `input` shape.
 * @see {@link ListAssetTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling threshhold was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListAssetTypesCommand extends command<ListAssetTypesCommandInput, ListAssetTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetTypes",
  ListAssetTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetTypesRequest;
      output: ListAssetTypesResponse;
    };
    sdk: {
      input: ListAssetTypesCommandInput;
      output: ListAssetTypesCommandOutput;
    };
  };
}
