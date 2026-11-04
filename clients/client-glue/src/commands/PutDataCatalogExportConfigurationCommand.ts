// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutDataCatalogExportConfigurationInput,
  PutDataCatalogExportConfigurationOutput,
} from "../models/models_2";
import { PutDataCatalogExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDataCatalogExportConfigurationCommand}.
 */
export interface PutDataCatalogExportConfigurationCommandInput extends PutDataCatalogExportConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutDataCatalogExportConfigurationCommand}.
 */
export interface PutDataCatalogExportConfigurationCommandOutput extends PutDataCatalogExportConfigurationOutput, __MetadataBearer {}

/**
 * Creates or updates the export configuration for the Glue Data Catalog. Use this operation to enable or disable the export of catalog metadata to S3 Tables.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutDataCatalogExportConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutDataCatalogExportConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutDataCatalogExportConfigurationInput
 *   ExportSetting: "ENABLED" || "DISABLED", // required
 *   EncryptionConfiguration: { // ExportEncryptionConfiguration
 *     SseAlgorithm: "STRING_VALUE",
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutDataCatalogExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutDataCatalogExportConfigurationOutput
 * //   ExportSetting: "ENABLED" || "DISABLED",
 * //   EncryptionConfiguration: { // ExportEncryptionConfiguration
 * //     SseAlgorithm: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDataCatalogExportConfigurationCommandInput - {@link PutDataCatalogExportConfigurationCommandInput}
 * @returns {@link PutDataCatalogExportConfigurationCommandOutput}
 * @see {@link PutDataCatalogExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDataCatalogExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `CreatePartitions` API was called on a table that has indexes enabled.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling threshhold was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class PutDataCatalogExportConfigurationCommand extends command<PutDataCatalogExportConfigurationCommandInput, PutDataCatalogExportConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutDataCatalogExportConfiguration",
  PutDataCatalogExportConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataCatalogExportConfigurationInput;
      output: PutDataCatalogExportConfigurationOutput;
    };
    sdk: {
      input: PutDataCatalogExportConfigurationCommandInput;
      output: PutDataCatalogExportConfigurationCommandOutput;
    };
  };
}
