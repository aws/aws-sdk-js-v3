// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecoveryPlanStepsRequest, ListRecoveryPlanStepsResponse } from "../models/models_0";
import { ListRecoveryPlanSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecoveryPlanStepsCommand}.
 */
export interface ListRecoveryPlanStepsCommandInput extends ListRecoveryPlanStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPlanStepsCommand}.
 */
export interface ListRecoveryPlanStepsCommandOutput extends ListRecoveryPlanStepsResponse, __MetadataBearer {}

/**
 * <p>Lists all steps in a Recovery Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListRecoveryPlanStepsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListRecoveryPlanStepsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListRecoveryPlanStepsRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPlanStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPlanStepsResponse
 * //   recoveryPlanSteps: [ // RecoveryPlanStepList // required
 * //     { // RecoveryPlanStep
 * //       recoveryPlanStepArn: "STRING_VALUE", // required
 * //       stepOrder: Number("int"), // required
 * //       stepName: "STRING_VALUE", // required
 * //       configuration: { // RecoveryPlanStepConfiguration Union: only one key present
 * //         serverStepConfiguration: { // ServerStepConfiguration
 * //           servers: [ // RecoveryPlanServers // required
 * //             { // RecoveryPlanServer
 * //               serverArn: "STRING_VALUE", // required
 * //               impactLevel: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         waitStepConfiguration: { // WaitStepConfiguration
 * //           waitDurationMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       createdAt: "STRING_VALUE", // required
 * //       updatedAt: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPlanStepsCommandInput - {@link ListRecoveryPlanStepsCommandInput}
 * @returns {@link ListRecoveryPlanStepsCommandOutput}
 * @see {@link ListRecoveryPlanStepsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPlanStepsCommandOutput} for command's `response` shape.
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
export class ListRecoveryPlanStepsCommand extends command<ListRecoveryPlanStepsCommandInput, ListRecoveryPlanStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecoveryPlanSteps",
  ListRecoveryPlanSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPlanStepsRequest;
      output: ListRecoveryPlanStepsResponse;
    };
    sdk: {
      input: ListRecoveryPlanStepsCommandInput;
      output: ListRecoveryPlanStepsCommandOutput;
    };
  };
}
