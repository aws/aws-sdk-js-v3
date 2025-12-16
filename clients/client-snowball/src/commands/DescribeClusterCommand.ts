// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeClusterRequest, DescribeClusterResult } from "../models/models_0";
import { DescribeCluster$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterResult, __MetadataBearer {}

/**
 * <p>Returns information about a specific cluster including shipping information, cluster
 *       status, and other important metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // DescribeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterResult
 * //   ClusterMetadata: { // ClusterMetadata
 * //     ClusterId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     KmsKeyARN: "STRING_VALUE",
 * //     RoleARN: "STRING_VALUE",
 * //     ClusterState: "AwaitingQuorum" || "Pending" || "InUse" || "Complete" || "Cancelled",
 * //     JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //     SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Resources: { // JobResource
 * //       S3Resources: [ // S3ResourceList
 * //         { // S3Resource
 * //           BucketArn: "STRING_VALUE",
 * //           KeyRange: { // KeyRange
 * //             BeginMarker: "STRING_VALUE",
 * //             EndMarker: "STRING_VALUE",
 * //           },
 * //           TargetOnDeviceServices: [ // TargetOnDeviceServiceList
 * //             { // TargetOnDeviceService
 * //               ServiceName: "NFS_ON_DEVICE_SERVICE" || "S3_ON_DEVICE_SERVICE",
 * //               TransferOption: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       LambdaResources: [ // LambdaResourceList
 * //         { // LambdaResource
 * //           LambdaArn: "STRING_VALUE",
 * //           EventTriggers: [ // EventTriggerDefinitionList
 * //             { // EventTriggerDefinition
 * //               EventResourceARN: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Ec2AmiResources: [ // Ec2AmiResourceList
 * //         { // Ec2AmiResource
 * //           AmiId: "STRING_VALUE", // required
 * //           SnowballAmiId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     AddressId: "STRING_VALUE",
 * //     ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * //     Notification: { // Notification
 * //       SnsTopicARN: "STRING_VALUE",
 * //       JobStatesToNotify: [ // JobStateList
 * //         "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       ],
 * //       NotifyAll: true || false,
 * //       DevicePickupSnsTopicARN: "STRING_VALUE",
 * //     },
 * //     ForwardingAddressId: "STRING_VALUE",
 * //     TaxDocuments: { // TaxDocuments
 * //       IND: { // INDTaxDocuments
 * //         GSTIN: "STRING_VALUE",
 * //       },
 * //     },
 * //     OnDeviceServiceConfiguration: { // OnDeviceServiceConfiguration
 * //       NFSOnDeviceService: { // NFSOnDeviceServiceConfiguration
 * //         StorageLimit: Number("int"),
 * //         StorageUnit: "TB",
 * //       },
 * //       TGWOnDeviceService: { // TGWOnDeviceServiceConfiguration
 * //         StorageLimit: Number("int"),
 * //         StorageUnit: "TB",
 * //       },
 * //       EKSOnDeviceService: { // EKSOnDeviceServiceConfiguration
 * //         KubernetesVersion: "STRING_VALUE",
 * //         EKSAnywhereVersion: "STRING_VALUE",
 * //       },
 * //       S3OnDeviceService: { // S3OnDeviceServiceConfiguration
 * //         StorageLimit: Number("double"),
 * //         StorageUnit: "TB",
 * //         ServiceSize: Number("int"),
 * //         FaultTolerance: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class DescribeClusterCommand extends $Command
  .classBuilder<
    DescribeClusterCommandInput,
    DescribeClusterCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "DescribeCluster", {})
  .n("SnowballClient", "DescribeClusterCommand")
  .sc(DescribeCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterRequest;
      output: DescribeClusterResult;
    };
    sdk: {
      input: DescribeClusterCommandInput;
      output: DescribeClusterCommandOutput;
    };
  };
}
