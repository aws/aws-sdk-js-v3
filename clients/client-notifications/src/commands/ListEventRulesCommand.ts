// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventRulesRequest, ListEventRulesResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { ListEventRules } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventRulesCommand}.
 */
export interface ListEventRulesCommandInput extends ListEventRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventRulesCommand}.
 */
export interface ListEventRulesCommandOutput extends ListEventRulesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>EventRules</code> according to specified filters, in reverse chronological order (newest first).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, ListEventRulesCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, ListEventRulesCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // ListEventRulesRequest
 *   notificationConfigurationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEventRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventRulesResponse
 * //   nextToken: "STRING_VALUE",
 * //   eventRules: [ // EventRules // required
 * //     { // EventRuleStructure
 * //       arn: "STRING_VALUE", // required
 * //       notificationConfigurationArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       source: "STRING_VALUE", // required
 * //       eventType: "STRING_VALUE", // required
 * //       eventPattern: "STRING_VALUE", // required
 * //       regions: [ // Regions // required
 * //         "STRING_VALUE",
 * //       ],
 * //       managedRules: [ // ManagedRuleArns // required
 * //         "STRING_VALUE",
 * //       ],
 * //       statusSummaryByRegion: { // StatusSummaryByRegion // required
 * //         "<keys>": { // EventRuleStatusSummary
 * //           status: "STRING_VALUE", // required
 * //           reason: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventRulesCommandInput - {@link ListEventRulesCommandInput}
 * @returns {@link ListEventRulesCommandOutput}
 * @see {@link ListEventRulesCommandInput} for command's `input` shape.
 * @see {@link ListEventRulesCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception is thrown when the notification event fails validation.</p>
 *
 * @throws {@link NotificationsServiceException}
 * <p>Base exception class for all service exceptions from Notifications service.</p>
 *
 *
 * @public
 */
export class ListEventRulesCommand extends $Command
  .classBuilder<
    ListEventRulesCommandInput,
    ListEventRulesCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "ListEventRules", {})
  .n("NotificationsClient", "ListEventRulesCommand")
  .sc(ListEventRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventRulesRequest;
      output: ListEventRulesResponse;
    };
    sdk: {
      input: ListEventRulesCommandInput;
      output: ListEventRulesCommandOutput;
    };
  };
}
