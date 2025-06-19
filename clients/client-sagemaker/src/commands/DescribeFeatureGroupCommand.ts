// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFeatureGroupRequest } from "../models/models_2";
import { DescribeFeatureGroupResponse } from "../models/models_3";
import { de_DescribeFeatureGroupCommand, se_DescribeFeatureGroupCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureGroupCommand}.
 */
export interface DescribeFeatureGroupCommandInput extends DescribeFeatureGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureGroupCommand}.
 */
export interface DescribeFeatureGroupCommandOutput extends DescribeFeatureGroupResponse, __MetadataBearer {}

/**
 * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFeatureGroupRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFeatureGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureGroupResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * //   FeatureGroupName: "STRING_VALUE", // required
 * //   RecordIdentifierFeatureName: "STRING_VALUE", // required
 * //   EventTimeFeatureName: "STRING_VALUE", // required
 * //   FeatureDefinitions: [ // FeatureDefinitions // required
 * //     { // FeatureDefinition
 * //       FeatureName: "STRING_VALUE", // required
 * //       FeatureType: "Integral" || "Fractional" || "String", // required
 * //       CollectionType: "List" || "Set" || "Vector",
 * //       CollectionConfig: { // CollectionConfig Union: only one key present
 * //         VectorConfig: { // VectorConfig
 * //           Dimension: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   OnlineStoreConfig: { // OnlineStoreConfig
 * //     SecurityConfig: { // OnlineStoreSecurityConfig
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     EnableOnlineStore: true || false,
 * //     TtlDuration: { // TtlDuration
 * //       Unit: "Seconds" || "Minutes" || "Hours" || "Days" || "Weeks",
 * //       Value: Number("int"),
 * //     },
 * //     StorageType: "Standard" || "InMemory",
 * //   },
 * //   OfflineStoreConfig: { // OfflineStoreConfig
 * //     S3StorageConfig: { // S3StorageConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //       ResolvedOutputS3Uri: "STRING_VALUE",
 * //     },
 * //     DisableGlueTableCreation: true || false,
 * //     DataCatalogConfig: { // DataCatalogConfig
 * //       TableName: "STRING_VALUE", // required
 * //       Catalog: "STRING_VALUE", // required
 * //       Database: "STRING_VALUE", // required
 * //     },
 * //     TableFormat: "Default" || "Glue" || "Iceberg",
 * //   },
 * //   ThroughputConfig: { // ThroughputConfigDescription
 * //     ThroughputMode: "OnDemand" || "Provisioned", // required
 * //     ProvisionedReadCapacityUnits: Number("int"),
 * //     ProvisionedWriteCapacityUnits: Number("int"),
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   FeatureGroupStatus: "Creating" || "Created" || "CreateFailed" || "Deleting" || "DeleteFailed",
 * //   OfflineStoreStatus: { // OfflineStoreStatus
 * //     Status: "Active" || "Blocked" || "Disabled", // required
 * //     BlockedReason: "STRING_VALUE",
 * //   },
 * //   LastUpdateStatus: { // LastUpdateStatus
 * //     Status: "Successful" || "Failed" || "InProgress", // required
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * //   FailureReason: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE", // required
 * //   OnlineStoreTotalSizeBytes: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeFeatureGroupCommandInput - {@link DescribeFeatureGroupCommandInput}
 * @returns {@link DescribeFeatureGroupCommandOutput}
 * @see {@link DescribeFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeFeatureGroupCommand extends $Command
  .classBuilder<
    DescribeFeatureGroupCommandInput,
    DescribeFeatureGroupCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeFeatureGroup", {})
  .n("SageMakerClient", "DescribeFeatureGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFeatureGroupCommand)
  .de(de_DescribeFeatureGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFeatureGroupRequest;
      output: DescribeFeatureGroupResponse;
    };
    sdk: {
      input: DescribeFeatureGroupCommandInput;
      output: DescribeFeatureGroupCommandOutput;
    };
  };
}
