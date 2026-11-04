// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCommandExecutionsRequest, ListCommandExecutionsResponse } from "../models/models_1";
import { ListCommandExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCommandExecutionsCommand}.
 */
export interface ListCommandExecutionsCommandInput extends ListCommandExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommandExecutionsCommand}.
 */
export interface ListCommandExecutionsCommandOutput extends ListCommandExecutionsResponse, __MetadataBearer {}

/**
 * List all command executions.
 *
 * > **Important:**
 * >
 * > - You must provide only the `startedTimeFilter` or the `completedTimeFilter` information. If you provide both time filters, the API will generate an error. You can use this information to retrieve a list of command executions within a specific timeframe.
 * > - You must provide only the `commandArn` or the `thingArn` information depending on whether you want to list executions for a specific command or an IoT thing. If you provide both fields, the API will generate an error.
 * >
 * > For more information about considerations for using this API, see [List command executions in your account (CLI)](https://docs.aws.amazon.com/iot/latest/developerguide/iot-remote-command-execution-start-monitor.html#iot-remote-command-execution-list-cli).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCommandExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCommandExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListCommandExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   namespace: "AWS-IoT" || "AWS-IoT-FleetWise",
 *   status: "CREATED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "REJECTED" || "TIMED_OUT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   startedTimeFilter: { // TimeFilter
 *     after: "STRING_VALUE",
 *     before: "STRING_VALUE",
 *   },
 *   completedTimeFilter: {
 *     after: "STRING_VALUE",
 *     before: "STRING_VALUE",
 *   },
 *   targetArn: "STRING_VALUE",
 *   commandArn: "STRING_VALUE",
 * };
 * const command = new ListCommandExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommandExecutionsResponse
 * //   commandExecutions: [ // CommandExecutionSummaryList
 * //     { // CommandExecutionSummary
 * //       commandArn: "STRING_VALUE",
 * //       executionId: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       status: "CREATED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "REJECTED" || "TIMED_OUT",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommandExecutionsCommandInput - {@link ListCommandExecutionsCommandInput}
 * @returns {@link ListCommandExecutionsCommandOutput}
 * @see {@link ListCommandExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListCommandExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListCommandExecutionsCommand extends command<ListCommandExecutionsCommandInput, ListCommandExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListCommandExecutions",
  ListCommandExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommandExecutionsRequest;
      output: ListCommandExecutionsResponse;
    };
    sdk: {
      input: ListCommandExecutionsCommandInput;
      output: ListCommandExecutionsCommandOutput;
    };
  };
}
