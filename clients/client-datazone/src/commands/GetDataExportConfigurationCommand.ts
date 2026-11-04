// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataExportConfigurationInput, GetDataExportConfigurationOutput } from "../models/models_1";
import { GetDataExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets data export configuration details.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class GetDataExportConfigurationCommand extends command<GetDataExportConfigurationCommandInput, GetDataExportConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDataExportConfiguration",
  GetDataExportConfiguration$
) {
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
