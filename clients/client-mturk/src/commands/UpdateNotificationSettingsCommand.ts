// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_UpdateNotificationSettingsCommand, se_UpdateNotificationSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotificationSettingsCommand}.
 */
export interface UpdateNotificationSettingsCommandInput extends UpdateNotificationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNotificationSettingsCommand}.
 */
export interface UpdateNotificationSettingsCommandOutput extends UpdateNotificationSettingsResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>UpdateNotificationSettings</code> operation creates, updates,
 *             disables or re-enables notifications for a HIT type.
 *             If you call the UpdateNotificationSettings operation for a HIT type that already has a
 *             notification specification, the operation replaces the old specification with a new one.
 *             You can call the UpdateNotificationSettings operation to enable or disable notifications
 *             for the HIT type, without having to modify the notification specification itself by providing
 *             updates to the Active status without specifying a new notification specification.
 *             To change the Active status of a HIT type's notifications,
 *             the HIT type must already have a notification specification,
 *             or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateNotificationSettingsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateNotificationSettingsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // UpdateNotificationSettingsRequest
 *   HITTypeId: "STRING_VALUE", // required
 *   Notification: { // NotificationSpecification
 *     Destination: "STRING_VALUE", // required
 *     Transport: "Email" || "SQS" || "SNS", // required
 *     Version: "STRING_VALUE", // required
 *     EventTypes: [ // EventTypeList // required
 *       "AssignmentAccepted" || "AssignmentAbandoned" || "AssignmentReturned" || "AssignmentSubmitted" || "AssignmentRejected" || "AssignmentApproved" || "HITCreated" || "HITExpired" || "HITReviewable" || "HITExtended" || "HITDisposed" || "Ping",
 *     ],
 *   },
 *   Active: true || false,
 * };
 * const command = new UpdateNotificationSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotificationSettingsCommandInput - {@link UpdateNotificationSettingsCommandInput}
 * @returns {@link UpdateNotificationSettingsCommandOutput}
 * @see {@link UpdateNotificationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationSettingsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class UpdateNotificationSettingsCommand extends $Command
  .classBuilder<
    UpdateNotificationSettingsCommandInput,
    UpdateNotificationSettingsCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "UpdateNotificationSettings", {})
  .n("MTurkClient", "UpdateNotificationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNotificationSettingsCommand)
  .de(de_UpdateNotificationSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotificationSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateNotificationSettingsCommandInput;
      output: UpdateNotificationSettingsCommandOutput;
    };
  };
}
