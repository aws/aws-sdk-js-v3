// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetAssetTypeRequest, GetAssetTypeResponse } from "../models/models_1";
import { GetAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandInput extends GetAssetTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandOutput extends GetAssetTypeResponse, __MetadataBearer {}

/**
 * <p>Retrieves an asset type in Glue Data Catalog by its identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetAssetTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetAssetTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetAssetTypeRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetTypeResponse
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
 * @param GetAssetTypeCommandInput - {@link GetAssetTypeCommandInput}
 * @returns {@link GetAssetTypeCommandOutput}
 * @see {@link GetAssetTypeCommandInput} for command's `input` shape.
 * @see {@link GetAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class GetAssetTypeCommand extends $Command
  .classBuilder<
    GetAssetTypeCommandInput,
    GetAssetTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetAssetType", {})
  .n("GlueClient", "GetAssetTypeCommand")
  .sc(GetAssetType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetTypeRequest;
      output: GetAssetTypeResponse;
    };
    sdk: {
      input: GetAssetTypeCommandInput;
      output: GetAssetTypeCommandOutput;
    };
  };
}
