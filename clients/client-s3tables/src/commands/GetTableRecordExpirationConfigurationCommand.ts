// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTableRecordExpirationConfigurationRequest,
  GetTableRecordExpirationConfigurationResponse,
} from "../models/models_0";
import { GetTableRecordExpirationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableRecordExpirationConfigurationCommand}.
 */
export interface GetTableRecordExpirationConfigurationCommandInput extends GetTableRecordExpirationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableRecordExpirationConfigurationCommand}.
 */
export interface GetTableRecordExpirationConfigurationCommandOutput extends GetTableRecordExpirationConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is `enabled`, records expire and are automatically removed from the table after the specified number of days.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:GetTableRecordExpirationConfiguration` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableRecordExpirationConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableRecordExpirationConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableRecordExpirationConfigurationRequest
 *   tableArn: "STRING_VALUE", // required
 * };
 * const command = new GetTableRecordExpirationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableRecordExpirationConfigurationResponse
 * //   configuration: { // TableRecordExpirationConfigurationValue
 * //     status: "enabled" || "disabled",
 * //     settings: { // TableRecordExpirationSettings
 * //       days: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableRecordExpirationConfigurationCommandInput - {@link GetTableRecordExpirationConfigurationCommandInput}
 * @returns {@link GetTableRecordExpirationConfigurationCommandOutput}
 * @see {@link GetTableRecordExpirationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTableRecordExpirationConfigurationCommandOutput} for command's `response` shape.
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
export class GetTableRecordExpirationConfigurationCommand extends command<GetTableRecordExpirationConfigurationCommandInput, GetTableRecordExpirationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetTableRecordExpirationConfiguration",
  GetTableRecordExpirationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRecordExpirationConfigurationRequest;
      output: GetTableRecordExpirationConfigurationResponse;
    };
    sdk: {
      input: GetTableRecordExpirationConfigurationCommandInput;
      output: GetTableRecordExpirationConfigurationCommandOutput;
    };
  };
}
