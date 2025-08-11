// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueRequest, UpdateQueueRequestFilterSensitiveLog, UpdateQueueResponse } from "../models/models_1";
import { de_UpdateQueueCommand, se_UpdateQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandInput extends UpdateQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandOutput extends UpdateQueueResponse, __MetadataBearer {}

/**
 * <p>Updates a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateQueueRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   defaultBudgetAction: "NONE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS",
 *   jobAttachmentSettings: { // JobAttachmentSettings
 *     s3BucketName: "STRING_VALUE", // required
 *     rootPrefix: "STRING_VALUE", // required
 *   },
 *   roleArn: "STRING_VALUE",
 *   jobRunAsUser: { // JobRunAsUser
 *     posix: { // PosixUser
 *       user: "STRING_VALUE", // required
 *       group: "STRING_VALUE", // required
 *     },
 *     windows: { // WindowsUser
 *       user: "STRING_VALUE", // required
 *       passwordArn: "STRING_VALUE", // required
 *     },
 *     runAs: "QUEUE_CONFIGURED_USER" || "WORKER_AGENT_USER", // required
 *   },
 *   requiredFileSystemLocationNamesToAdd: [ // RequiredFileSystemLocationNames
 *     "STRING_VALUE",
 *   ],
 *   requiredFileSystemLocationNamesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   allowedStorageProfileIdsToAdd: [ // AllowedStorageProfileIds
 *     "STRING_VALUE",
 *   ],
 *   allowedStorageProfileIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueCommandInput - {@link UpdateQueueCommandInput}
 * @returns {@link UpdateQueueCommandOutput}
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateQueueCommand extends $Command
  .classBuilder<
    UpdateQueueCommandInput,
    UpdateQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateQueue", {})
  .n("DeadlineClient", "UpdateQueueCommand")
  .f(UpdateQueueRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateQueueCommand)
  .de(de_UpdateQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueCommandInput;
      output: UpdateQueueCommandOutput;
    };
  };
}
