// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccountAliasRequest } from "../models/models_0";
import { de_DeleteAccountAliasCommand, se_DeleteAccountAliasCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountAliasCommand}.
 */
export interface DeleteAccountAliasCommandInput extends DeleteAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountAliasCommand}.
 */
export interface DeleteAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services
 *             account alias, see <a href="https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html">Creating, deleting, and
 *                 listing an Amazon Web Services account alias</a> in the <i>Amazon Web Services Sign-In User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteAccountAliasRequest
 *   AccountAlias: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountAliasCommandInput - {@link DeleteAccountAliasCommandInput}
 * @returns {@link DeleteAccountAliasCommandOutput}
 * @see {@link DeleteAccountAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To delete an account alias
 * ```javascript
 * // The following command removes the alias mycompany from the current AWS account:
 * const input = {
 *   AccountAlias: "mycompany"
 * };
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccountAliasCommand extends $Command
  .classBuilder<
    DeleteAccountAliasCommandInput,
    DeleteAccountAliasCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeleteAccountAlias", {})
  .n("IAMClient", "DeleteAccountAliasCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountAliasCommand)
  .de(de_DeleteAccountAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountAliasCommandInput;
      output: DeleteAccountAliasCommandOutput;
    };
  };
}
