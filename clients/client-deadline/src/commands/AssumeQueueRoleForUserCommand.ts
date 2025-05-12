// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssumeQueueRoleForUserRequest,
  AssumeQueueRoleForUserResponse,
  AssumeQueueRoleForUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AssumeQueueRoleForUserCommand, se_AssumeQueueRoleForUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeQueueRoleForUserCommand}.
 */
export interface AssumeQueueRoleForUserCommandInput extends AssumeQueueRoleForUserRequest {}
/**
 * @public
 *
 * The output of {@link AssumeQueueRoleForUserCommand}.
 */
export interface AssumeQueueRoleForUserCommandOutput extends AssumeQueueRoleForUserResponse, __MetadataBearer {}

/**
 * <p>Allows a user to assume a role for a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssumeQueueRoleForUserCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssumeQueueRoleForUserCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // AssumeQueueRoleForUserRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 * };
 * const command = new AssumeQueueRoleForUserCommand(input);
 * const response = await client.send(command);
 * // { // AssumeQueueRoleForUserResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeQueueRoleForUserCommandInput - {@link AssumeQueueRoleForUserCommandInput}
 * @returns {@link AssumeQueueRoleForUserCommandOutput}
 * @see {@link AssumeQueueRoleForUserCommandInput} for command's `input` shape.
 * @see {@link AssumeQueueRoleForUserCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class AssumeQueueRoleForUserCommand extends $Command
  .classBuilder<
    AssumeQueueRoleForUserCommandInput,
    AssumeQueueRoleForUserCommandOutput,
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
  .s("Deadline", "AssumeQueueRoleForUser", {})
  .n("DeadlineClient", "AssumeQueueRoleForUserCommand")
  .f(void 0, AssumeQueueRoleForUserResponseFilterSensitiveLog)
  .ser(se_AssumeQueueRoleForUserCommand)
  .de(de_AssumeQueueRoleForUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeQueueRoleForUserRequest;
      output: AssumeQueueRoleForUserResponse;
    };
    sdk: {
      input: AssumeQueueRoleForUserCommandInput;
      output: AssumeQueueRoleForUserCommandOutput;
    };
  };
}
