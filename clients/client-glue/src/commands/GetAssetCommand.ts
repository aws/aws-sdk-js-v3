// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetAssetInput, GetAssetOutput } from "../models/models_1";
import { GetAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetCommand}.
 */
export interface GetAssetCommandInput extends GetAssetInput {}
/**
 * @public
 *
 * The output of {@link GetAssetCommand}.
 */
export interface GetAssetCommandOutput extends GetAssetOutput, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for an asset in Glue Data Catalog, including its forms, additional attachments, and associated glossary terms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetAssetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetAssetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetAssetInput
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetOutput
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   AssetTypeId: "STRING_VALUE", // required
 * //   GlossaryTerms: [ // GlossaryTermIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Forms: { // AssetFormMap
 * //     "<keys>": { // AssetFormEntry
 * //       FormTypeId: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //     },
 * //   },
 * //   Attachments: {
 * //     "<keys>": {
 * //       FormTypeId: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //     },
 * //   },
 * //   IterableForms: { // IterableFormMap
 * //     "<keys>": { // IterableFormEntry
 * //       FormTypeId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetCommandInput - {@link GetAssetCommandInput}
 * @returns {@link GetAssetCommandOutput}
 * @see {@link GetAssetCommandInput} for command's `input` shape.
 * @see {@link GetAssetCommandOutput} for command's `response` shape.
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
export class GetAssetCommand extends $Command
  .classBuilder<
    GetAssetCommandInput,
    GetAssetCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetAsset", {})
  .n("GlueClient", "GetAssetCommand")
  .sc(GetAsset$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetInput;
      output: GetAssetOutput;
    };
    sdk: {
      input: GetAssetCommandInput;
      output: GetAssetCommandOutput;
    };
  };
}
