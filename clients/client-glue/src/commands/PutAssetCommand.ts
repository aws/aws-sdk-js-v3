// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { PutAssetRequest, PutAssetResponse } from "../models/models_2";
import { PutAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAssetCommand}.
 */
export interface PutAssetCommandInput extends PutAssetRequest {}
/**
 * @public
 *
 * The output of {@link PutAssetCommand}.
 */
export interface PutAssetCommandOutput extends PutAssetResponse, __MetadataBearer {}

/**
 * <p>Creates or updates an asset in Glue Data Catalog. If the asset already exists, this operation updates it; otherwise, a new asset is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutAssetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutAssetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutAssetRequest
 *   AssetTypeId: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Forms: { // AssetFormMap // required
 *     "<keys>": { // AssetFormEntry
 *       FormTypeId: "STRING_VALUE",
 *       Content: "STRING_VALUE",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutAssetCommand(input);
 * const response = await client.send(command);
 * // { // PutAssetResponse
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Forms: { // AssetFormMap
 * //     "<keys>": { // AssetFormEntry
 * //       FormTypeId: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAssetCommandInput - {@link PutAssetCommandInput}
 * @returns {@link PutAssetCommandOutput}
 * @see {@link PutAssetCommandInput} for command's `input` shape.
 * @see {@link PutAssetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PutAssetCommand extends $Command
  .classBuilder<
    PutAssetCommandInput,
    PutAssetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "PutAsset", {})
  .n("GlueClient", "PutAssetCommand")
  .sc(PutAsset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAssetRequest;
      output: PutAssetResponse;
    };
    sdk: {
      input: PutAssetCommandInput;
      output: PutAssetCommandOutput;
    };
  };
}
