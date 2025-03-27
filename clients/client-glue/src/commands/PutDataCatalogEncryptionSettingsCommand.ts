// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutDataCatalogEncryptionSettingsRequest, PutDataCatalogEncryptionSettingsResponse } from "../models/models_2";
import {
  de_PutDataCatalogEncryptionSettingsCommand,
  se_PutDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDataCatalogEncryptionSettingsCommand}.
 */
export interface PutDataCatalogEncryptionSettingsCommandInput extends PutDataCatalogEncryptionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutDataCatalogEncryptionSettingsCommand}.
 */
export interface PutDataCatalogEncryptionSettingsCommandOutput
  extends PutDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the security configuration for a specified catalog. After the configuration has been
 *       set, the specified encryption is applied to every catalog write thereafter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // PutDataCatalogEncryptionSettingsRequest
 *   CatalogId: "STRING_VALUE",
 *   DataCatalogEncryptionSettings: { // DataCatalogEncryptionSettings
 *     EncryptionAtRest: { // EncryptionAtRest
 *       CatalogEncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-KMS-WITH-SERVICE-ROLE", // required
 *       SseAwsKmsKeyId: "STRING_VALUE",
 *       CatalogEncryptionServiceRole: "STRING_VALUE",
 *     },
 *     ConnectionPasswordEncryption: { // ConnectionPasswordEncryption
 *       ReturnConnectionPasswordEncrypted: true || false, // required
 *       AwsKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataCatalogEncryptionSettingsCommandInput - {@link PutDataCatalogEncryptionSettingsCommandInput}
 * @returns {@link PutDataCatalogEncryptionSettingsCommandOutput}
 * @see {@link PutDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
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
export class PutDataCatalogEncryptionSettingsCommand extends $Command
  .classBuilder<
    PutDataCatalogEncryptionSettingsCommandInput,
    PutDataCatalogEncryptionSettingsCommandOutput,
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
  .s("AWSGlue", "PutDataCatalogEncryptionSettings", {})
  .n("GlueClient", "PutDataCatalogEncryptionSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutDataCatalogEncryptionSettingsCommand)
  .de(de_PutDataCatalogEncryptionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataCatalogEncryptionSettingsRequest;
      output: {};
    };
    sdk: {
      input: PutDataCatalogEncryptionSettingsCommandInput;
      output: PutDataCatalogEncryptionSettingsCommandOutput;
    };
  };
}
