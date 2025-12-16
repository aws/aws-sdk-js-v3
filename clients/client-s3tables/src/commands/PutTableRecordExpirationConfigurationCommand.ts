// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutTableRecordExpirationConfigurationRequest } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { PutTableRecordExpirationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTableRecordExpirationConfigurationCommand}.
 */
export interface PutTableRecordExpirationConfigurationCommandInput
  extends PutTableRecordExpirationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableRecordExpirationConfigurationCommand}.
 */
export interface PutTableRecordExpirationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:PutTableRecordExpirationConfiguration</code> permission to use this operation.</p> </dd> </dl>
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
export class PutTableRecordExpirationConfigurationCommand extends $Command
  .classBuilder<
    PutTableRecordExpirationConfigurationCommandInput,
    PutTableRecordExpirationConfigurationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "PutTableRecordExpirationConfiguration", {})
  .n("S3TablesClient", "PutTableRecordExpirationConfigurationCommand")
  .sc(PutTableRecordExpirationConfiguration$)
  .build() {
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
