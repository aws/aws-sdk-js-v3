// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeStorageConfigurationRequest, DescribeStorageConfigurationResponse } from "../models/models_0";
import {
  de_DescribeStorageConfigurationCommand,
  se_DescribeStorageConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageConfigurationCommand}.
 */
export interface DescribeStorageConfigurationCommandInput extends DescribeStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageConfigurationCommand}.
 */
export interface DescribeStorageConfigurationCommandOutput
  extends DescribeStorageConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the storage configuration for IoT SiteWise.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeStorageConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeStorageConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = {};
 * const command = new DescribeStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageConfigurationResponse
 * //   storageType: "SITEWISE_DEFAULT_STORAGE" || "MULTI_LAYER_STORAGE", // required
 * //   multiLayerStorage: { // MultiLayerStorage
 * //     customerManagedS3Storage: { // CustomerManagedS3Storage
 * //       s3ResourceArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   disassociatedDataStorage: "ENABLED" || "DISABLED",
 * //   retentionPeriod: { // RetentionPeriod
 * //     numberOfDays: Number("int"),
 * //     unlimited: true || false,
 * //   },
 * //   configurationStatus: { // ConfigurationStatus
 * //     state: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //     error: { // ConfigurationErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   lastUpdateDate: new Date("TIMESTAMP"),
 * //   warmTier: "ENABLED" || "DISABLED",
 * //   warmTierRetentionPeriod: { // WarmTierRetentionPeriod
 * //     numberOfDays: Number("int"),
 * //     unlimited: true || false,
 * //   },
 * //   disallowIngestNullNaN: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeStorageConfigurationCommandInput - {@link DescribeStorageConfigurationCommandInput}
 * @returns {@link DescribeStorageConfigurationCommandOutput}
 * @see {@link DescribeStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageConfigurationCommandOutput} for command's `response` shape.
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
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
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
 * @public
 */
export class DescribeStorageConfigurationCommand extends $Command
  .classBuilder<
    DescribeStorageConfigurationCommandInput,
    DescribeStorageConfigurationCommandOutput,
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
  .s("AWSIoTSiteWise", "DescribeStorageConfiguration", {})
  .n("IoTSiteWiseClient", "DescribeStorageConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStorageConfigurationCommand)
  .de(de_DescribeStorageConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeStorageConfigurationResponse;
    };
    sdk: {
      input: DescribeStorageConfigurationCommandInput;
      output: DescribeStorageConfigurationCommandOutput;
    };
  };
}
