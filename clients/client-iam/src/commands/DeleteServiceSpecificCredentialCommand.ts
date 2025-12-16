// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DeleteServiceSpecificCredentialRequest } from "../models/models_0";
import { DeleteServiceSpecificCredential$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceSpecificCredentialCommand}.
 */
export interface DeleteServiceSpecificCredentialCommandInput extends DeleteServiceSpecificCredentialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceSpecificCredentialCommand}.
 */
export interface DeleteServiceSpecificCredentialCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified service-specific credential.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceSpecificCredentialCommandInput - {@link DeleteServiceSpecificCredentialCommandInput}
 * @returns {@link DeleteServiceSpecificCredentialCommandOutput}
 * @see {@link DeleteServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class DeleteServiceSpecificCredentialCommand extends $Command
  .classBuilder<
    DeleteServiceSpecificCredentialCommandInput,
    DeleteServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteServiceSpecificCredential", {})
  .n("IAMClient", "DeleteServiceSpecificCredentialCommand")
  .sc(DeleteServiceSpecificCredential$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceSpecificCredentialRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceSpecificCredentialCommandInput;
      output: DeleteServiceSpecificCredentialCommandOutput;
    };
  };
}
