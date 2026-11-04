// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeDefaultEncryptionConfigurationRequest,
  DescribeDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import { DescribeDefaultEncryptionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDefaultEncryptionConfigurationCommand}.
 */
export interface DescribeDefaultEncryptionConfigurationCommandInput extends DescribeDefaultEncryptionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultEncryptionConfigurationCommand}.
 */
export interface DescribeDefaultEncryptionConfigurationCommandOutput extends DescribeDefaultEncryptionConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see [Key management](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html) in the *IoT SiteWise User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = {};
 * const command = new DescribeDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultEncryptionConfigurationResponse
 * //   encryptionType: "SITEWISE_DEFAULT_ENCRYPTION" || "KMS_BASED_ENCRYPTION", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   configurationStatus: { // ConfigurationStatus
 * //     state: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //     error: { // ConfigurationErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDefaultEncryptionConfigurationCommandInput - {@link DescribeDefaultEncryptionConfigurationCommandInput}
 * @returns {@link DescribeDefaultEncryptionConfigurationCommandOutput}
 * @see {@link DescribeDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DescribeDefaultEncryptionConfigurationCommand extends command<DescribeDefaultEncryptionConfigurationCommandInput, DescribeDefaultEncryptionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDefaultEncryptionConfiguration",
  DescribeDefaultEncryptionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeDefaultEncryptionConfigurationResponse;
    };
    sdk: {
      input: DescribeDefaultEncryptionConfigurationCommandInput;
      output: DescribeDefaultEncryptionConfigurationCommandOutput;
    };
  };
}
