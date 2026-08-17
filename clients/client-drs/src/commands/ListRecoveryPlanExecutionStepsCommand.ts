// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecoveryPlanExecutionStepsRequest, ListRecoveryPlanExecutionStepsResponse } from "../models/models_0";
import { ListRecoveryPlanExecutionSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecoveryPlanExecutionStepsCommand}.
 */
export interface ListRecoveryPlanExecutionStepsCommandInput extends ListRecoveryPlanExecutionStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPlanExecutionStepsCommand}.
 */
export interface ListRecoveryPlanExecutionStepsCommandOutput extends ListRecoveryPlanExecutionStepsResponse, __MetadataBearer {}

/**
 * <p>Lists all steps within a Recovery Plan execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListRecoveryPlanExecutionStepsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListRecoveryPlanExecutionStepsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListRecoveryPlanExecutionStepsRequest
 *   recoveryPlanExecutionArn: "STRING_VALUE", // required
 *   filter: { // ListRecoveryPlanExecutionStepsFilter
 *     status: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPlanExecutionStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPlanExecutionStepsResponse
 * //   recoveryPlanExecutionSteps: [ // RecoveryPlanExecutionStepSummaryList // required
 * //     { // RecoveryPlanExecutionStepSummary
 * //       recoveryPlanExecutionStepArn: "STRING_VALUE", // required
 * //       stepName: "STRING_VALUE", // required
 * //       stepIndex: Number("int"), // required
 * //       status: "STRING_VALUE", // required
 * //       configuration: { // RecoveryPlanExecutionStepConfiguration Union: only one key present
 * //         executionServerStepConfiguration: { // ExecutionServerStepConfiguration
 * //           servers: [ // RecoveryPlanExecutionServers // required
 * //             { // RecoveryPlanExecutionServer
 * //               serverArn: "STRING_VALUE", // required
 * //               impactLevel: "STRING_VALUE",
 * //               jobID: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         waitStepConfiguration: { // WaitStepConfiguration
 * //           waitDurationMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       errorDetail: { // ErrorDetail
 * //         message: "STRING_VALUE", // required
 * //         code: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPlanExecutionStepsCommandInput - {@link ListRecoveryPlanExecutionStepsCommandInput}
 * @returns {@link ListRecoveryPlanExecutionStepsCommandOutput}
 * @see {@link ListRecoveryPlanExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPlanExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
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
export class ListRecoveryPlanExecutionStepsCommand extends command<ListRecoveryPlanExecutionStepsCommandInput, ListRecoveryPlanExecutionStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecoveryPlanExecutionSteps",
  ListRecoveryPlanExecutionSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPlanExecutionStepsRequest;
      output: ListRecoveryPlanExecutionStepsResponse;
    };
    sdk: {
      input: ListRecoveryPlanExecutionStepsCommandInput;
      output: ListRecoveryPlanExecutionStepsCommandOutput;
    };
  };
}
