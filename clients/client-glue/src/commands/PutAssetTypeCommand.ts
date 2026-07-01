// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAssetTypeRequest, PutAssetTypeResponse } from "../models/models_2";
import { PutAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAssetTypeCommand}.
 */
export interface PutAssetTypeCommandInput extends PutAssetTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutAssetTypeCommand}.
 */
export interface PutAssetTypeCommandOutput extends PutAssetTypeResponse, __MetadataBearer {}

/**
 * <p>Creates or updates an asset type in Glue Data Catalog. An asset type defines the structure of assets by specifying which forms they include. If an asset type with the given name already exists, it is updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutAssetTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutAssetTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutAssetTypeRequest
 *   Name: "STRING_VALUE", // required
 *   Forms: { // AssetTypeFormsMap // required
 *     "<keys>": { // AssetTypeFormReference
 *       FormTypeIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // PutAssetTypeResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Forms: { // AssetTypeFormsMap
 * //     "<keys>": { // AssetTypeFormReference
 * //       FormTypeIdentifier: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAssetTypeCommandInput - {@link PutAssetTypeCommandInput}
 * @returns {@link PutAssetTypeCommandOutput}
 * @see {@link PutAssetTypeCommandInput} for command's `input` shape.
 * @see {@link PutAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PutAssetTypeCommand extends command<PutAssetTypeCommandInput, PutAssetTypeCommandOutput>(
  _ep0,
  _mw0,
  "PutAssetType",
  PutAssetType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAssetTypeRequest;
      output: PutAssetTypeResponse;
    };
    sdk: {
      input: PutAssetTypeCommandInput;
      output: PutAssetTypeCommandOutput;
    };
  };
}
