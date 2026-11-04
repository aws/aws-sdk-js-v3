// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import { PutDefaultEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutDefaultEncryptionConfigurationCommandOutput extends PutDefaultEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * Sets the default encryption configuration for the Amazon Web Services account. For more information, see [Key management](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html) in the AWS IoT SiteWise User Guide.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class PutDefaultEncryptionConfigurationCommand extends command<PutDefaultEncryptionConfigurationCommandInput, PutDefaultEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutDefaultEncryptionConfiguration",
  PutDefaultEncryptionConfiguration$
) {
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
