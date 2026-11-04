// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRepositoryPermissionsPolicyRequest, GetRepositoryPermissionsPolicyResult } from "../models/models_0";
import { GetRepositoryPermissionsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRepositoryPermissionsPolicyCommand}.
 */
export interface GetRepositoryPermissionsPolicyCommandInput extends GetRepositoryPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryPermissionsPolicyCommand}.
 */
export interface GetRepositoryPermissionsPolicyCommandOutput extends GetRepositoryPermissionsPolicyResult, __MetadataBearer {}

/**
 * Returns the resource policy that is set on a repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // GetRepositoryPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositoryPermissionsPolicyCommandInput - {@link GetRepositoryPermissionsPolicyCommandInput}
 * @returns {@link GetRepositoryPermissionsPolicyCommandOutput}
 * @see {@link GetRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation did not succeed because of an error that occurred inside CodeArtifact.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation did not succeed because the resource requested is not found in the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation did not succeed because too many requests are sent to the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation did not succeed because a parameter in the request was sent with an invalid value.
 *
 * @throws {@link CodeartifactServiceException}
 *
 * Base exception class for all service exceptions from Codeartifact service.
 *
 * @public
 */
export class GetRepositoryPermissionsPolicyCommand extends command<GetRepositoryPermissionsPolicyCommandInput, GetRepositoryPermissionsPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetRepositoryPermissionsPolicy",
  GetRepositoryPermissionsPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryPermissionsPolicyRequest;
      output: GetRepositoryPermissionsPolicyResult;
    };
    sdk: {
      input: GetRepositoryPermissionsPolicyCommandInput;
      output: GetRepositoryPermissionsPolicyCommandOutput;
    };
  };
}
