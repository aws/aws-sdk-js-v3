// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteRepositoryPermissionsPolicyRequest,
  DeleteRepositoryPermissionsPolicyResult,
} from "../models/models_0";
import { DeleteRepositoryPermissionsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRepositoryPermissionsPolicyCommand}.
 */
export interface DeleteRepositoryPermissionsPolicyCommandInput extends DeleteRepositoryPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRepositoryPermissionsPolicyCommand}.
 */
export interface DeleteRepositoryPermissionsPolicyCommandOutput
  extends DeleteRepositoryPermissionsPolicyResult,
    __MetadataBearer {}

/**
 * <p>
 *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
 *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
 *       </p>
 *          <important>
 *             <p>
 *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform
 *          the repository actions granted by the deleted policy.
 *        </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // DeleteRepositoryPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   policyRevision: "STRING_VALUE",
 * };
 * const command = new DeleteRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRepositoryPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRepositoryPermissionsPolicyCommandInput - {@link DeleteRepositoryPermissionsPolicyCommandInput}
 * @returns {@link DeleteRepositoryPermissionsPolicyCommandOutput}
 * @see {@link DeleteRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 *
 * @public
 */
export class DeleteRepositoryPermissionsPolicyCommand extends $Command
  .classBuilder<
    DeleteRepositoryPermissionsPolicyCommandInput,
    DeleteRepositoryPermissionsPolicyCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "DeleteRepositoryPermissionsPolicy", {})
  .n("CodeartifactClient", "DeleteRepositoryPermissionsPolicyCommand")
  .sc(DeleteRepositoryPermissionsPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRepositoryPermissionsPolicyRequest;
      output: DeleteRepositoryPermissionsPolicyResult;
    };
    sdk: {
      input: DeleteRepositoryPermissionsPolicyCommandInput;
      output: DeleteRepositoryPermissionsPolicyCommandOutput;
    };
  };
}
