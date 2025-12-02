// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTableRecordExpirationConfigurationRequest,
  GetTableRecordExpirationConfigurationResponse,
} from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTableRecordExpirationConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableRecordExpirationConfigurationCommand}.
 */
export interface GetTableRecordExpirationConfigurationCommandInput
  extends GetTableRecordExpirationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableRecordExpirationConfigurationCommand}.
 */
export interface GetTableRecordExpirationConfigurationCommandOutput
  extends GetTableRecordExpirationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is <code>enabled</code>, records expire and are automatically removed from the table after the specified number of days.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTableRecordExpirationConfiguration</code> permission to use this operation.</p> </dd> </dl>
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
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The requested operation is not allowed on this resource. This may occur when attempting to modify a resource that is managed by a service or has restrictions that prevent the operation.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class GetTableRecordExpirationConfigurationCommand extends $Command
  .classBuilder<
    GetTableRecordExpirationConfigurationCommandInput,
    GetTableRecordExpirationConfigurationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTableRecordExpirationConfiguration", {})
  .n("S3TablesClient", "GetTableRecordExpirationConfigurationCommand")
  .sc(GetTableRecordExpirationConfiguration)
  .build() {
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
