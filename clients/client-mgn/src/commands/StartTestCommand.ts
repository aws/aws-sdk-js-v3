// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { StartTestRequest, StartTestResponse } from "../models/models_0";
import { StartTest } from "../schemas/schemas_3_LaunchConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTestCommand}.
 */
export interface StartTestCommandInput extends StartTestRequest {}
/**
 * @public
 *
 * The output of {@link StartTestCommand}.
 */
export interface StartTestCommandOutput extends StartTestResponse, __MetadataBearer {}

/**
 * <p>Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartTestCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartTestCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartTestRequest
 *   sourceServerIDs: [ // StartTestRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new StartTestCommand(input);
 * const response = await client.send(command);
 * // { // StartTestResponse
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
 * @param StartTestCommandInput - {@link StartTestCommandInput}
 * @returns {@link StartTestCommandOutput}
 * @see {@link StartTestCommandInput} for command's `input` shape.
 * @see {@link StartTestCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartTestCommand extends $Command
  .classBuilder<
    StartTestCommandInput,
    StartTestCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "StartTest", {})
  .n("MgnClient", "StartTestCommand")
  .sc(StartTest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTestRequest;
      output: StartTestResponse;
    };
    sdk: {
      input: StartTestCommandInput;
      output: StartTestCommandOutput;
    };
  };
}
