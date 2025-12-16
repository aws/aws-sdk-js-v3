// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetCloudFormationStackRecordsRequest, GetCloudFormationStackRecordsResult } from "../models/models_0";
import { GetCloudFormationStackRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudFormationStackRecordsCommand}.
 */
export interface GetCloudFormationStackRecordsCommandInput extends GetCloudFormationStackRecordsRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudFormationStackRecordsCommand}.
 */
export interface GetCloudFormationStackRecordsCommandOutput
  extends GetCloudFormationStackRecordsResult,
    __MetadataBearer {}

/**
 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
 *       snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCloudFormationStackRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCloudFormationStackRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetCloudFormationStackRecordsRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetCloudFormationStackRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudFormationStackRecordsResult
 * //   cloudFormationStackRecords: [ // CloudFormationStackRecordList
 * //     { // CloudFormationStackRecord
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       state: "Started" || "Succeeded" || "Failed",
 * //       sourceInfo: [ // CloudFormationStackRecordSourceInfoList
 * //         { // CloudFormationStackRecordSourceInfo
 * //           resourceType: "ExportSnapshotRecord",
 * //           name: "STRING_VALUE",
 * //           arn: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @param GetCloudFormationStackRecordsCommandInput - {@link GetCloudFormationStackRecordsCommandInput}
 * @returns {@link GetCloudFormationStackRecordsCommandOutput}
 * @see {@link GetCloudFormationStackRecordsCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationStackRecordsCommandOutput} for command's `response` shape.
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
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
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
export class GetCloudFormationStackRecordsCommand extends $Command
  .classBuilder<
    GetCloudFormationStackRecordsCommandInput,
    GetCloudFormationStackRecordsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetCloudFormationStackRecords", {})
  .n("LightsailClient", "GetCloudFormationStackRecordsCommand")
  .sc(GetCloudFormationStackRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudFormationStackRecordsRequest;
      output: GetCloudFormationStackRecordsResult;
    };
    sdk: {
      input: GetCloudFormationStackRecordsCommandInput;
      output: GetCloudFormationStackRecordsCommandOutput;
    };
  };
}
