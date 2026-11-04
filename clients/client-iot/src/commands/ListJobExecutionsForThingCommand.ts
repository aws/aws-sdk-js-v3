// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse } from "../models/models_1";
import { ListJobExecutionsForThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobExecutionsForThingCommand}.
 */
export interface ListJobExecutionsForThingCommandInput extends ListJobExecutionsForThingRequest {}
/**
 * @public
 *
 * The output of {@link ListJobExecutionsForThingCommand}.
 */
export interface ListJobExecutionsForThingCommandOutput extends ListJobExecutionsForThingResponse, __MetadataBearer {}

/**
 * Lists the job executions for the specified thing.
 *
 * Requires permission to access the [ListJobExecutionsForThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListJobExecutionsForThingRequest
 *   thingName: "STRING_VALUE", // required
 *   status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 *   namespaceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   jobId: "STRING_VALUE",
 * };
 * const command = new ListJobExecutionsForThingCommand(input);
 * const response = await client.send(command);
 * // { // ListJobExecutionsForThingResponse
 * //   executionSummaries: [ // JobExecutionSummaryForThingList
 * //     { // JobExecutionSummaryForThing
 * //       jobId: "STRING_VALUE",
 * //       jobExecutionSummary: { // JobExecutionSummary
 * //         status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //         queuedAt: new Date("TIMESTAMP"),
 * //         startedAt: new Date("TIMESTAMP"),
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         executionNumber: Number("long"),
 * //         retryAttempt: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobExecutionsForThingCommandInput - {@link ListJobExecutionsForThingCommandInput}
 * @returns {@link ListJobExecutionsForThingCommandOutput}
 * @see {@link ListJobExecutionsForThingCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListJobExecutionsForThingCommand extends command<ListJobExecutionsForThingCommandInput, ListJobExecutionsForThingCommandOutput>(
  _ep0,
  _mw0,
  "ListJobExecutionsForThing",
  ListJobExecutionsForThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobExecutionsForThingRequest;
      output: ListJobExecutionsForThingResponse;
    };
    sdk: {
      input: ListJobExecutionsForThingCommandInput;
      output: ListJobExecutionsForThingCommandOutput;
    };
  };
}
