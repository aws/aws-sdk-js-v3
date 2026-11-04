// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFeatureGroupRequest, CreateFeatureGroupResponse } from "../models/models_1";
import { CreateFeatureGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFeatureGroupCommand}.
 */
export interface CreateFeatureGroupCommandInput extends CreateFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateFeatureGroupCommand}.
 */
export interface CreateFeatureGroupCommandOutput extends CreateFeatureGroupResponse, __MetadataBearer {}

/**
 * Create a new `FeatureGroup`. A `FeatureGroup` is a group of `Features` defined in the `FeatureStore` to describe a `Record`.
 *
 * The `FeatureGroup` defines the schema and features contained in the `FeatureGroup`. A `FeatureGroup` definition is composed of a list of `Features`, a `RecordIdentifierFeatureName`, an `EventTimeFeatureName` and configurations for its `OnlineStore` and `OfflineStore`. Check [Amazon Web Services service quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to see the `FeatureGroup`s quota for your Amazon Web Services account.
 *
 * Note that it can take approximately 10-15 minutes to provision an `OnlineStore` `FeatureGroup` with the `InMemory` `StorageType`.
 *
 * > **Important:** You must include at least one of `OnlineStoreConfig` and `OfflineStoreConfig` to create a `FeatureGroup`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierFeatureName: "STRING_VALUE", // required
 *   EventTimeFeatureName: "STRING_VALUE", // required
 *   FeatureDefinitions: [ // FeatureDefinitions // required
 *     { // FeatureDefinition
 *       FeatureName: "STRING_VALUE", // required
 *       FeatureType: "Integral" || "Fractional" || "String", // required
 *       CollectionType: "List" || "Set" || "Vector",
 *       CollectionConfig: { // CollectionConfig Union: only one key present
 *         VectorConfig: { // VectorConfig
 *           Dimension: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 *   OnlineStoreConfig: { // OnlineStoreConfig
 *     SecurityConfig: { // OnlineStoreSecurityConfig
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *     EnableOnlineStore: true || false,
 *     TtlDuration: { // TtlDuration
 *       Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks",
 *       Value: Number("int"),
 *     },
 *     StorageType: "Standard" || "Standard_V2" || "InMemory",
 *   },
 *   OfflineStoreConfig: { // OfflineStoreConfig
 *     S3StorageConfig: { // S3StorageConfig
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE",
 *       ResolvedOutputS3Uri: "STRING_VALUE",
 *     },
 *     DisableGlueTableCreation: true || false,
 *     DataCatalogConfig: { // DataCatalogConfig
 *       TableName: "STRING_VALUE", // required
 *       Catalog: "STRING_VALUE", // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     TableFormat: "Default" || "Glue" || "Iceberg",
 *   },
 *   ThroughputConfig: { // ThroughputConfig
 *     ThroughputMode: "OnDemand" || "Provisioned", // required
 *     ProvisionedReadCapacityUnits: Number("int"),
 *     ProvisionedWriteCapacityUnits: Number("int"),
 *   },
 *   RoleArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateFeatureGroupResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFeatureGroupCommandInput - {@link CreateFeatureGroupCommandInput}
 * @returns {@link CreateFeatureGroupCommandOutput}
 * @see {@link CreateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Resource being accessed is in use.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class CreateFeatureGroupCommand extends command<CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateFeatureGroup",
  CreateFeatureGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFeatureGroupRequest;
      output: CreateFeatureGroupResponse;
    };
    sdk: {
      input: CreateFeatureGroupCommandInput;
      output: CreateFeatureGroupCommandOutput;
    };
  };
}
