// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataExportConfigurationInput, GetDataExportConfigurationOutput } from "../models/models_1";
import { GetDataExportConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataExportConfigurationCommand}.
 */
export interface GetDataExportConfigurationCommandInput extends GetDataExportConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetDataExportConfigurationCommand}.
 */
export interface GetDataExportConfigurationCommandOutput extends GetDataExportConfigurationOutput, __MetadataBearer {}

/**
 * <p>Gets data export configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataExportConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataExportConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetDataExportConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDataExportConfigurationOutput
 * //   isExportEnabled: true || false,
 * //   status: "COMPLETED" || "FAILED",
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyArn: "STRING_VALUE",
 * //     sseAlgorithm: "STRING_VALUE",
 * //   },
 * //   s3TableBucketArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataExportConfigurationCommandInput - {@link GetDataExportConfigurationCommandInput}
 * @returns {@link GetDataExportConfigurationCommandOutput}
 * @see {@link GetDataExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDataExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetDataExportConfigurationCommand extends $Command
  .classBuilder<
    GetDataExportConfigurationCommandInput,
    GetDataExportConfigurationCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetDataExportConfiguration", {})
  .n("DataZoneClient", "GetDataExportConfigurationCommand")
  .sc(GetDataExportConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataExportConfigurationInput;
      output: GetDataExportConfigurationOutput;
    };
    sdk: {
      input: GetDataExportConfigurationCommandInput;
      output: GetDataExportConfigurationCommandOutput;
    };
  };
}
