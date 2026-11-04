// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsResponse,
} from "../models/models_2";
import { GetDataCatalogEncryptionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetDataCatalogEncryptionSettingsCommandOutput extends GetDataCatalogEncryptionSettingsResponse, __MetadataBearer {}

/**
 * Retrieves the security configuration for a specified catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataCatalogEncryptionSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataCatalogEncryptionSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetDataCatalogEncryptionSettingsCommand extends command<GetDataCatalogEncryptionSettingsCommandInput, GetDataCatalogEncryptionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetDataCatalogEncryptionSettings",
  GetDataCatalogEncryptionSettings$
) {
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
