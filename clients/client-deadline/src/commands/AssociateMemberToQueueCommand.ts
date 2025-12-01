// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateMemberToQueueRequest, AssociateMemberToQueueResponse } from "../models/models_0";
import { AssociateMemberToQueue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateMemberToQueueCommand}.
 */
export interface AssociateMemberToQueueCommandInput extends AssociateMemberToQueueRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberToQueueCommand}.
 */
export interface AssociateMemberToQueueCommandOutput extends AssociateMemberToQueueResponse, __MetadataBearer {}

/**
 * <p>Assigns a queue membership level to a member</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssociateMemberToQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssociateMemberToQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // AssociateMemberToQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 *   principalType: "USER" || "GROUP", // required
 *   identityStoreId: "STRING_VALUE", // required
 *   membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * };
 * const command = new AssociateMemberToQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateMemberToQueueCommandInput - {@link AssociateMemberToQueueCommandInput}
 * @returns {@link AssociateMemberToQueueCommandOutput}
 * @see {@link AssociateMemberToQueueCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToQueueCommandOutput} for command's `response` shape.
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
export class AssociateMemberToQueueCommand extends $Command
  .classBuilder<
    AssociateMemberToQueueCommandInput,
    AssociateMemberToQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "AssociateMemberToQueue", {})
  .n("DeadlineClient", "AssociateMemberToQueueCommand")
  .sc(AssociateMemberToQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMemberToQueueRequest;
      output: {};
    };
    sdk: {
      input: AssociateMemberToQueueCommandInput;
      output: AssociateMemberToQueueCommandOutput;
    };
  };
}
