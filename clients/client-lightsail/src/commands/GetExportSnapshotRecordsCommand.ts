// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetExportSnapshotRecordsRequest, GetExportSnapshotRecordsResult } from "../models/models_1";
import { de_GetExportSnapshotRecordsCommand, se_GetExportSnapshotRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportSnapshotRecordsCommand}.
 */
export interface GetExportSnapshotRecordsCommandInput extends GetExportSnapshotRecordsRequest {}
/**
 * @public
 *
 * The output of {@link GetExportSnapshotRecordsCommand}.
 */
export interface GetExportSnapshotRecordsCommandOutput extends GetExportSnapshotRecordsResult, __MetadataBearer {}

/**
 * <p>Returns all export snapshot records created as a result of the <code>export
 *         snapshot</code> operation.</p>
 *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
 *       resources with the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html">CreateCloudFormationStack</a>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetExportSnapshotRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetExportSnapshotRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetExportSnapshotRecordsRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetExportSnapshotRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetExportSnapshotRecordsResult
 * //   exportSnapshotRecords: [ // ExportSnapshotRecordList
 * //     { // ExportSnapshotRecord
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       state: "Started" || "Succeeded" || "Failed",
 * //       sourceInfo: { // ExportSnapshotRecordSourceInfo
 * //         resourceType: "InstanceSnapshot" || "DiskSnapshot",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         name: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //         fromResourceName: "STRING_VALUE",
 * //         fromResourceArn: "STRING_VALUE",
 * //         instanceSnapshotInfo: { // InstanceSnapshotInfo
 * //           fromBundleId: "STRING_VALUE",
 * //           fromBlueprintId: "STRING_VALUE",
 * //           fromDiskInfo: [ // DiskInfoList
 * //             { // DiskInfo
 * //               name: "STRING_VALUE",
 * //               path: "STRING_VALUE",
 * //               sizeInGb: Number("int"),
 * //               isSystemDisk: true || false,
 * //             },
 * //           ],
 * //         },
 * //         diskSnapshotInfo: { // DiskSnapshotInfo
 * //           sizeInGb: Number("int"),
 * //         },
 * //       },
 * //       destinationInfo: { // DestinationInfo
 * //         id: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExportSnapshotRecordsCommandInput - {@link GetExportSnapshotRecordsCommandInput}
 * @returns {@link GetExportSnapshotRecordsCommandOutput}
 * @see {@link GetExportSnapshotRecordsCommandInput} for command's `input` shape.
 * @see {@link GetExportSnapshotRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetExportSnapshotRecordsCommand extends $Command
  .classBuilder<
    GetExportSnapshotRecordsCommandInput,
    GetExportSnapshotRecordsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetExportSnapshotRecords", {})
  .n("LightsailClient", "GetExportSnapshotRecordsCommand")
  .f(void 0, void 0)
  .ser(se_GetExportSnapshotRecordsCommand)
  .de(de_GetExportSnapshotRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportSnapshotRecordsRequest;
      output: GetExportSnapshotRecordsResult;
    };
    sdk: {
      input: GetExportSnapshotRecordsCommandInput;
      output: GetExportSnapshotRecordsCommandOutput;
    };
  };
}
