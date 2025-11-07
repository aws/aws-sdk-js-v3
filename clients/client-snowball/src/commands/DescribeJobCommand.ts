// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobRequest, DescribeJobResult } from "../models/models_0";
import { DescribeJob } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends DescribeJobResult, __MetadataBearer {}

/**
 * <p>Returns information about a specific job including shipping information, job status,
 *       and other important metadata. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // DescribeJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobResult
 * //   JobMetadata: { // JobMetadata
 * //     JobId: "STRING_VALUE",
 * //     JobState: "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
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
 * //     Description: "STRING_VALUE",
 * //     KmsKeyARN: "STRING_VALUE",
 * //     RoleARN: "STRING_VALUE",
 * //     AddressId: "STRING_VALUE",
 * //     ShippingDetails: { // ShippingDetails
 * //       ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * //       InboundShipment: { // Shipment
 * //         Status: "STRING_VALUE",
 * //         TrackingNumber: "STRING_VALUE",
 * //       },
 * //       OutboundShipment: {
 * //         Status: "STRING_VALUE",
 * //         TrackingNumber: "STRING_VALUE",
 * //       },
 * //     },
 * //     SnowballCapacityPreference: "T50" || "T80" || "T100" || "T42" || "T98" || "T8" || "T14" || "T32" || "NoPreference" || "T240" || "T13",
 * //     Notification: { // Notification
 * //       SnsTopicARN: "STRING_VALUE",
 * //       JobStatesToNotify: [ // JobStateList
 * //         "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       ],
 * //       NotifyAll: true || false,
 * //       DevicePickupSnsTopicARN: "STRING_VALUE",
 * //     },
 * //     DataTransferProgress: { // DataTransfer
 * //       BytesTransferred: Number("long"),
 * //       ObjectsTransferred: Number("long"),
 * //       TotalBytes: Number("long"),
 * //       TotalObjects: Number("long"),
 * //     },
 * //     JobLogInfo: { // JobLogs
 * //       JobCompletionReportURI: "STRING_VALUE",
 * //       JobSuccessLogURI: "STRING_VALUE",
 * //       JobFailureLogURI: "STRING_VALUE",
 * //     },
 * //     ClusterId: "STRING_VALUE",
 * //     ForwardingAddressId: "STRING_VALUE",
 * //     TaxDocuments: { // TaxDocuments
 * //       IND: { // INDTaxDocuments
 * //         GSTIN: "STRING_VALUE",
 * //       },
 * //     },
 * //     DeviceConfiguration: { // DeviceConfiguration
 * //       SnowconeDeviceConfiguration: { // SnowconeDeviceConfiguration
 * //         WirelessConnection: { // WirelessConnection
 * //           IsWifiEnabled: true || false,
 * //         },
 * //       },
 * //     },
 * //     RemoteManagement: "INSTALLED_ONLY" || "INSTALLED_AUTOSTART" || "NOT_INSTALLED",
 * //     LongTermPricingId: "STRING_VALUE",
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
 * //     ImpactLevel: "IL2" || "IL4" || "IL5" || "IL6" || "IL99",
 * //     PickupDetails: { // PickupDetails
 * //       Name: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       IdentificationNumber: "STRING_VALUE",
 * //       IdentificationExpirationDate: new Date("TIMESTAMP"),
 * //       IdentificationIssuingOrg: "STRING_VALUE",
 * //       DevicePickupId: "STRING_VALUE",
 * //     },
 * //     SnowballId: "STRING_VALUE",
 * //   },
 * //   SubJobMetadata: [ // JobMetadataList
 * //     {
 * //       JobId: "STRING_VALUE",
 * //       JobState: "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //       SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Resources: {
 * //         S3Resources: [
 * //           {
 * //             BucketArn: "STRING_VALUE",
 * //             KeyRange: {
 * //               BeginMarker: "STRING_VALUE",
 * //               EndMarker: "STRING_VALUE",
 * //             },
 * //             TargetOnDeviceServices: [
 * //               {
 * //                 ServiceName: "NFS_ON_DEVICE_SERVICE" || "S3_ON_DEVICE_SERVICE",
 * //                 TransferOption: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         LambdaResources: [
 * //           {
 * //             LambdaArn: "STRING_VALUE",
 * //             EventTriggers: [
 * //               {
 * //                 EventResourceARN: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Ec2AmiResources: [
 * //           {
 * //             AmiId: "STRING_VALUE", // required
 * //             SnowballAmiId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Description: "STRING_VALUE",
 * //       KmsKeyARN: "STRING_VALUE",
 * //       RoleARN: "STRING_VALUE",
 * //       AddressId: "STRING_VALUE",
 * //       ShippingDetails: {
 * //         ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * //         InboundShipment: {
 * //           Status: "STRING_VALUE",
 * //           TrackingNumber: "STRING_VALUE",
 * //         },
 * //         OutboundShipment: {
 * //           Status: "STRING_VALUE",
 * //           TrackingNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //       SnowballCapacityPreference: "T50" || "T80" || "T100" || "T42" || "T98" || "T8" || "T14" || "T32" || "NoPreference" || "T240" || "T13",
 * //       Notification: {
 * //         SnsTopicARN: "STRING_VALUE",
 * //         JobStatesToNotify: [
 * //           "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //         ],
 * //         NotifyAll: true || false,
 * //         DevicePickupSnsTopicARN: "STRING_VALUE",
 * //       },
 * //       DataTransferProgress: {
 * //         BytesTransferred: Number("long"),
 * //         ObjectsTransferred: Number("long"),
 * //         TotalBytes: Number("long"),
 * //         TotalObjects: Number("long"),
 * //       },
 * //       JobLogInfo: {
 * //         JobCompletionReportURI: "STRING_VALUE",
 * //         JobSuccessLogURI: "STRING_VALUE",
 * //         JobFailureLogURI: "STRING_VALUE",
 * //       },
 * //       ClusterId: "STRING_VALUE",
 * //       ForwardingAddressId: "STRING_VALUE",
 * //       TaxDocuments: {
 * //         IND: {
 * //           GSTIN: "STRING_VALUE",
 * //         },
 * //       },
 * //       DeviceConfiguration: {
 * //         SnowconeDeviceConfiguration: {
 * //           WirelessConnection: {
 * //             IsWifiEnabled: true || false,
 * //           },
 * //         },
 * //       },
 * //       RemoteManagement: "INSTALLED_ONLY" || "INSTALLED_AUTOSTART" || "NOT_INSTALLED",
 * //       LongTermPricingId: "STRING_VALUE",
 * //       OnDeviceServiceConfiguration: {
 * //         NFSOnDeviceService: {
 * //           StorageLimit: Number("int"),
 * //           StorageUnit: "TB",
 * //         },
 * //         TGWOnDeviceService: {
 * //           StorageLimit: Number("int"),
 * //           StorageUnit: "TB",
 * //         },
 * //         EKSOnDeviceService: {
 * //           KubernetesVersion: "STRING_VALUE",
 * //           EKSAnywhereVersion: "STRING_VALUE",
 * //         },
 * //         S3OnDeviceService: {
 * //           StorageLimit: Number("double"),
 * //           StorageUnit: "TB",
 * //           ServiceSize: Number("int"),
 * //           FaultTolerance: Number("int"),
 * //         },
 * //       },
 * //       ImpactLevel: "IL2" || "IL4" || "IL5" || "IL6" || "IL99",
 * //       PickupDetails: {
 * //         Name: "STRING_VALUE",
 * //         PhoneNumber: "STRING_VALUE",
 * //         Email: "STRING_VALUE",
 * //         IdentificationNumber: "STRING_VALUE",
 * //         IdentificationExpirationDate: new Date("TIMESTAMP"),
 * //         IdentificationIssuingOrg: "STRING_VALUE",
 * //         DevicePickupId: "STRING_VALUE",
 * //       },
 * //       SnowballId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
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
export class DescribeJobCommand extends $Command
  .classBuilder<
    DescribeJobCommandInput,
    DescribeJobCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "DescribeJob", {})
  .n("SnowballClient", "DescribeJobCommand")
  .sc(DescribeJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobRequest;
      output: DescribeJobResult;
    };
    sdk: {
      input: DescribeJobCommandInput;
      output: DescribeJobCommandOutput;
    };
  };
}
