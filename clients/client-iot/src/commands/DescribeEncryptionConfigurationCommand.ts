// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  DescribeEncryptionConfigurationRequest,
  DescribeEncryptionConfigurationResponse,
} from "../models/models_1";
import { DescribeEncryptionConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeEncryptionConfigurationCommandOutput
  extends DescribeEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the encryption configuration for resources and data of your Amazon Web Services account in
 *          Amazon Web Services IoT Core. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/key-management.html">Key management in IoT</a> from
 *          the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
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
 * @public
 */
export class DescribeEncryptionConfigurationCommand extends $Command
  .classBuilder<
    DescribeEncryptionConfigurationCommandInput,
    DescribeEncryptionConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeEncryptionConfiguration", {})
  .n("IoTClient", "DescribeEncryptionConfigurationCommand")
  .sc(DescribeEncryptionConfiguration)
  .build() {
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
