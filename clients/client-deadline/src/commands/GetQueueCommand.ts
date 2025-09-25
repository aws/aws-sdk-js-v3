// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueueRequest, GetQueueResponse } from "../models/models_0";
import { GetQueue } from "../schemas/schemas_10_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueCommand}.
 */
export interface GetQueueCommandInput extends GetQueueRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueCommand}.
 */
export interface GetQueueCommandOutput extends GetQueueResponse, __MetadataBearer {}

/**
 * <p>Gets a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 * };
 * const command = new GetQueueCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueResponse
 * //   queueId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   farmId: "STRING_VALUE", // required
 * //   status: "IDLE" || "SCHEDULING" || "SCHEDULING_BLOCKED", // required
 * //   defaultBudgetAction: "NONE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 * //   blockedReason: "NO_BUDGET_CONFIGURED" || "BUDGET_THRESHOLD_REACHED",
 * //   jobAttachmentSettings: { // JobAttachmentSettings
 * //     s3BucketName: "STRING_VALUE", // required
 * //     rootPrefix: "STRING_VALUE", // required
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   requiredFileSystemLocationNames: [ // RequiredFileSystemLocationNames
 * //     "STRING_VALUE",
 * //   ],
 * //   allowedStorageProfileIds: [ // AllowedStorageProfileIds
 * //     "STRING_VALUE",
 * //   ],
 * //   jobRunAsUser: { // JobRunAsUser
 * //     posix: { // PosixUser
 * //       user: "STRING_VALUE", // required
 * //       group: "STRING_VALUE", // required
 * //     },
 * //     windows: { // WindowsUser
 * //       user: "STRING_VALUE", // required
 * //       passwordArn: "STRING_VALUE", // required
 * //     },
 * //     runAs: "QUEUE_CONFIGURED_USER" || "WORKER_AGENT_USER", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueCommandInput - {@link GetQueueCommandInput}
 * @returns {@link GetQueueCommandOutput}
 * @see {@link GetQueueCommandInput} for command's `input` shape.
 * @see {@link GetQueueCommandOutput} for command's `response` shape.
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
export class GetQueueCommand extends $Command
  .classBuilder<
    GetQueueCommandInput,
    GetQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetQueue", {})
  .n("DeadlineClient", "GetQueueCommand")
  .sc(GetQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueRequest;
      output: GetQueueResponse;
    };
    sdk: {
      input: GetQueueCommandInput;
      output: GetQueueCommandOutput;
    };
  };
}
