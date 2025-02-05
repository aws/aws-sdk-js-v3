// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReplicationRunsRequest, GetReplicationRunsResponse } from "../models/models_0";
import { de_GetReplicationRunsCommand, se_GetReplicationRunsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationRunsCommand}.
 */
export interface GetReplicationRunsCommandInput extends GetReplicationRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetReplicationRunsCommand}.
 */
export interface GetReplicationRunsCommandOutput extends GetReplicationRunsResponse, __MetadataBearer {}

/**
 * <p>Describes the replication runs for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationRunsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationRunsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // GetReplicationRunsRequest
 *   replicationJobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetReplicationRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetReplicationRunsResponse
 * //   replicationJob: { // ReplicationJob
 * //     replicationJobId: "STRING_VALUE",
 * //     serverId: "STRING_VALUE",
 * //     serverType: "VIRTUAL_MACHINE",
 * //     vmServer: { // VmServer
 * //       vmServerAddress: { // VmServerAddress
 * //         vmManagerId: "STRING_VALUE",
 * //         vmId: "STRING_VALUE",
 * //       },
 * //       vmName: "STRING_VALUE",
 * //       vmManagerName: "STRING_VALUE",
 * //       vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //       vmPath: "STRING_VALUE",
 * //     },
 * //     seedReplicationTime: new Date("TIMESTAMP"),
 * //     frequency: Number("int"),
 * //     runOnce: true || false,
 * //     nextReplicationRunStartTime: new Date("TIMESTAMP"),
 * //     licenseType: "AWS" || "BYOL",
 * //     roleName: "STRING_VALUE",
 * //     latestAmiId: "STRING_VALUE",
 * //     state: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED" || "COMPLETED" || "PAUSED_ON_FAILURE" || "FAILING",
 * //     statusMessage: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     numberOfRecentAmisToKeep: Number("int"),
 * //     encrypted: true || false,
 * //     kmsKeyId: "STRING_VALUE",
 * //     replicationRunList: [ // ReplicationRunList
 * //       { // ReplicationRun
 * //         replicationRunId: "STRING_VALUE",
 * //         state: "PENDING" || "MISSED" || "ACTIVE" || "FAILED" || "COMPLETED" || "DELETING" || "DELETED",
 * //         type: "ON_DEMAND" || "AUTOMATIC",
 * //         stageDetails: { // ReplicationRunStageDetails
 * //           stage: "STRING_VALUE",
 * //           stageProgress: "STRING_VALUE",
 * //         },
 * //         statusMessage: "STRING_VALUE",
 * //         amiId: "STRING_VALUE",
 * //         scheduledStartTime: new Date("TIMESTAMP"),
 * //         completedTime: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         encrypted: true || false,
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   replicationRunList: [
 * //     {
 * //       replicationRunId: "STRING_VALUE",
 * //       state: "PENDING" || "MISSED" || "ACTIVE" || "FAILED" || "COMPLETED" || "DELETING" || "DELETED",
 * //       type: "ON_DEMAND" || "AUTOMATIC",
 * //       stageDetails: {
 * //         stage: "STRING_VALUE",
 * //         stageProgress: "STRING_VALUE",
 * //       },
 * //       statusMessage: "STRING_VALUE",
 * //       amiId: "STRING_VALUE",
 * //       scheduledStartTime: new Date("TIMESTAMP"),
 * //       completedTime: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       encrypted: true || false,
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReplicationRunsCommandInput - {@link GetReplicationRunsCommandInput}
 * @returns {@link GetReplicationRunsCommandOutput}
 * @see {@link GetReplicationRunsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationRunsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class GetReplicationRunsCommand extends $Command
  .classBuilder<
    GetReplicationRunsCommandInput,
    GetReplicationRunsCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetReplicationRuns", {})
  .n("SMSClient", "GetReplicationRunsCommand")
  .f(void 0, void 0)
  .ser(se_GetReplicationRunsCommand)
  .de(de_GetReplicationRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReplicationRunsRequest;
      output: GetReplicationRunsResponse;
    };
    sdk: {
      input: GetReplicationRunsCommandInput;
      output: GetReplicationRunsCommandOutput;
    };
  };
}
