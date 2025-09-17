// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListReplaysRequest, ListReplaysResponse } from "../models/models_0";
import { de_ListReplaysCommand, se_ListReplaysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandInput extends ListReplaysRequest {}
/**
 * @public
 *
 * The output of {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandOutput extends ListReplaysResponse, __MetadataBearer {}

/**
 * <p>Lists your replays. You can either list all the replays or you can provide a prefix to
 *       match to the replay names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListReplaysCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListReplaysCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // ListReplaysRequest
 *   NamePrefix: "STRING_VALUE",
 *   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 *   EventSourceArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListReplaysCommand(input);
 * const response = await client.send(command);
 * // { // ListReplaysResponse
 * //   Replays: [ // ReplayList
 * //     { // Replay
 * //       ReplayName: "STRING_VALUE",
 * //       EventSourceArn: "STRING_VALUE",
 * //       State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       EventStartTime: new Date("TIMESTAMP"),
 * //       EventEndTime: new Date("TIMESTAMP"),
 * //       EventLastReplayedTime: new Date("TIMESTAMP"),
 * //       ReplayStartTime: new Date("TIMESTAMP"),
 * //       ReplayEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplaysCommandInput - {@link ListReplaysCommandInput}
 * @returns {@link ListReplaysCommandOutput}
 * @see {@link ListReplaysCommandInput} for command's `input` shape.
 * @see {@link ListReplaysCommandOutput} for command's `response` shape.
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
export class ListReplaysCommand extends $Command
  .classBuilder<
    ListReplaysCommandInput,
    ListReplaysCommandOutput,
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
  .s("AWSEvents", "ListReplays", {})
  .n("EventBridgeClient", "ListReplaysCommand")
  .f(void 0, void 0)
  .ser(se_ListReplaysCommand)
  .de(de_ListReplaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReplaysRequest;
      output: ListReplaysResponse;
    };
    sdk: {
      input: ListReplaysCommandInput;
      output: ListReplaysCommandOutput;
    };
  };
}
