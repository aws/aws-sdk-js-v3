// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  GetDefaultEncryptionConfigurationRequest,
  GetDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import {
  de_GetDefaultEncryptionConfigurationCommand,
  se_GetDefaultEncryptionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultEncryptionConfigurationCommand}.
 */
export interface GetDefaultEncryptionConfigurationCommandInput extends GetDefaultEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultEncryptionConfigurationCommand}.
 */
export interface GetDefaultEncryptionConfigurationCommandOutput
  extends GetDefaultEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves information about the default encryption configuration for the Amazon Web Services account
 *          in the default or specified region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key
 *             management</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new GetDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultEncryptionConfigurationResponse
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
 * @param GetDefaultEncryptionConfigurationCommandInput - {@link GetDefaultEncryptionConfigurationCommandInput}
 * @returns {@link GetDefaultEncryptionConfigurationCommandOutput}
 * @see {@link GetDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDefaultEncryptionConfigurationCommand extends $Command
  .classBuilder<
    GetDefaultEncryptionConfigurationCommandInput,
    GetDefaultEncryptionConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "GetDefaultEncryptionConfiguration", {})
  .n("IoTManagedIntegrationsClient", "GetDefaultEncryptionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultEncryptionConfigurationCommand)
  .de(de_GetDefaultEncryptionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDefaultEncryptionConfigurationResponse;
    };
    sdk: {
      input: GetDefaultEncryptionConfigurationCommandInput;
      output: GetDefaultEncryptionConfigurationCommandOutput;
    };
  };
}
