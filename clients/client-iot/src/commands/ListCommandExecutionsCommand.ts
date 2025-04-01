// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCommandExecutionsRequest, ListCommandExecutionsResponse } from "../models/models_1";
import { de_ListCommandExecutionsCommand, se_ListCommandExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List all command executions.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>You must provide only the <code>startedTimeFilter</code> or
 *                     the <code>completedTimeFilter</code> information. If you provide
 *                     both time filters, the API will generate an error. You can use
 *                     this information to retrieve a list of command executions
 *                     within a specific timeframe.</p>
 *                </li>
 *                <li>
 *                   <p>You must provide only the <code>commandArn</code> or
 *                     the <code>thingArn</code> information depending on whether you want
 *                     to list executions for a specific command or an IoT thing. If you provide
 *                     both fields, the API will generate an error.</p>
 *                </li>
 *             </ul>
 *             <p>For more information about considerations for using this API, see
 *                 <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-remote-command-execution-start-monitor.html#iot-remote-command-execution-list-cli">List
 *                 command executions in your account (CLI)</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCommandExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCommandExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListCommandExecutionsCommand extends $Command
  .classBuilder<
    ListCommandExecutionsCommandInput,
    ListCommandExecutionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListCommandExecutions", {})
  .n("IoTClient", "ListCommandExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCommandExecutionsCommand)
  .de(de_ListCommandExecutionsCommand)
  .build() {
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
