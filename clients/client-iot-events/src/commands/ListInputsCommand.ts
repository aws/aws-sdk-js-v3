// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListInputsRequest, ListInputsResponse } from "../models/models_0";
import { ListInputs } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInputsCommand}.
 */
export interface ListInputsCommandInput extends ListInputsRequest {}
/**
 * @public
 *
 * The output of {@link ListInputsCommand}.
 */
export interface ListInputsCommandOutput extends ListInputsResponse, __MetadataBearer {}

/**
 * <p>Lists the inputs you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // ListInputsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListInputsCommand(input);
 * const response = await client.send(command);
 * // { // ListInputsResponse
 * //   inputSummaries: [ // InputSummaries
 * //     { // InputSummary
 * //       inputName: "STRING_VALUE",
 * //       inputDescription: "STRING_VALUE",
 * //       inputArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputsCommandInput - {@link ListInputsCommandInput}
 * @returns {@link ListInputsCommandOutput}
 * @see {@link ListInputsCommandInput} for command's `input` shape.
 * @see {@link ListInputsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class ListInputsCommand extends $Command
  .classBuilder<
    ListInputsCommandInput,
    ListInputsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "ListInputs", {})
  .n("IoTEventsClient", "ListInputsCommand")
  .sc(ListInputs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInputsRequest;
      output: ListInputsResponse;
    };
    sdk: {
      input: ListInputsCommandInput;
      output: ListInputsCommandOutput;
    };
  };
}
