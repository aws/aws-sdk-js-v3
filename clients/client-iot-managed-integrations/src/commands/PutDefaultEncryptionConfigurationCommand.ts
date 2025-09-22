// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import { PutDefaultEncryptionConfiguration } from "../schemas/schemas_2_DefaultEncryptionConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDefaultEncryptionConfigurationCommand}.
 */
export interface PutDefaultEncryptionConfigurationCommandInput extends PutDefaultEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutDefaultEncryptionConfigurationCommand}.
 */
export interface PutDefaultEncryptionConfigurationCommandOutput
  extends PutDefaultEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the AWS IoT SiteWise User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, PutDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, PutDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // PutDefaultEncryptionConfigurationRequest
 *   encryptionType: "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION" || "CUSTOMER_KEY_ENCRYPTION", // required
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new PutDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutDefaultEncryptionConfigurationResponse
 * //   configurationStatus: { // ConfigurationStatus
 * //     error: { // ConfigurationError
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     state: "ENABLED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //   },
 * //   encryptionType: "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION" || "CUSTOMER_KEY_ENCRYPTION", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutDefaultEncryptionConfigurationCommandInput - {@link PutDefaultEncryptionConfigurationCommandInput}
 * @returns {@link PutDefaultEncryptionConfigurationCommandOutput}
 * @see {@link PutDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class PutDefaultEncryptionConfigurationCommand extends $Command
  .classBuilder<
    PutDefaultEncryptionConfigurationCommandInput,
    PutDefaultEncryptionConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "PutDefaultEncryptionConfiguration", {})
  .n("IoTManagedIntegrationsClient", "PutDefaultEncryptionConfigurationCommand")
  .sc(PutDefaultEncryptionConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDefaultEncryptionConfigurationRequest;
      output: PutDefaultEncryptionConfigurationResponse;
    };
    sdk: {
      input: PutDefaultEncryptionConfigurationCommandInput;
      output: PutDefaultEncryptionConfigurationCommandOutput;
    };
  };
}
