// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateJobRequest, CreateJobRequestFilterSensitiveLog, CreateJobResult } from "../models/models_0";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a job to import or export data between Amazon S3 and your on-premises data
 *       center. Your Amazon Web Services account must have the right trust policies and permissions in
 *       place to create a job for a Snow device. If you're creating a job for a node in a cluster, you
 *       only need to provide the <code>clusterId</code> value; the other job attributes are inherited
 *       from the cluster. </p>
 *          <note>
 *             <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p>
 *             <p>The device capacity is optional.</p>
 *             <p>Availability of device types differ by Amazon Web Services Region. For more information
 *         about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&loc=4">Amazon Web Services Regional Services</a>.</p>
 *          </note>
 *          <p></p>
 *          <p class="title">
 *             <b>Snow Family devices and their capacities.</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Device type: <b>SNC1_SSD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T14</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowcone </p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>SNC1_HDD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T8</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowcone </p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_S</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T98</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Storage Optimized for data transfer only </p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_CG</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T42</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Compute Optimized with GPU</p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE_C</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T42</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Compute Optimized without GPU</p>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>EDGE</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T100</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p>
 *                   </li>
 *                </ul>
 *                <note>
 *                   <p>This device is replaced with T98.</p>
 *                </note>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>STANDARD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T50</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Original Snowball device</p>
 *                      <note>
 *                         <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region
 *               </p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Device type: <b>STANDARD</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T80</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Original Snowball device</p>
 *                      <note>
 *                         <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p>
 *                      </note>
 *                   </li>
 *                </ul>
 *                <p></p>
 *             </li>
 *             <li>
 *                <p>Snow Family device type: <b>RACK_5U_C</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T13 </p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowblade.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Device type: <b>V3_5S</b>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Capacity: T240</p>
 *                   </li>
 *                   <li>
 *                      <p>Description: Snowball Edge Storage Optimized 210TB</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
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
 *  <p>Job creation failed. Currently, clusters support five nodes. If you have fewer than
 *       five nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five nodes.</p>
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *  <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *  <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To create a job
 * ```javascript
 * // Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster.
 * const input = {
 *   "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *   "Description": "My Job",
 *   "JobType": "IMPORT",
 *   "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
 *   "Notification": {
 *     "JobStatesToNotify": [],
 *     "NotifyAll": false
 *   },
 *   "Resources": {
 *     "S3Resources": [
 *       {
 *         "BucketArn": "arn:aws:s3:::MyBucket",
 *         "KeyRange": {}
 *       }
 *     ]
 *   },
 *   "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
 *   "ShippingOption": "SECOND_DAY",
 *   "SnowballCapacityPreference": "T80",
 *   "SnowballType": "STANDARD"
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JobId": "JID123e4567-e89b-12d3-a456-426655440000"
 * }
 * *\/
 * // example id: to-create-a-job-1482864834886
 * ```
 *
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "CreateJob", {})
  .n("SnowballClient", "CreateJobCommand")
  .f(CreateJobRequestFilterSensitiveLog, void 0)
  .ser(se_CreateJobCommand)
  .de(de_CreateJobCommand)
  .build() {}
