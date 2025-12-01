// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DeleteOpenIDConnectProviderRequest } from "../models/models_0";
import { DeleteOpenIDConnectProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOpenIDConnectProviderCommand}.
 */
export interface DeleteOpenIDConnectProviderCommandInput extends DeleteOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOpenIDConnectProviderCommand}.
 */
export interface DeleteOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p>
 *          <p>Deleting an IAM OIDC provider resource does not update any roles that reference the
 *             provider as a principal in their trust policies. Any attempt to assume a role that
 *             references a deleted provider fails.</p>
 *          <p>This operation is idempotent; it does not fail or return an error if you call the
 *             operation for a provider that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteOpenIDConnectProviderRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpenIDConnectProviderCommandInput - {@link DeleteOpenIDConnectProviderCommandInput}
 * @returns {@link DeleteOpenIDConnectProviderCommandOutput}
 * @see {@link DeleteOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
 * @public
 */
export class DeleteOpenIDConnectProviderCommand extends $Command
  .classBuilder<
    DeleteOpenIDConnectProviderCommandInput,
    DeleteOpenIDConnectProviderCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteOpenIDConnectProvider", {})
  .n("IAMClient", "DeleteOpenIDConnectProviderCommand")
  .sc(DeleteOpenIDConnectProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOpenIDConnectProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteOpenIDConnectProviderCommandInput;
      output: DeleteOpenIDConnectProviderCommandOutput;
    };
  };
}
