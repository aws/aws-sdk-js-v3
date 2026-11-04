// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeEncryptionConfigurationRequest,
  DescribeEncryptionConfigurationResponse,
} from "../models/models_1";
import { DescribeEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEncryptionConfigurationCommand}.
 */
export interface DescribeEncryptionConfigurationCommandInput extends DescribeEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEncryptionConfigurationCommand}.
 */
export interface DescribeEncryptionConfigurationCommandOutput extends DescribeEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the encryption configuration for resources and data of your Amazon Web Services account in Amazon Web Services IoT Core. For more information, see [Data encryption at rest](https://docs.aws.amazon.com/iot/latest/developerguide/encryption-at-rest.html) in the *Amazon Web Services IoT Core Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeEncryptionConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeEncryptionConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEncryptionConfigurationResponse
 * //   encryptionType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY",
 * //   kmsKeyArn: "STRING_VALUE",
 * //   kmsAccessRoleArn: "STRING_VALUE",
 * //   configurationDetails: { // ConfigurationDetails
 * //     configurationStatus: "HEALTHY" || "UNHEALTHY",
 * //     errorCode: "STRING_VALUE",
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEncryptionConfigurationCommandInput - {@link DescribeEncryptionConfigurationCommandInput}
 * @returns {@link DescribeEncryptionConfigurationCommandOutput}
 * @see {@link DescribeEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeEncryptionConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeEncryptionConfigurationCommand extends command<DescribeEncryptionConfigurationCommandInput, DescribeEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEncryptionConfiguration",
  DescribeEncryptionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEncryptionConfigurationResponse;
    };
    sdk: {
      input: DescribeEncryptionConfigurationCommandInput;
      output: DescribeEncryptionConfigurationCommandOutput;
    };
  };
}
