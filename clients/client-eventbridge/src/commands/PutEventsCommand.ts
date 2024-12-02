// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
import { de_PutEventsCommand, se_PutEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {}

/**
 * <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p>
 *          <p>The maximum size for a PutEvents event entry is 256 KB. Entry size is calculated including
 *       the event and any necessary characters and keys of the JSON representation of the event. To
 *       learn more, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-putevent-size.html">Calculating PutEvents event entry
 *         size</a> in the <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>
 *          </p>
 *          <p>PutEvents accepts the data in JSON format. For the JSON number (integer) data type, the
 *       constraints are: a minimum value of -9,223,372,036,854,775,808 and a maximum value of
 *       9,223,372,036,854,775,807.</p>
 *          <note>
 *             <p>PutEvents will only process nested JSON up to 1000 levels deep.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutEventsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutEventsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // PutEventsRequest
 *   Entries: [ // PutEventsRequestEntryList // required
 *     { // PutEventsRequestEntry
 *       Time: new Date("TIMESTAMP"),
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventResourceList
 *         "STRING_VALUE",
 *       ],
 *       DetailType: "STRING_VALUE",
 *       Detail: "STRING_VALUE",
 *       EventBusName: "STRING_VALUE",
 *       TraceHeader: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointId: "STRING_VALUE",
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutEventsResultEntryList
 * //     { // PutEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class PutEventsCommand extends $Command
  .classBuilder<
    PutEventsCommandInput,
    PutEventsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    EndpointId: { type: "contextParams", name: "EndpointId" },
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "PutEvents", {})
  .n("EventBridgeClient", "PutEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutEventsCommand)
  .de(de_PutEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsRequest;
      output: PutEventsResponse;
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}
