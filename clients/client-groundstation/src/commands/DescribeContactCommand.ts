// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DescribeContactRequest, DescribeContactResponse } from "../models/models_0";
import { de_DescribeContactCommand, se_DescribeContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandInput extends DescribeContactRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandOutput extends DescribeContactResponse, __MetadataBearer {}

/**
 * <p>Describes an existing contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DescribeContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DescribeContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // DescribeContactRequest
 *   contactId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactResponse
 * //   contactId: "STRING_VALUE",
 * //   missionProfileArn: "STRING_VALUE",
 * //   satelliteArn: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   prePassStartTime: new Date("TIMESTAMP"),
 * //   postPassEndTime: new Date("TIMESTAMP"),
 * //   groundStation: "STRING_VALUE",
 * //   contactStatus: "SCHEDULING" || "FAILED_TO_SCHEDULE" || "SCHEDULED" || "CANCELLED" || "AWS_CANCELLED" || "PREPASS" || "PASS" || "POSTPASS" || "COMPLETED" || "FAILED" || "AVAILABLE" || "CANCELLING" || "AWS_FAILED",
 * //   errorMessage: "STRING_VALUE",
 * //   maximumElevation: { // Elevation
 * //     value: Number("double"), // required
 * //     unit: "DEGREE_ANGLE" || "RADIAN", // required
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   region: "STRING_VALUE",
 * //   dataflowList: [ // DataflowList
 * //     { // DataflowDetail
 * //       source: { // Source
 * //         configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording",
 * //         configId: "STRING_VALUE",
 * //         configDetails: { // ConfigDetails Union: only one key present
 * //           endpointDetails: { // EndpointDetails
 * //             securityDetails: { // SecurityDetails
 * //               subnetIds: [ // SubnetList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIds: [ // SecurityGroupIdList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //             endpoint: { // DataflowEndpoint
 * //               name: "STRING_VALUE",
 * //               address: { // SocketAddress
 * //                 name: "STRING_VALUE", // required
 * //                 port: Number("int"), // required
 * //               },
 * //               status: "created" || "creating" || "deleted" || "deleting" || "failed",
 * //               mtu: Number("int"),
 * //             },
 * //             awsGroundStationAgentEndpoint: { // AwsGroundStationAgentEndpoint
 * //               name: "STRING_VALUE", // required
 * //               egressAddress: { // ConnectionDetails
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   port: Number("int"), // required
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               ingressAddress: { // RangedConnectionDetails
 * //                 socketAddress: { // RangedSocketAddress
 * //                   name: "STRING_VALUE", // required
 * //                   portRange: { // IntegerRange
 * //                     minimum: Number("int"), // required
 * //                     maximum: Number("int"), // required
 * //                   },
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               agentStatus: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE",
 * //               auditResults: "HEALTHY" || "UNHEALTHY",
 * //             },
 * //             healthStatus: "HEALTHY" || "UNHEALTHY",
 * //             healthReasons: [ // CapabilityHealthReasonList
 * //               "NO_REGISTERED_AGENT" || "INVALID_IP_OWNERSHIP" || "NOT_AUTHORIZED_TO_CREATE_SLR" || "UNVERIFIED_IP_OWNERSHIP" || "INITIALIZING_DATAPLANE" || "DATAPLANE_FAILURE" || "HEALTHY",
 * //             ],
 * //           },
 * //           antennaDemodDecodeDetails: { // AntennaDemodDecodeDetails
 * //             outputNode: "STRING_VALUE",
 * //           },
 * //           s3RecordingDetails: { // S3RecordingDetails
 * //             bucketArn: "STRING_VALUE",
 * //             keyTemplate: "STRING_VALUE",
 * //           },
 * //         },
 * //         dataflowSourceRegion: "STRING_VALUE",
 * //       },
 * //       destination: { // Destination
 * //         configType: "antenna-downlink" || "antenna-downlink-demod-decode" || "tracking" || "dataflow-endpoint" || "antenna-uplink" || "uplink-echo" || "s3-recording",
 * //         configId: "STRING_VALUE",
 * //         configDetails: {//  Union: only one key present
 * //           endpointDetails: {
 * //             securityDetails: {
 * //               subnetIds: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIds: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //             endpoint: {
 * //               name: "STRING_VALUE",
 * //               address: {
 * //                 name: "STRING_VALUE", // required
 * //                 port: Number("int"), // required
 * //               },
 * //               status: "created" || "creating" || "deleted" || "deleting" || "failed",
 * //               mtu: Number("int"),
 * //             },
 * //             awsGroundStationAgentEndpoint: {
 * //               name: "STRING_VALUE", // required
 * //               egressAddress: {
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   port: Number("int"), // required
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               ingressAddress: {
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   portRange: {
 * //                     minimum: Number("int"), // required
 * //                     maximum: Number("int"), // required
 * //                   },
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               agentStatus: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE",
 * //               auditResults: "HEALTHY" || "UNHEALTHY",
 * //             },
 * //             healthStatus: "HEALTHY" || "UNHEALTHY",
 * //             healthReasons: [
 * //               "NO_REGISTERED_AGENT" || "INVALID_IP_OWNERSHIP" || "NOT_AUTHORIZED_TO_CREATE_SLR" || "UNVERIFIED_IP_OWNERSHIP" || "INITIALIZING_DATAPLANE" || "DATAPLANE_FAILURE" || "HEALTHY",
 * //             ],
 * //           },
 * //           antennaDemodDecodeDetails: {
 * //             outputNode: "STRING_VALUE",
 * //           },
 * //           s3RecordingDetails: {
 * //             bucketArn: "STRING_VALUE",
 * //             keyTemplate: "STRING_VALUE",
 * //           },
 * //         },
 * //         dataflowDestinationRegion: "STRING_VALUE",
 * //       },
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   visibilityStartTime: new Date("TIMESTAMP"),
 * //   visibilityEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeContactCommandInput - {@link DescribeContactCommandInput}
 * @returns {@link DescribeContactCommandOutput}
 * @see {@link DescribeContactCommandInput} for command's `input` shape.
 * @see {@link DescribeContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class DescribeContactCommand extends $Command
  .classBuilder<
    DescribeContactCommandInput,
    DescribeContactCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "DescribeContact", {})
  .n("GroundStationClient", "DescribeContactCommand")
  .f(void 0, void 0)
  .ser(se_DescribeContactCommand)
  .de(de_DescribeContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactRequest;
      output: DescribeContactResponse;
    };
    sdk: {
      input: DescribeContactCommandInput;
      output: DescribeContactCommandOutput;
    };
  };
}
