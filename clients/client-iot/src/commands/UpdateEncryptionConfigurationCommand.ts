// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEncryptionConfigurationRequest, UpdateEncryptionConfigurationResponse } from "../models/models_2";
import { UpdateEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateEncryptionConfigurationCommandOutput extends UpdateEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * Updates the encryption configuration. By default, Amazon Web Services IoT Core encrypts your data at rest using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys from Key Management Service (KMS). With customer managed keys, you create, own, and manage the KMS keys in your Amazon Web Services account.
 *
 * Before using this API, you must set up permissions for Amazon Web Services IoT Core to access KMS. For more information, see [Data encryption at rest](https://docs.aws.amazon.com/iot/latest/developerguide/encryption-at-rest.html) in the *Amazon Web Services IoT Core Developer Guide*.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
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
export class UpdateEncryptionConfigurationCommand extends command<UpdateEncryptionConfigurationCommandInput, UpdateEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEncryptionConfiguration",
  UpdateEncryptionConfiguration$
) {
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
