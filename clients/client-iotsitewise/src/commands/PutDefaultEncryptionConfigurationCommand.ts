// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
} from "../models/models_1";
import {
  de_PutDefaultEncryptionConfigurationCommand,
  se_PutDefaultEncryptionConfigurationCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Sets the default encryption configuration for the Amazon Web Services account. For more information, see
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in
 *       the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // PutDefaultEncryptionConfigurationRequest
 *   encryptionType: "SITEWISE_DEFAULT_ENCRYPTION" || "KMS_BASED_ENCRYPTION", // required
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new PutDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutDefaultEncryptionConfigurationResponse
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
 * @param PutDefaultEncryptionConfigurationCommandInput - {@link PutDefaultEncryptionConfigurationCommandInput}
 * @returns {@link PutDefaultEncryptionConfigurationCommandOutput}
 * @see {@link PutDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class PutDefaultEncryptionConfigurationCommand extends $Command
  .classBuilder<
    PutDefaultEncryptionConfigurationCommandInput,
    PutDefaultEncryptionConfigurationCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "PutDefaultEncryptionConfiguration", {})
  .n("IoTSiteWiseClient", "PutDefaultEncryptionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutDefaultEncryptionConfigurationCommand)
  .de(de_PutDefaultEncryptionConfigurationCommand)
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
