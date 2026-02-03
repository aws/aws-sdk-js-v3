// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutDataExportConfigurationInput, PutDataExportConfigurationOutput } from "../models/models_1";
import { PutDataExportConfiguration$ } from "../schemas/schemas_0";

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
 * <p>Creates data export configuration details.</p> <p>If you want to temporarily disable export and later re-enable it for the same domain, use the <code>--no-enable-export</code> flag to disable and the <code>--enable-export</code> flag to re-enable. This preserves the configuration and allows you to re-enable export without deleting S3 table.</p> <note> <p>You can enable asset metadata export for only one domain per account per Region. To enable export for a different domain, complete the following steps:</p> <ol> <li> <p>Delete the export configuration for the currently enabled domain using the DeleteDataExportConfiguration operation.</p> </li> <li> <p>Delete the asset S3 table under the aws-sagemaker-catalog S3 table bucket. We recommend backing up the S3 table before deletion.</p> </li> <li> <p>Call the PutDataExportConfiguration API to enable export for the new domain.</p> </li> </ol> </note>
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
  .sc(PutDataExportConfiguration$)
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
