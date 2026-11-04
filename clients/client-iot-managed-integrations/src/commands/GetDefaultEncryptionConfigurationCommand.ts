// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetDefaultEncryptionConfigurationRequest,
  GetDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import { GetDefaultEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetDefaultEncryptionConfigurationCommandOutput extends GetDefaultEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified region. For more information, see [Key management](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html) in the *AWS IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
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
export class GetDefaultEncryptionConfigurationCommand extends command<GetDefaultEncryptionConfigurationCommandInput, GetDefaultEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDefaultEncryptionConfiguration",
  GetDefaultEncryptionConfiguration$
) {
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
