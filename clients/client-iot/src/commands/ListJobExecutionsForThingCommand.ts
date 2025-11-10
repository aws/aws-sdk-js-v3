// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse } from "../models/models_2";
import { ListJobExecutionsForThing } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the job executions for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
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
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListJobExecutionsForThingCommand extends $Command
  .classBuilder<
    ListJobExecutionsForThingCommandInput,
    ListJobExecutionsForThingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListJobExecutionsForThing", {})
  .n("IoTClient", "ListJobExecutionsForThingCommand")
  .sc(ListJobExecutionsForThing)
  .build() {
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
