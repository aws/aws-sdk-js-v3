// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartFailbackLaunchRequest, StartFailbackLaunchResponse } from "../models/models_0";
import { StartFailbackLaunch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFailbackLaunchCommand}.
 */
export interface StartFailbackLaunchCommandInput extends StartFailbackLaunchRequest {}
/**
 * @public
 *
 * The output of {@link StartFailbackLaunchCommand}.
 */
export interface StartFailbackLaunchCommandOutput extends StartFailbackLaunchResponse, __MetadataBearer {}

/**
 * <p>Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartFailbackLaunchCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartFailbackLaunchCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // StartFailbackLaunchRequest
 *   recoveryInstanceIDs: [ // StartFailbackRequestRecoveryInstanceIDs // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartFailbackLaunchCommand(input);
 * const response = await client.send(command);
 * // { // StartFailbackLaunchResponse
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
 * @param StartFailbackLaunchCommandInput - {@link StartFailbackLaunchCommandInput}
 * @returns {@link StartFailbackLaunchCommandOutput}
 * @see {@link StartFailbackLaunchCommandInput} for command's `input` shape.
 * @see {@link StartFailbackLaunchCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class StartFailbackLaunchCommand extends $Command
  .classBuilder<
    StartFailbackLaunchCommandInput,
    StartFailbackLaunchCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "StartFailbackLaunch", {})
  .n("DrsClient", "StartFailbackLaunchCommand")
  .sc(StartFailbackLaunch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFailbackLaunchRequest;
      output: StartFailbackLaunchResponse;
    };
    sdk: {
      input: StartFailbackLaunchCommandInput;
      output: StartFailbackLaunchCommandOutput;
    };
  };
}
