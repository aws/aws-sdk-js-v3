// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataCatalogEncryptionSettingsRequest, GetDataCatalogEncryptionSettingsResponse } from "../models/models_2";
import {
  de_GetDataCatalogEncryptionSettingsCommand,
  se_GetDataCatalogEncryptionSettingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataCatalogEncryptionSettingsCommand}.
 */
export interface GetDataCatalogEncryptionSettingsCommandInput extends GetDataCatalogEncryptionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataCatalogEncryptionSettingsCommand}.
 */
export interface GetDataCatalogEncryptionSettingsCommandOutput
  extends GetDataCatalogEncryptionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the security configuration for a specified catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataCatalogEncryptionSettingsRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetDataCatalogEncryptionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataCatalogEncryptionSettingsResponse
 * //   DataCatalogEncryptionSettings: { // DataCatalogEncryptionSettings
 * //     EncryptionAtRest: { // EncryptionAtRest
 * //       CatalogEncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-KMS-WITH-SERVICE-ROLE", // required
 * //       SseAwsKmsKeyId: "STRING_VALUE",
 * //       CatalogEncryptionServiceRole: "STRING_VALUE",
 * //     },
 * //     ConnectionPasswordEncryption: { // ConnectionPasswordEncryption
 * //       ReturnConnectionPasswordEncrypted: true || false, // required
 * //       AwsKmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataCatalogEncryptionSettingsCommandInput - {@link GetDataCatalogEncryptionSettingsCommandInput}
 * @returns {@link GetDataCatalogEncryptionSettingsCommandOutput}
 * @see {@link GetDataCatalogEncryptionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetDataCatalogEncryptionSettingsCommandOutput} for command's `response` shape.
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
export class GetDataCatalogEncryptionSettingsCommand extends $Command
  .classBuilder<
    GetDataCatalogEncryptionSettingsCommandInput,
    GetDataCatalogEncryptionSettingsCommandOutput,
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
  .s("AWSGlue", "GetDataCatalogEncryptionSettings", {})
  .n("GlueClient", "GetDataCatalogEncryptionSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetDataCatalogEncryptionSettingsCommand)
  .de(de_GetDataCatalogEncryptionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataCatalogEncryptionSettingsRequest;
      output: GetDataCatalogEncryptionSettingsResponse;
    };
    sdk: {
      input: GetDataCatalogEncryptionSettingsCommandInput;
      output: GetDataCatalogEncryptionSettingsCommandOutput;
    };
  };
}
