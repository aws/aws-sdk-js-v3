// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateEncryptionConfigurationRequest, UpdateEncryptionConfigurationResponse } from "../models/models_2";
import { UpdateEncryptionConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEncryptionConfigurationCommand}.
 */
export interface UpdateEncryptionConfigurationCommandInput extends UpdateEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEncryptionConfigurationCommand}.
 */
export interface UpdateEncryptionConfigurationCommandOutput
  extends UpdateEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the encryption configuration. By default, all Amazon Web Services IoT Core data at rest is
 *          encrypted using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys
 *          from Amazon Web Services Key Management Service (KMS). With customer managed keys, you create, own, and
 *          manage the KMS keys in your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/data-encryption.html">Data
 *             encryption</a> in the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateEncryptionConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateEncryptionConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateEncryptionConfigurationRequest
 *   encryptionType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 *   kmsKeyArn: "STRING_VALUE",
 *   kmsAccessRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEncryptionConfigurationCommandInput - {@link UpdateEncryptionConfigurationCommandInput}
 * @returns {@link UpdateEncryptionConfigurationCommandOutput}
 * @see {@link UpdateEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @example UpdateEncryptionConfiguration example
 * ```javascript
 * // This operation updates the encryption configuration.
 * const input = {
 *   encryptionType: "CUSTOMER_MANAGED_KMS_KEY",
 *   kmsAccessRoleArn: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   kmsKeyArn: "arn:aws:iam:us-west-2:111122223333:role/myrole"
 * };
 * const command = new UpdateEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateEncryptionConfigurationCommand extends $Command
  .classBuilder<
    UpdateEncryptionConfigurationCommandInput,
    UpdateEncryptionConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateEncryptionConfiguration", {})
  .n("IoTClient", "UpdateEncryptionConfigurationCommand")
  .sc(UpdateEncryptionConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEncryptionConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateEncryptionConfigurationCommandInput;
      output: UpdateEncryptionConfigurationCommandOutput;
    };
  };
}
