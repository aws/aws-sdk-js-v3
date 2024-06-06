// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  TerminateTargetInstancesRequest,
  TerminateTargetInstancesRequestFilterSensitiveLog,
  TerminateTargetInstancesResponse,
  TerminateTargetInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_TerminateTargetInstancesCommand, se_TerminateTargetInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateTargetInstancesCommand}.
 */
export interface TerminateTargetInstancesCommandInput extends TerminateTargetInstancesRequest {}
/**
 * @public
 *
 * The output of {@link TerminateTargetInstancesCommand}.
 */
export interface TerminateTargetInstancesCommandOutput extends TerminateTargetInstancesResponse, __MetadataBearer {}

/**
 * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, TerminateTargetInstancesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, TerminateTargetInstancesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // TerminateTargetInstancesRequest
 *   sourceServerIDs: [ // TerminateTargetInstancesRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new TerminateTargetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // TerminateTargetInstancesResponse
 * //   job: { // Job
 * //     jobID: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     initiatedBy: "STRING_VALUE",
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     participatingServers: [ // ParticipatingServers
 * //       { // ParticipatingServer
 * //         sourceServerID: "STRING_VALUE", // required
 * //         launchStatus: "STRING_VALUE",
 * //         launchedEc2InstanceID: "STRING_VALUE",
 * //         postLaunchActionsStatus: { // PostLaunchActionsStatus
 * //           ssmAgentDiscoveryDatetime: "STRING_VALUE",
 * //           postLaunchActionsLaunchStatusList: [ // PostLaunchActionsLaunchStatusList
 * //             { // JobPostLaunchActionsLaunchStatus
 * //               ssmDocument: { // SsmDocument
 * //                 actionName: "STRING_VALUE", // required
 * //                 ssmDocumentName: "STRING_VALUE", // required
 * //                 timeoutSeconds: Number("int"),
 * //                 mustSucceedForCutover: true || false,
 * //                 parameters: { // SsmDocumentParameters
 * //                   "<keys>": [ // SsmParameterStoreParameters
 * //                     { // SsmParameterStoreParameter
 * //                       parameterType: "STRING_VALUE", // required
 * //                       parameterName: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 externalParameters: { // SsmDocumentExternalParameters
 * //                   "<keys>": { // SsmExternalParameter Union: only one key present
 * //                     dynamicPath: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //               ssmDocumentType: "STRING_VALUE",
 * //               executionID: "STRING_VALUE",
 * //               executionStatus: "STRING_VALUE",
 * //               failureReason: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateTargetInstancesCommandInput - {@link TerminateTargetInstancesCommandInput}
 * @returns {@link TerminateTargetInstancesCommandOutput}
 * @see {@link TerminateTargetInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateTargetInstancesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class TerminateTargetInstancesCommand extends $Command
  .classBuilder<
    TerminateTargetInstancesCommandInput,
    TerminateTargetInstancesCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "TerminateTargetInstances", {})
  .n("MgnClient", "TerminateTargetInstancesCommand")
  .f(TerminateTargetInstancesRequestFilterSensitiveLog, TerminateTargetInstancesResponseFilterSensitiveLog)
  .ser(se_TerminateTargetInstancesCommand)
  .de(de_TerminateTargetInstancesCommand)
  .build() {}
