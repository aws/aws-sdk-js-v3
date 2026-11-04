// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateJobRequest, CreateJobResult } from "../models/models_0";
import { CreateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResult, __MetadataBearer {}

/**
 * Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the `clusterId` value; the other job attributes are inherited from the cluster.
 *
 * > **Note:**
 * >
 * > Only the Snowball; Edge device type is supported when ordering clustered jobs.
 * >
 * > The device capacity is optional.
 * >
 * > Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see [Amazon Web Services Regional Services](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&loc=4).
 *
 * **Snow Family devices and their capacities.**
 *
 * - Device type: **SNC1_SSD**
 *
 *   - Capacity: T14
 *   - Description: Snowcone
 * - Device type: **SNC1_HDD**
 *
 *   - Capacity: T8
 *   - Description: Snowcone
 * - Device type: **EDGE_S**
 *
 *   - Capacity: T98
 *   - Description: Snowball Edge Storage Optimized for data transfer only
 * - Device type: **EDGE_CG**
 *
 *   - Capacity: T42
 *   - Description: Snowball Edge Compute Optimized with GPU
 * - Device type: **EDGE_C**
 *
 *   - Capacity: T42
 *   - Description: Snowball Edge Compute Optimized without GPU
 * - Device type: **EDGE**
 *
 *   - Capacity: T100
 *   - Description: Snowball Edge Storage Optimized with EC2 Compute
 *
 *   > **Note:** This device is replaced with T98.
 * - Device type: **STANDARD**
 *
 *   - Capacity: T50
 *   - Description: Original Snowball device
 *
 *     > **Note:** This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region
 * - Device type: **STANDARD**
 *
 *   - Capacity: T80
 *   - Description: Original Snowball device
 *
 *     > **Note:** This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region.
 * - Snow Family device type: **RACK_5U_C**
 *
 *   - Capacity: T13
 *   - Description: Snowblade.
 * - Device type: **V3_5S**
 *
 *   - Capacity: T240
 *   - Description: Snowball Edge Storage Optimized 210TB
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CreateJobRequest
 *   JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
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
 *   Description: "STRING_VALUE",
 *   AddressId: "STRING_VALUE",
 *   KmsKeyARN: "STRING_VALUE",
 *   RoleARN: "STRING_VALUE",
 *   SnowballCapacityPreference: "T50" || "T80" || "T100" || "T42" || "T98" || "T8" || "T14" || "T32" || "NoPreference" || "T240" || "T13",
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 *   Notification: { // Notification
 *     SnsTopicARN: "STRING_VALUE",
 *     JobStatesToNotify: [ // JobStateList
 *       "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 *     ],
 *     NotifyAll: true || false,
 *     DevicePickupSnsTopicARN: "STRING_VALUE",
 *   },
 *   ClusterId: "STRING_VALUE",
 *   SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 *   ForwardingAddressId: "STRING_VALUE",
 *   TaxDocuments: { // TaxDocuments
 *     IND: { // INDTaxDocuments
 *       GSTIN: "STRING_VALUE",
 *     },
 *   },
 *   DeviceConfiguration: { // DeviceConfiguration
 *     SnowconeDeviceConfiguration: { // SnowconeDeviceConfiguration
 *       WirelessConnection: { // WirelessConnection
 *         IsWifiEnabled: true || false,
 *       },
 *     },
 *   },
 *   RemoteManagement: "INSTALLED_ONLY" || "INSTALLED_AUTOSTART" || "NOT_INSTALLED",
 *   LongTermPricingId: "STRING_VALUE",
 *   ImpactLevel: "IL2" || "IL4" || "IL5" || "IL6" || "IL99",
 *   PickupDetails: { // PickupDetails
 *     Name: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     IdentificationNumber: "STRING_VALUE",
 *     IdentificationExpirationDate: new Date("TIMESTAMP"),
 *     IdentificationIssuingOrg: "STRING_VALUE",
 *     DevicePickupId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResult
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ClusterLimitExceededException} (client fault)
 *
 * Job creation failed. Currently, clusters support five nodes. If you have fewer than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five nodes.
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *
 * Your user lacks the necessary Amazon EC2 permissions to perform the attempted action.
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *
 * Job or cluster creation failed. One or more inputs were invalid. Confirm that the CreateClusterRequest$SnowballType value supports your CreateJobRequest$JobType, and try again.
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
 * @example To create a job
 * ```javascript
 * // Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster.
 * const input = {
 *   AddressId: "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *   Description: "My Job",
 *   JobType: "IMPORT",
 *   KmsKeyARN: "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
 *   Notification: {
 *     JobStatesToNotify:     [],
 *     NotifyAll: false
 *   },
 *   Resources: {
 *     S3Resources: [
 *       {
 *         BucketArn: "arn:aws:s3:::MyBucket",
 *         KeyRange:         { /* empty *\/ }
 *       }
 *     ]
 *   },
 *   RoleARN: "arn:aws:iam::123456789012:role/snowball-import-S3-role",
 *   ShippingOption: "SECOND_DAY",
 *   SnowballCapacityPreference: "T80",
 *   SnowballType: "STANDARD"
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   JobId: "JID123e4567-e89b-12d3-a456-426655440000"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateJobCommand extends command<CreateJobCommandInput, CreateJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateJob",
  CreateJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobRequest;
      output: CreateJobResult;
    };
    sdk: {
      input: CreateJobCommandInput;
      output: CreateJobCommandOutput;
    };
  };
}
