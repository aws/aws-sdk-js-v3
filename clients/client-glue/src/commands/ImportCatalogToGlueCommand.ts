// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ImportCatalogToGlueRequest, ImportCatalogToGlueResponse } from "../models/models_2";
import { de_ImportCatalogToGlueCommand, se_ImportCatalogToGlueCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ImportCatalogToGlue", {})
  .n("GlueClient", "ImportCatalogToGlueCommand")
  .f(void 0, void 0)
  .ser(se_ImportCatalogToGlueCommand)
  .de(de_ImportCatalogToGlueCommand)
  .build() {}
