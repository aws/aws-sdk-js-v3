// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCatalogImportStatusRequest } from "../models/models_1";
import { GetCatalogImportStatusResponse } from "../models/models_2";
import { de_GetCatalogImportStatusCommand, se_GetCatalogImportStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCatalogImportStatusCommand}.
 */
export interface GetCatalogImportStatusCommandInput extends GetCatalogImportStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetCatalogImportStatusCommand}.
 */
export interface GetCatalogImportStatusCommandOutput extends GetCatalogImportStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status of a migration operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCatalogImportStatusCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCatalogImportStatusCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetCatalogImportStatusRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetCatalogImportStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetCatalogImportStatusResponse
 * //   ImportStatus: { // CatalogImportStatus
 * //     ImportCompleted: true || false,
 * //     ImportTime: new Date("TIMESTAMP"),
 * //     ImportedBy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCatalogImportStatusCommandInput - {@link GetCatalogImportStatusCommandInput}
 * @returns {@link GetCatalogImportStatusCommandOutput}
 * @see {@link GetCatalogImportStatusCommandInput} for command's `input` shape.
 * @see {@link GetCatalogImportStatusCommandOutput} for command's `response` shape.
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
export class GetCatalogImportStatusCommand extends $Command
  .classBuilder<
    GetCatalogImportStatusCommandInput,
    GetCatalogImportStatusCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetCatalogImportStatus", {})
  .n("GlueClient", "GetCatalogImportStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetCatalogImportStatusCommand)
  .de(de_GetCatalogImportStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCatalogImportStatusRequest;
      output: GetCatalogImportStatusResponse;
    };
    sdk: {
      input: GetCatalogImportStatusCommandInput;
      output: GetCatalogImportStatusCommandOutput;
    };
  };
}
