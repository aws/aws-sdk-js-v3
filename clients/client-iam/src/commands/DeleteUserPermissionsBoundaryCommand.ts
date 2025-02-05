// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPermissionsBoundaryRequest } from "../models/models_0";
import {
  de_DeleteUserPermissionsBoundaryCommand,
  se_DeleteUserPermissionsBoundaryCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPermissionsBoundaryCommand}.
 */
export interface DeleteUserPermissionsBoundaryCommandInput extends DeleteUserPermissionsBoundaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPermissionsBoundaryCommand}.
 */
export interface DeleteUserPermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the permissions boundary for the specified IAM user.</p>
 *          <important>
 *             <p>Deleting the permissions boundary for a user might increase its permissions by
 *                 allowing the user to perform all the actions granted in its permissions policies.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // DeleteUserPermissionsBoundaryRequest
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPermissionsBoundaryCommandInput - {@link DeleteUserPermissionsBoundaryCommandInput}
 * @returns {@link DeleteUserPermissionsBoundaryCommandOutput}
 * @see {@link DeleteUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @public
 */
export class DeleteUserPermissionsBoundaryCommand extends $Command
  .classBuilder<
    DeleteUserPermissionsBoundaryCommandInput,
    DeleteUserPermissionsBoundaryCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeleteUserPermissionsBoundary", {})
  .n("IAMClient", "DeleteUserPermissionsBoundaryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserPermissionsBoundaryCommand)
  .de(de_DeleteUserPermissionsBoundaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPermissionsBoundaryCommandInput;
      output: DeleteUserPermissionsBoundaryCommandOutput;
    };
  };
}
