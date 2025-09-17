// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventBusesRequest, ListEventBusesResponse } from "../models/models_0";
import { de_ListEventBusesCommand, se_ListEventBusesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandOutput extends ListEventBusesResponse, __MetadataBearer {}

/**
 * <p>Lists all the event buses in your account, including the default event bus, custom event
 *       buses, and partner event buses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventBusesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventBusesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // ListEventBusesRequest
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventBusesResponse
 * //   EventBuses: [ // EventBusList
 * //     { // EventBus
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Policy: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventBusesCommandInput - {@link ListEventBusesCommandInput}
 * @returns {@link ListEventBusesCommandOutput}
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class ListEventBusesCommand extends $Command
  .classBuilder<
    ListEventBusesCommandInput,
    ListEventBusesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListEventBuses", {})
  .n("EventBridgeClient", "ListEventBusesCommand")
  .f(void 0, void 0)
  .ser(se_ListEventBusesCommand)
  .de(de_ListEventBusesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventBusesRequest;
      output: ListEventBusesResponse;
    };
    sdk: {
      input: ListEventBusesCommandInput;
      output: ListEventBusesCommandOutput;
    };
  };
}
