// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobsRequest, DescribeJobsResponse, DescribeJobsResponseFilterSensitiveLog } from "../models/models_0";
import { de_DescribeJobsCommand, se_DescribeJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandInput extends DescribeJobsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandOutput extends DescribeJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeJobsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeJobsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeJobsRequest
 *   filters: { // DescribeJobsRequestFilters
 *     jobIDs: [ // DescribeJobsRequestFiltersJobIDs
 *       "STRING_VALUE",
 *     ],
 *     fromDate: "STRING_VALUE",
 *     toDate: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeJobsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobsResponse
 * //   items: [ // JobsList
 * //     { // Job
 * //       jobID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       initiatedBy: "STRING_VALUE",
 * //       creationDateTime: "STRING_VALUE",
 * //       endDateTime: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       participatingServers: [ // ParticipatingServers
 * //         { // ParticipatingServer
 * //           sourceServerID: "STRING_VALUE",
 * //           recoveryInstanceID: "STRING_VALUE",
 * //           launchStatus: "STRING_VALUE",
 * //           launchActionsStatus: { // LaunchActionsStatus
 * //             ssmAgentDiscoveryDatetime: "STRING_VALUE",
 * //             runs: [ // LaunchActionRuns
 * //               { // LaunchActionRun
 * //                 action: { // LaunchAction
 * //                   actionId: "STRING_VALUE",
 * //                   actionCode: "STRING_VALUE",
 * //                   type: "STRING_VALUE",
 * //                   name: "STRING_VALUE",
 * //                   active: true || false,
 * //                   order: Number("int"),
 * //                   actionVersion: "STRING_VALUE",
 * //                   optional: true || false,
 * //                   parameters: { // LaunchActionParameters
 * //                     "<keys>": { // LaunchActionParameter
 * //                       value: "STRING_VALUE",
 * //                       type: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   description: "STRING_VALUE",
 * //                   category: "STRING_VALUE",
 * //                 },
 * //                 runId: "STRING_VALUE",
 * //                 status: "STRING_VALUE",
 * //                 failureReason: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       participatingResources: [ // ParticipatingResources
 * //         { // ParticipatingResource
 * //           participatingResourceID: { // ParticipatingResourceID Union: only one key present
 * //             sourceNetworkID: "STRING_VALUE",
 * //           },
 * //           launchStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobsCommandInput - {@link DescribeJobsCommandInput}
 * @returns {@link DescribeJobsCommandOutput}
 * @see {@link DescribeJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
export class DescribeJobsCommand extends $Command
  .classBuilder<
    DescribeJobsCommandInput,
    DescribeJobsCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "DescribeJobs", {})
  .n("DrsClient", "DescribeJobsCommand")
  .f(void 0, DescribeJobsResponseFilterSensitiveLog)
  .ser(se_DescribeJobsCommand)
  .de(de_DescribeJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobsRequest;
      output: DescribeJobsResponse;
    };
    sdk: {
      input: DescribeJobsCommandInput;
      output: DescribeJobsCommandOutput;
    };
  };
}
