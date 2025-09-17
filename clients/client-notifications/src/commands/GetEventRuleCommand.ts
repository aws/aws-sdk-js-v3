// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEventRuleRequest, GetEventRuleResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_GetEventRuleCommand, se_GetEventRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventRuleCommand}.
 */
export interface GetEventRuleCommandInput extends GetEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetEventRuleCommand}.
 */
export interface GetEventRuleCommandOutput extends GetEventRuleResponse, __MetadataBearer {}

/**
 * <p>Returns a specified <code>EventRule</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, GetEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, GetEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // GetEventRuleRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetEventRuleResponse
 * //   arn: "STRING_VALUE", // required
 * //   notificationConfigurationArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   source: "STRING_VALUE", // required
 * //   eventType: "STRING_VALUE", // required
 * //   eventPattern: "STRING_VALUE", // required
 * //   regions: [ // Regions // required
 * //     "STRING_VALUE",
 * //   ],
 * //   managedRules: [ // ManagedRuleArns // required
 * //     "STRING_VALUE",
 * //   ],
 * //   statusSummaryByRegion: { // StatusSummaryByRegion // required
 * //     "<keys>": { // EventRuleStatusSummary
 * //       status: "STRING_VALUE", // required
 * //       reason: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventRuleCommandInput - {@link GetEventRuleCommandInput}
 * @returns {@link GetEventRuleCommandOutput}
 * @see {@link GetEventRuleCommandInput} for command's `input` shape.
 * @see {@link GetEventRuleCommandOutput} for command's `response` shape.
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
export class GetEventRuleCommand extends $Command
  .classBuilder<
    GetEventRuleCommandInput,
    GetEventRuleCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Notifications", "GetEventRule", {})
  .n("NotificationsClient", "GetEventRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetEventRuleCommand)
  .de(de_GetEventRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventRuleRequest;
      output: GetEventRuleResponse;
    };
    sdk: {
      input: GetEventRuleCommandInput;
      output: GetEventRuleCommandOutput;
    };
  };
}
