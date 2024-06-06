// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
import { de_ListEventSourcesCommand, se_ListEventSourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandOutput extends ListEventSourcesResponse, __MetadataBearer {}

/**
 * <p>You can use this to see all the partner event sources that have been shared with your
 *         Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventSourcesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventSourcesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListEventSourcesRequest
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListEventSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSourcesResponse
 * //   EventSources: [ // EventSourceList
 * //     { // EventSource
 * //       Arn: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       State: "PENDING" || "ACTIVE" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventSourcesCommandInput - {@link ListEventSourcesCommandInput}
 * @returns {@link ListEventSourcesCommandOutput}
 * @see {@link ListEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class ListEventSourcesCommand extends $Command
  .classBuilder<
    ListEventSourcesCommandInput,
    ListEventSourcesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListEventSources", {})
  .n("EventBridgeClient", "ListEventSourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListEventSourcesCommand)
  .de(de_ListEventSourcesCommand)
  .build() {}
