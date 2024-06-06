// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  TerminateRecoveryInstancesRequest,
  TerminateRecoveryInstancesResponse,
  TerminateRecoveryInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_TerminateRecoveryInstancesCommand, se_TerminateRecoveryInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateRecoveryInstancesCommand}.
 */
export interface TerminateRecoveryInstancesCommandInput extends TerminateRecoveryInstancesRequest {}
/**
 * @public
 *
 * The output of {@link TerminateRecoveryInstancesCommand}.
 */
export interface TerminateRecoveryInstancesCommandOutput extends TerminateRecoveryInstancesResponse, __MetadataBearer {}

/**
 * <p>Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, TerminateRecoveryInstancesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, TerminateRecoveryInstancesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // TerminateRecoveryInstancesRequest
 *   recoveryInstanceIDs: [ // RecoveryInstancesForTerminationRequest // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TerminateRecoveryInstancesCommand(input);
 * const response = await client.send(command);
 * // { // TerminateRecoveryInstancesResponse
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
 * //         sourceServerID: "STRING_VALUE",
 * //         recoveryInstanceID: "STRING_VALUE",
 * //         launchStatus: "STRING_VALUE",
 * //         launchActionsStatus: { // LaunchActionsStatus
 * //           ssmAgentDiscoveryDatetime: "STRING_VALUE",
 * //           runs: [ // LaunchActionRuns
 * //             { // LaunchActionRun
 * //               action: { // LaunchAction
 * //                 actionId: "STRING_VALUE",
 * //                 actionCode: "STRING_VALUE",
 * //                 type: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 active: true || false,
 * //                 order: Number("int"),
 * //                 actionVersion: "STRING_VALUE",
 * //                 optional: true || false,
 * //                 parameters: { // LaunchActionParameters
 * //                   "<keys>": { // LaunchActionParameter
 * //                     value: "STRING_VALUE",
 * //                     type: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 description: "STRING_VALUE",
 * //                 category: "STRING_VALUE",
 * //               },
 * //               runId: "STRING_VALUE",
 * //               status: "STRING_VALUE",
 * //               failureReason: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     participatingResources: [ // ParticipatingResources
 * //       { // ParticipatingResource
 * //         participatingResourceID: { // ParticipatingResourceID Union: only one key present
 * //           sourceNetworkID: "STRING_VALUE",
 * //         },
 * //         launchStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateRecoveryInstancesCommandInput - {@link TerminateRecoveryInstancesCommandInput}
 * @returns {@link TerminateRecoveryInstancesCommandOutput}
 * @see {@link TerminateRecoveryInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateRecoveryInstancesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class TerminateRecoveryInstancesCommand extends $Command
  .classBuilder<
    TerminateRecoveryInstancesCommandInput,
    TerminateRecoveryInstancesCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "TerminateRecoveryInstances", {})
  .n("DrsClient", "TerminateRecoveryInstancesCommand")
  .f(void 0, TerminateRecoveryInstancesResponseFilterSensitiveLog)
  .ser(se_TerminateRecoveryInstancesCommand)
  .de(de_TerminateRecoveryInstancesCommand)
  .build() {}
