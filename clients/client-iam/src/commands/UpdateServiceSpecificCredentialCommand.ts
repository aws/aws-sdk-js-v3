// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateServiceSpecificCredentialRequest } from "../models/models_1";
import { UpdateServiceSpecificCredential } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSpecificCredentialCommand}.
 */
export interface UpdateServiceSpecificCredentialCommandInput extends UpdateServiceSpecificCredentialRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSpecificCredentialCommand}.
 */
export interface UpdateServiceSpecificCredentialCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the status of a service-specific credential to <code>Active</code> or
 *                 <code>Inactive</code>. Service-specific credentials that are inactive cannot be used
 *             for authentication to the service. This operation can be used to disable a user's
 *             service-specific credential as part of a credential rotation work flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive" || "Expired", // required
 * };
 * const command = new UpdateServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServiceSpecificCredentialCommandInput - {@link UpdateServiceSpecificCredentialCommandInput}
 * @returns {@link UpdateServiceSpecificCredentialCommandOutput}
 * @see {@link UpdateServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSpecificCredentialCommandOutput} for command's `response` shape.
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
export class UpdateServiceSpecificCredentialCommand extends $Command
  .classBuilder<
    UpdateServiceSpecificCredentialCommandInput,
    UpdateServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateServiceSpecificCredential", {})
  .n("IAMClient", "UpdateServiceSpecificCredentialCommand")
  .sc(UpdateServiceSpecificCredential)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceSpecificCredentialRequest;
      output: {};
    };
    sdk: {
      input: UpdateServiceSpecificCredentialCommandInput;
      output: UpdateServiceSpecificCredentialCommandOutput;
    };
  };
}
