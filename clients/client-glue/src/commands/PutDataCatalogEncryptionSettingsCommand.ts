// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutDataCatalogEncryptionSettingsRequest,
  PutDataCatalogEncryptionSettingsResponse,
} from "../models/models_2";
import { PutDataCatalogEncryptionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutDataCatalogEncryptionSettingsCommandOutput extends PutDataCatalogEncryptionSettingsResponse, __MetadataBearer {}

/**
 * <p>Sets the security configuration for a specified catalog. After the configuration has been
 *       set, the specified encryption is applied to every catalog write thereafter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
export class PutDataCatalogEncryptionSettingsCommand extends command<PutDataCatalogEncryptionSettingsCommandInput, PutDataCatalogEncryptionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutDataCatalogEncryptionSettings",
  PutDataCatalogEncryptionSettings$
) {
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
