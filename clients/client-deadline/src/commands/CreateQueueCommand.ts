// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_0";
import { CreateQueue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResponse, __MetadataBearer {}

/**
 * <p>Creates a queue to coordinate the order in which jobs run on a farm. A queue can also
 *          specify where to pull resources and indicate where to output completed jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateQueueRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
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
 *   requiredFileSystemLocationNames: [ // RequiredFileSystemLocationNames
 *     "STRING_VALUE",
 *   ],
 *   allowedStorageProfileIds: [ // AllowedStorageProfileIds
 *     "STRING_VALUE",
 *   ],
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResponse
 * //   queueId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
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
export class CreateQueueCommand extends $Command
  .classBuilder<
    CreateQueueCommandInput,
    CreateQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "CreateQueue", {})
  .n("DeadlineClient", "CreateQueueCommand")
  .sc(CreateQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueRequest;
      output: CreateQueueResponse;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
