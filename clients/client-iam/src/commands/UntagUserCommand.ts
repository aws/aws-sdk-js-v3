// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagUserRequest } from "../models/models_1";
import { de_UntagUserCommand, se_UntagUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagUserCommand}.
 */
export interface UntagUserCommandInput extends UntagUserRequest {}
/**
 * @public
 *
 * The output of {@link UntagUserCommand}.
 */
export interface UntagUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UntagUserRequest
 *   UserName: "STRING_VALUE", // required
 *   TagKeys: [ // tagKeyListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagUserCommandInput - {@link UntagUserCommandInput}
 * @returns {@link UntagUserCommandOutput}
 * @see {@link UntagUserCommandInput} for command's `input` shape.
 * @see {@link UntagUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To remove a tag from an IAM user
 * ```javascript
 * // The following example shows how to remove tags that are attached to a user named 'anika'.
 * const input = {
 *   TagKeys: [
 *     "Dept"
 *   ],
 *   UserName: "anika"
 * };
 * const command = new UntagUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UntagUserCommand extends $Command
  .classBuilder<
    UntagUserCommandInput,
    UntagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "UntagUser", {})
  .n("IAMClient", "UntagUserCommand")
  .f(void 0, void 0)
  .ser(se_UntagUserCommand)
  .de(de_UntagUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagUserRequest;
      output: {};
    };
    sdk: {
      input: UntagUserCommandInput;
      output: UntagUserCommandOutput;
    };
  };
}
