// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutStorageConfigurationRequest, PutStorageConfigurationResponse } from "../models/models_1";
import { PutStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutStorageConfigurationCommand}.
 */
export interface PutStorageConfigurationCommandInput extends PutStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutStorageConfigurationCommand}.
 */
export interface PutStorageConfigurationCommandOutput extends PutStorageConfigurationResponse, __MetadataBearer {}

/**
 * Configures storage settings for IoT SiteWise.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutStorageConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutStorageConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // PutStorageConfigurationRequest
 *   storageType: "SITEWISE_DEFAULT_STORAGE" || "MULTI_LAYER_STORAGE", // required
 *   multiLayerStorage: { // MultiLayerStorage
 *     customerManagedS3Storage: { // CustomerManagedS3Storage
 *       s3ResourceArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   disassociatedDataStorage: "ENABLED" || "DISABLED",
 *   retentionPeriod: { // RetentionPeriod
 *     numberOfDays: Number("int"),
 *     unlimited: true || false,
 *   },
 *   warmTier: "ENABLED" || "DISABLED",
 *   warmTierRetentionPeriod: { // WarmTierRetentionPeriod
 *     numberOfDays: Number("int"),
 *     unlimited: true || false,
 *   },
 *   disallowIngestNullNaN: true || false,
 * };
 * const command = new PutStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutStorageConfigurationResponse
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
 * @param PutStorageConfigurationCommandInput - {@link PutStorageConfigurationCommandInput}
 * @returns {@link PutStorageConfigurationCommandOutput}
 * @see {@link PutStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class PutStorageConfigurationCommand extends command<PutStorageConfigurationCommandInput, PutStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutStorageConfiguration",
  PutStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutStorageConfigurationRequest;
      output: PutStorageConfigurationResponse;
    };
    sdk: {
      input: PutStorageConfigurationCommandInput;
      output: PutStorageConfigurationCommandOutput;
    };
  };
}
