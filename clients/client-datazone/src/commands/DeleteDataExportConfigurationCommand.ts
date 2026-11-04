// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataExportConfigurationInput, DeleteDataExportConfigurationOutput } from "../models/models_1";
import { DeleteDataExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes data export configuration for a domain.
 *
 * This operation does not delete the S3 table created by the PutDataExportConfiguration operation.
 *
 * To temporarily disable export without deleting the configuration, use the PutDataExportConfiguration operation with the `--no-enable-export` flag instead. This allows you to re-enable export for the same domain using the `--enable-export` flag without deleting S3 table.
 *
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
export class DeleteDataExportConfigurationCommand extends command<DeleteDataExportConfigurationCommandInput, DeleteDataExportConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataExportConfiguration",
  DeleteDataExportConfiguration$
) {
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
