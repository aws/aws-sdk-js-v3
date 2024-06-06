// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateUserProfileRequest,
  UpdateUserProfileRequestFilterSensitiveLog,
  UpdateUserProfileResult,
  UpdateUserProfileResultFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateUserProfileCommand, se_UpdateUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandInput extends UpdateUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandOutput extends UpdateUserProfileResult, __MetadataBearer {}

/**
 * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
 *       Information in the user profile is displayed wherever the user's information appears to other
 *       users in AWS CodeStar. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // UpdateUserProfileRequest
 *   userArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   emailAddress: "STRING_VALUE",
 *   sshPublicKey: "STRING_VALUE",
 * };
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserProfileResult
 * //   userArn: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   emailAddress: "STRING_VALUE",
 * //   sshPublicKey: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateUserProfileCommandInput - {@link UpdateUserProfileCommandInput}
 * @returns {@link UpdateUserProfileCommandOutput}
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link UserProfileNotFoundException} (client fault)
 *  <p>The user profile was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class UpdateUserProfileCommand extends $Command
  .classBuilder<
    UpdateUserProfileCommandInput,
    UpdateUserProfileCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "UpdateUserProfile", {})
  .n("CodeStarClient", "UpdateUserProfileCommand")
  .f(UpdateUserProfileRequestFilterSensitiveLog, UpdateUserProfileResultFilterSensitiveLog)
  .ser(se_UpdateUserProfileCommand)
  .de(de_UpdateUserProfileCommand)
  .build() {}
