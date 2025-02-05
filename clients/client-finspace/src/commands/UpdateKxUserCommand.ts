// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxUserRequest, UpdateKxUserResponse } from "../models/models_0";
import { de_UpdateKxUserCommand, se_UpdateKxUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxUserCommand}.
 */
export interface UpdateKxUserCommandInput extends UpdateKxUserRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxUserCommand}.
 */
export interface UpdateKxUserCommandOutput extends UpdateKxUserResponse, __MetadataBearer {}

/**
 * <p>Updates the user details. You can only update the IAM role associated with a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxUserCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxUserCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxUserRequest
 *   environmentId: "STRING_VALUE", // required
 *   userName: "STRING_VALUE", // required
 *   iamRole: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateKxUserCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxUserResponse
 * //   userName: "STRING_VALUE",
 * //   userArn: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   iamRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKxUserCommandInput - {@link UpdateKxUserCommandInput}
 * @returns {@link UpdateKxUserCommandOutput}
 * @see {@link UpdateKxUserCommandInput} for command's `input` shape.
 * @see {@link UpdateKxUserCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class UpdateKxUserCommand extends $Command
  .classBuilder<
    UpdateKxUserCommandInput,
    UpdateKxUserCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "UpdateKxUser", {})
  .n("FinspaceClient", "UpdateKxUserCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKxUserCommand)
  .de(de_UpdateKxUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxUserRequest;
      output: UpdateKxUserResponse;
    };
    sdk: {
      input: UpdateKxUserCommandInput;
      output: UpdateKxUserCommandOutput;
    };
  };
}
