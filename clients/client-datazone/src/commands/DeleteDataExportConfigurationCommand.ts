// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataExportConfigurationInput, DeleteDataExportConfigurationOutput } from "../models/models_1";
import { DeleteDataExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataExportConfigurationCommand}.
 */
export interface DeleteDataExportConfigurationCommandInput extends DeleteDataExportConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteDataExportConfigurationCommand}.
 */
export interface DeleteDataExportConfigurationCommandOutput extends DeleteDataExportConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes data export configuration for a domain.</p> <p>This operation does not delete the S3 table created by the PutDataExportConfiguration operation.</p> <p>To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the <code>--no-enable-export</code> flag instead. This allows you to re-enable export for the same domain using the <code>--enable-export</code> flag without deleting S3 table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteDataExportConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteDataExportConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteDataExportConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataExportConfigurationCommandInput - {@link DeleteDataExportConfigurationCommandInput}
 * @returns {@link DeleteDataExportConfigurationCommandOutput}
 * @see {@link DeleteDataExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataExportConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteDataExportConfigurationCommand extends $Command
  .classBuilder<
    DeleteDataExportConfigurationCommandInput,
    DeleteDataExportConfigurationCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteDataExportConfiguration", {})
  .n("DataZoneClient", "DeleteDataExportConfigurationCommand")
  .sc(DeleteDataExportConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataExportConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteDataExportConfigurationCommandInput;
      output: DeleteDataExportConfigurationCommandOutput;
    };
  };
}
