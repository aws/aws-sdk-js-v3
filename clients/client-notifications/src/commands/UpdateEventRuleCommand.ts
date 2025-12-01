// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateEventRuleRequest, UpdateEventRuleResponse } from "../models/models_0";
import type { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { UpdateEventRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventRuleCommand}.
 */
export interface UpdateEventRuleCommandInput extends UpdateEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventRuleCommand}.
 */
export interface UpdateEventRuleCommandOutput extends UpdateEventRuleResponse, __MetadataBearer {}

/**
 * <p>Updates an existing <code>EventRule</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, UpdateEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, UpdateEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // UpdateEventRuleRequest
 *   arn: "STRING_VALUE", // required
 *   eventPattern: "STRING_VALUE",
 *   regions: [ // Regions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventRuleResponse
 * //   arn: "STRING_VALUE", // required
 * //   notificationConfigurationArn: "STRING_VALUE", // required
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
 * @param UpdateEventRuleCommandInput - {@link UpdateEventRuleCommandInput}
 * @returns {@link UpdateEventRuleCommandOutput}
 * @see {@link UpdateEventRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateEventRuleCommandOutput} for command's `response` shape.
 * @see {@link NotificationsClientResolvedConfig | config} for NotificationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class UpdateEventRuleCommand extends $Command
  .classBuilder<
    UpdateEventRuleCommandInput,
    UpdateEventRuleCommandOutput,
    NotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Notifications", "UpdateEventRule", {})
  .n("NotificationsClient", "UpdateEventRuleCommand")
  .sc(UpdateEventRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventRuleRequest;
      output: UpdateEventRuleResponse;
    };
    sdk: {
      input: UpdateEventRuleCommandInput;
      output: UpdateEventRuleCommandOutput;
    };
  };
}
