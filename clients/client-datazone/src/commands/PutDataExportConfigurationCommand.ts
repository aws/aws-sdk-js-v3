// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDataExportConfigurationInput, PutDataExportConfigurationOutput } from "../models/models_2";
import { PutDataExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDataExportConfigurationCommand}.
 */
export interface PutDataExportConfigurationCommandInput extends PutDataExportConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutDataExportConfigurationCommand}.
 */
export interface PutDataExportConfigurationCommandOutput extends PutDataExportConfigurationOutput, __MetadataBearer {}

/**
 * Creates data export configuration details.
 *
 * If you want to temporarily disable export and later re-enable it for the same domain, use the `--no-enable-export` flag to disable and the `--enable-export` flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table.
 *
 * > **Note:**
 * >
 * > You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps:
 * >
 * > 1. Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation.
 * > 2. Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion.
 * > 3. Call the PutDataExportConfiguration API to enable export for the new domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, PutDataExportConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, PutDataExportConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // PutDataExportConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   enableExport: true || false, // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyArn: "STRING_VALUE",
 *     sseAlgorithm: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutDataExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDataExportConfigurationCommandInput - {@link PutDataExportConfigurationCommandInput}
 * @returns {@link PutDataExportConfigurationCommandOutput}
 * @see {@link PutDataExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDataExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class PutDataExportConfigurationCommand extends command<PutDataExportConfigurationCommandInput, PutDataExportConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutDataExportConfiguration",
  PutDataExportConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDataExportConfigurationInput;
      output: {};
    };
    sdk: {
      input: PutDataExportConfigurationCommandInput;
      output: PutDataExportConfigurationCommandOutput;
    };
  };
}
