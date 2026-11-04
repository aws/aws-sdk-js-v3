// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecoveryPlanExecutionsRequest, ListRecoveryPlanExecutionsResponse } from "../models/models_0";
import { ListRecoveryPlanExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecoveryPlanExecutionsCommand}.
 */
export interface ListRecoveryPlanExecutionsCommandInput extends ListRecoveryPlanExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPlanExecutionsCommand}.
 */
export interface ListRecoveryPlanExecutionsCommandOutput extends ListRecoveryPlanExecutionsResponse, __MetadataBearer {}

/**
 * Lists executions of Recovery Plans, optionally filtered by plan or status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListRecoveryPlanExecutionsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListRecoveryPlanExecutionsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListRecoveryPlanExecutionsRequest
 *   recoveryPlanArn: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPlanExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPlanExecutionsResponse
 * //   recoveryPlanExecutions: [ // RecoveryPlanExecutionSummaryList // required
 * //     { // RecoveryPlanExecutionSummary
 * //       recoveryPlanExecutionArn: "STRING_VALUE", // required
 * //       recoveryPlanArn: "STRING_VALUE", // required
 * //       mode: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       startedAt: "STRING_VALUE", // required
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
 * @param ListRecoveryPlanExecutionsCommandInput - {@link ListRecoveryPlanExecutionsCommandInput}
 * @returns {@link ListRecoveryPlanExecutionsCommandOutput}
 * @see {@link ListRecoveryPlanExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPlanExecutionsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class ListRecoveryPlanExecutionsCommand extends command<ListRecoveryPlanExecutionsCommandInput, ListRecoveryPlanExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecoveryPlanExecutions",
  ListRecoveryPlanExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPlanExecutionsRequest;
      output: ListRecoveryPlanExecutionsResponse;
    };
    sdk: {
      input: ListRecoveryPlanExecutionsCommandInput;
      output: ListRecoveryPlanExecutionsCommandOutput;
    };
  };
}
