// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutRepositoryPermissionsPolicyRequest, PutRepositoryPermissionsPolicyResult } from "../models/models_0";
import { PutRepositoryPermissionsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRepositoryPermissionsPolicyCommand}.
 */
export interface PutRepositoryPermissionsPolicyCommandInput extends PutRepositoryPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRepositoryPermissionsPolicyCommand}.
 */
export interface PutRepositoryPermissionsPolicyCommandOutput extends PutRepositoryPermissionsPolicyResult, __MetadataBearer {}

/**
 * <p>
 *         Sets the resource policy on a repository that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
 *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // PutRepositoryPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   policyRevision: "STRING_VALUE",
 *   policyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutRepositoryPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRepositoryPermissionsPolicyCommandInput - {@link PutRepositoryPermissionsPolicyCommandInput}
 * @returns {@link PutRepositoryPermissionsPolicyCommandOutput}
 * @see {@link PutRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
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
export class PutRepositoryPermissionsPolicyCommand extends $Command
  .classBuilder<
    PutRepositoryPermissionsPolicyCommandInput,
    PutRepositoryPermissionsPolicyCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "PutRepositoryPermissionsPolicy", {})
  .n("CodeartifactClient", "PutRepositoryPermissionsPolicyCommand")
  .sc(PutRepositoryPermissionsPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRepositoryPermissionsPolicyRequest;
      output: PutRepositoryPermissionsPolicyResult;
    };
    sdk: {
      input: PutRepositoryPermissionsPolicyCommandInput;
      output: PutRepositoryPermissionsPolicyCommandOutput;
    };
  };
}
