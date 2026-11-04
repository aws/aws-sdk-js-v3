// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterRequest, UpdateClusterResult } from "../models/models_0";
import { UpdateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandInput extends UpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterCommand}.
 */
export interface UpdateClusterCommandOutput extends UpdateClusterResult, __MetadataBearer {}

/**
 * While a cluster's `ClusterState` value is in the `AwaitingQuorum` state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // UpdateClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Resources: { // JobResource
 *     S3Resources: [ // S3ResourceList
 *       { // S3Resource
 *         BucketArn: "STRING_VALUE",
 *         KeyRange: { // KeyRange
 *           BeginMarker: "STRING_VALUE",
 *           EndMarker: "STRING_VALUE",
 *         },
 *         TargetOnDeviceServices: [ // TargetOnDeviceServiceList
 *           { // TargetOnDeviceService
 *             ServiceName: "NFS_ON_DEVICE_SERVICE" || "S3_ON_DEVICE_SERVICE",
 *             TransferOption: "IMPORT" || "EXPORT" || "LOCAL_USE",
 *           },
 *         ],
 *       },
 *     ],
 *     LambdaResources: [ // LambdaResourceList
 *       { // LambdaResource
 *         LambdaArn: "STRING_VALUE",
 *         EventTriggers: [ // EventTriggerDefinitionList
 *           { // EventTriggerDefinition
 *             EventResourceARN: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     Ec2AmiResources: [ // Ec2AmiResourceList
 *       { // Ec2AmiResource
 *         AmiId: "STRING_VALUE", // required
 *         SnowballAmiId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   OnDeviceServiceConfiguration: { // OnDeviceServiceConfiguration
 *     NFSOnDeviceService: { // NFSOnDeviceServiceConfiguration
 *       StorageLimit: Number("int"),
 *       StorageUnit: "TB",
 *     },
 *     TGWOnDeviceService: { // TGWOnDeviceServiceConfiguration
 *       StorageLimit: Number("int"),
 *       StorageUnit: "TB",
 *     },
 *     EKSOnDeviceService: { // EKSOnDeviceServiceConfiguration
 *       KubernetesVersion: "STRING_VALUE",
 *       EKSAnywhereVersion: "STRING_VALUE",
 *     },
 *     S3OnDeviceService: { // S3OnDeviceServiceConfiguration
 *       StorageLimit: Number("double"),
 *       StorageUnit: "TB",
 *       ServiceSize: Number("int"),
 *       FaultTolerance: Number("int"),
 *     },
 *   },
 *   AddressId: "STRING_VALUE",
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 *   Notification: { // Notification
 *     SnsTopicARN: "STRING_VALUE",
 *     JobStatesToNotify: [ // JobStateList
 *       "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 *     ],
 *     NotifyAll: true || false,
 *     DevicePickupSnsTopicARN: "STRING_VALUE",
 *   },
 *   ForwardingAddressId: "STRING_VALUE",
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateClusterCommandInput - {@link UpdateClusterCommandInput}
 * @returns {@link UpdateClusterCommandOutput}
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *
 * Your user lacks the necessary Amazon EC2 permissions to perform the attempted action.
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *
 * Job or cluster creation failed. One or more inputs were invalid. Confirm that the CreateClusterRequest$SnowballType value supports your CreateJobRequest$JobType, and try again.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *
 * The action can't be performed because the job's current state doesn't allow that action to be performed.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *
 * The specified resource can't be found. Check the information you provided in your last request, and try again.
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *
 * The provided Key Management Service key lacks the permissions to perform the specified CreateJob or UpdateJob action.
 *
 * @throws {@link SnowballServiceException}
 *
 * Base exception class for all service exceptions from Snowball service.
 *
 * @example To update a cluster
 * ```javascript
 * // This action allows you to update certain parameters for a cluster. Once the cluster changes to a different state, usually within 60 minutes of it being created, this action is no longer available.
 * const input = {
 *   AddressId: "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *   ClusterId: "CID123e4567-e89b-12d3-a456-426655440000",
 *   Description: "updated-cluster-name"
 * };
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateClusterCommand extends command<UpdateClusterCommandInput, UpdateClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCluster",
  UpdateCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterRequest;
      output: {};
    };
    sdk: {
      input: UpdateClusterCommandInput;
      output: UpdateClusterCommandOutput;
    };
  };
}
