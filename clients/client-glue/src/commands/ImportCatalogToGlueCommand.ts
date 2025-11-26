// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_2";
import { ImportCatalogToGlue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCatalogToGlueCommand}.
 */
export interface ImportCatalogToGlueCommandInput extends ImportCatalogToGlueRequest {}
/**
 * @public
 *
 * The output of {@link ImportCatalogToGlueCommand}.
 */
export interface ImportCatalogToGlueCommandOutput extends ImportCatalogToGlueResponse, __MetadataBearer {}

/**
 * <p>Imports an existing Amazon Athena Data Catalog to Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ImportCatalogToGlueCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ImportCatalogToGlueCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ImportCatalogToGlueRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new ImportCatalogToGlueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportCatalogToGlueCommandInput - {@link ImportCatalogToGlueCommandInput}
 * @returns {@link ImportCatalogToGlueCommandOutput}
 * @see {@link ImportCatalogToGlueCommandInput} for command's `input` shape.
 * @see {@link ImportCatalogToGlueCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
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
export class ImportCatalogToGlueCommand extends $Command
  .classBuilder<
    ImportCatalogToGlueCommandInput,
    ImportCatalogToGlueCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ImportCatalogToGlue", {})
  .n("GlueClient", "ImportCatalogToGlueCommand")
  .sc(ImportCatalogToGlue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCatalogToGlueRequest;
      output: {};
    };
    sdk: {
      input: ImportCatalogToGlueCommandInput;
      output: ImportCatalogToGlueCommandOutput;
    };
  };
}
