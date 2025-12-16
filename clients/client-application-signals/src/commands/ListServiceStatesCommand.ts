// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceStatesInput, ListServiceStatesOutput } from "../models/models_0";
import { ListServiceStates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceStatesCommand}.
 */
export interface ListServiceStatesCommandInput extends ListServiceStatesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceStatesCommand}.
 */
export interface ListServiceStatesCommandOutput extends ListServiceStatesOutput, __MetadataBearer {}

/**
 * <p>Returns information about the last deployment and other change states of services. This API provides visibility into recent changes that may have affected service performance, helping with troubleshooting and change correlation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListServiceStatesCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListServiceStatesCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListServiceStatesInput
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IncludeLinkedAccounts: true || false,
 *   AwsAccountId: "STRING_VALUE",
 *   AttributeFilters: [ // AttributeFilters
 *     { // AttributeFilter
 *       AttributeFilterName: "STRING_VALUE", // required
 *       AttributeFilterValues: [ // AttributeFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListServiceStatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceStatesOutput
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"), // required
 * //   ServiceStates: [ // ServiceStates // required
 * //     { // ServiceState
 * //       AttributeFilters: [ // AttributeFilters
 * //         { // AttributeFilter
 * //           AttributeFilterName: "STRING_VALUE", // required
 * //           AttributeFilterValues: [ // AttributeFilterValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       Service: { // Attributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LatestChangeEvents: [ // LatestChangeEvents // required
 * //         { // ChangeEvent
 * //           Timestamp: new Date("TIMESTAMP"), // required
 * //           AccountId: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE", // required
 * //           Entity: { // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ChangeEventType: "DEPLOYMENT" || "CONFIGURATION", // required
 * //           EventId: "STRING_VALUE", // required
 * //           UserName: "STRING_VALUE",
 * //           EventName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceStatesCommandInput - {@link ListServiceStatesCommandInput}
 * @returns {@link ListServiceStatesCommandOutput}
 * @see {@link ListServiceStatesCommandInput} for command's `input` shape.
 * @see {@link ListServiceStatesCommandOutput} for command's `response` shape.
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
export class ListServiceStatesCommand extends $Command
  .classBuilder<
    ListServiceStatesCommandInput,
    ListServiceStatesCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListServiceStates", {})
  .n("ApplicationSignalsClient", "ListServiceStatesCommand")
  .sc(ListServiceStates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceStatesInput;
      output: ListServiceStatesOutput;
    };
    sdk: {
      input: ListServiceStatesCommandInput;
      output: ListServiceStatesCommandOutput;
    };
  };
}
