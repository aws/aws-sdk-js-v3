// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventRuleRequest, CreateEventRuleResponse } from "../models/models_0";
import { NotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NotificationsClient";
import { de_CreateEventRuleCommand, se_CreateEventRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventRuleCommand}.
 */
export interface CreateEventRuleCommandInput extends CreateEventRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventRuleCommand}.
 */
export interface CreateEventRuleCommandOutput extends CreateEventRuleResponse, __MetadataBearer {}

/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/notifications/latest/userguide/glossary.html"> <code>EventRule</code> </a> that is associated with a specified <code>NotificationConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsClient, CreateEventRuleCommand } from "@aws-sdk/client-notifications"; // ES Modules import
 * // const { NotificationsClient, CreateEventRuleCommand } = require("@aws-sdk/client-notifications"); // CommonJS import
 * // import type { NotificationsClientConfig } from "@aws-sdk/client-notifications";
 * const config = {}; // type is NotificationsClientConfig
 * const client = new NotificationsClient(config);
 * const input = { // CreateEventRuleRequest
 *   notificationConfigurationArn: "STRING_VALUE", // required
 *   source: "STRING_VALUE", // required
 *   eventType: "STRING_VALUE", // required
 *   eventPattern: "STRING_VALUE",
 *   regions: [ // Regions // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateEventRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventRuleResponse
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
 * @param CreateEventRuleCommandInput - {@link CreateEventRuleCommandInput}
 * @returns {@link CreateEventRuleCommandOutput}
 * @see {@link CreateEventRuleCommandInput} for command's `input` shape.
 * @see {@link CreateEventRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class CreateEventRuleCommand extends $Command
  .classBuilder<
    CreateEventRuleCommandInput,
    CreateEventRuleCommandOutput,
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
  .s("Notifications", "CreateEventRule", {})
  .n("NotificationsClient", "CreateEventRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventRuleCommand)
  .de(de_CreateEventRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventRuleRequest;
      output: CreateEventRuleResponse;
    };
    sdk: {
      input: CreateEventRuleCommandInput;
      output: CreateEventRuleCommandOutput;
    };
  };
}
