// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableRecordExpirationConfigurationRequest } from "../models/models_0";
import { PutTableRecordExpirationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTableRecordExpirationConfigurationCommand}.
 */
export interface PutTableRecordExpirationConfigurationCommandInput extends PutTableRecordExpirationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableRecordExpirationConfigurationCommand}.
 */
export interface PutTableRecordExpirationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:PutTableRecordExpirationConfiguration` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableRecordExpirationConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableRecordExpirationConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableRecordExpirationConfigurationRequest
 *   tableArn: "STRING_VALUE", // required
 *   value: { // TableRecordExpirationConfigurationValue
 *     status: "enabled" || "disabled",
 *     settings: { // TableRecordExpirationSettings
 *       days: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutTableRecordExpirationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableRecordExpirationConfigurationCommandInput - {@link PutTableRecordExpirationConfigurationCommandInput}
 * @returns {@link PutTableRecordExpirationConfigurationCommandOutput}
 * @see {@link PutTableRecordExpirationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutTableRecordExpirationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The requested operation is not allowed on this resource. This may occur when attempting to modify a resource that is managed by a service or has restrictions that prevent the operation.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class PutTableRecordExpirationConfigurationCommand extends command<PutTableRecordExpirationConfigurationCommandInput, PutTableRecordExpirationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutTableRecordExpirationConfiguration",
  PutTableRecordExpirationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableRecordExpirationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutTableRecordExpirationConfigurationCommandInput;
      output: PutTableRecordExpirationConfigurationCommandOutput;
    };
  };
}
