// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExecutionsInput, ListExecutionsOutput } from "../models/models_0";
import { ListExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsOutput, __MetadataBearer {}

/**
 * Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all [redriven](https://docs.aws.amazon.com/step-functions/latest/dg/redrive-executions.html) executions.
 *
 * You can also provide a state machine [alias](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) ARN or [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html) ARN to list the executions associated with a specific alias or version.
 *
 * Results are sorted by time, with the most recent execution first. Running executions are sorted by their `startDate` or `redriveDate`, and other executions are sorted by their `stopDate`.
 *
 * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.
 *
 * This API action is not supported by `EXPRESS` state machines. However, you may list `EXPRESS` children started by a map run using the `mapRunArn` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListExecutionsCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListExecutionsCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // ListExecutionsInput
 *   stateMachineArn: "STRING_VALUE",
 *   statusFilter: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "ABORTED" || "PENDING_REDRIVE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   mapRunArn: "STRING_VALUE",
 *   redriveFilter: "REDRIVEN" || "NOT_REDRIVEN",
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsOutput
 * //   executions: [ // ExecutionList // required
 * //     { // ExecutionListItem
 * //       executionArn: "STRING_VALUE", // required
 * //       stateMachineArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "ABORTED" || "PENDING_REDRIVE", // required
 * //       startDate: new Date("TIMESTAMP"), // required
 * //       stopDate: new Date("TIMESTAMP"),
 * //       mapRunArn: "STRING_VALUE",
 * //       itemCount: Number("int"),
 * //       stateMachineVersionArn: "STRING_VALUE",
 * //       stateMachineAliasArn: "STRING_VALUE",
 * //       redriveCount: Number("int"),
 * //       redriveDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidToken} (client fault)
 *
 * The provided token is not valid.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Could not find the referenced resource.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *
 * State machine type is not supported.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class ListExecutionsCommand extends command<ListExecutionsCommandInput, ListExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListExecutions",
  ListExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutionsInput;
      output: ListExecutionsOutput;
    };
    sdk: {
      input: ListExecutionsCommandInput;
      output: ListExecutionsCommandOutput;
    };
  };
}
