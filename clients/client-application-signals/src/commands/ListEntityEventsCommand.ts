// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntityEventsInput, ListEntityEventsOutput } from "../models/models_0";
import { ListEntityEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntityEventsCommand}.
 */
export interface ListEntityEventsCommandInput extends ListEntityEventsInput {}
/**
 * @public
 *
 * The output of {@link ListEntityEventsCommand}.
 */
export interface ListEntityEventsCommandOutput extends ListEntityEventsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of change events for a specific entity, such as deployments, configuration changes, or other state-changing activities. This operation helps track the history of changes that may have affected service performance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListEntityEventsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListEntityEventsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListEntityEventsInput
 *   Entity: { // Attributes // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEntityEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityEventsOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ChangeEvents: [ // ChangeEvents // required
 * //     { // ChangeEvent
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       AccountId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //       Entity: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ChangeEventType: "DEPLOYMENT" || "CONFIGURATION", // required
 * //       EventId: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE",
 * //       EventName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntityEventsCommandInput - {@link ListEntityEventsCommandInput}
 * @returns {@link ListEntityEventsCommandOutput}
 * @see {@link ListEntityEventsCommandInput} for command's `input` shape.
 * @see {@link ListEntityEventsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class ListEntityEventsCommand extends $Command
  .classBuilder<
    ListEntityEventsCommandInput,
    ListEntityEventsCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListEntityEvents", {})
  .n("ApplicationSignalsClient", "ListEntityEventsCommand")
  .sc(ListEntityEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntityEventsInput;
      output: ListEntityEventsOutput;
    };
    sdk: {
      input: ListEntityEventsCommandInput;
      output: ListEntityEventsCommandOutput;
    };
  };
}
