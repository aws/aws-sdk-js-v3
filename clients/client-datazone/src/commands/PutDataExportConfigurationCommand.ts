// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutDataExportConfigurationInput, PutDataExportConfigurationOutput } from "../models/models_1";
import { PutDataExportConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates data export configuration details.</p> <p>In the current release, you can enable exporting asset metadata only for one domain per Amazon Web Services account per region. If you disable exporting asset metadata feature for a domain where it's already enabled, you cannot enable this feature for another domain in the same Amazon Web Services account and region.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class PutDataExportConfigurationCommand extends $Command
  .classBuilder<
    PutDataExportConfigurationCommandInput,
    PutDataExportConfigurationCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "PutDataExportConfiguration", {})
  .n("DataZoneClient", "PutDataExportConfigurationCommand")
  .sc(PutDataExportConfiguration)
  .build() {
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
