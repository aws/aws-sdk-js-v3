// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentityProviderRequest, DeleteIdentityProviderResponse } from "../models/models_0";
import { DeleteIdentityProvider } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandInput extends DeleteIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityProviderCommand}.
 */
export interface DeleteIdentityProviderCommandOutput extends DeleteIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Deletes the identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteIdentityProviderCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteIdentityProviderCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteIdentityProviderRequest
 *   identityProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityProviderCommandInput - {@link DeleteIdentityProviderCommandInput}
 * @returns {@link DeleteIdentityProviderCommandOutput}
 * @see {@link DeleteIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class DeleteIdentityProviderCommand extends $Command
  .classBuilder<
    DeleteIdentityProviderCommandInput,
    DeleteIdentityProviderCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DeleteIdentityProvider", {})
  .n("WorkSpacesWebClient", "DeleteIdentityProviderCommand")
  .sc(DeleteIdentityProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityProviderCommandInput;
      output: DeleteIdentityProviderCommandOutput;
    };
  };
}
