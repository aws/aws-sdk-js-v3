// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainPermissionsPolicyRequest, GetDomainPermissionsPolicyResult } from "../models/models_0";
import { GetDomainPermissionsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainPermissionsPolicyCommand}.
 */
export interface GetDomainPermissionsPolicyCommandInput extends GetDomainPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainPermissionsPolicyCommand}.
 */
export interface GetDomainPermissionsPolicyCommandOutput extends GetDomainPermissionsPolicyResult, __MetadataBearer {}

/**
 * Returns the resource policy attached to the specified domain.
 *
 * > **Note:** The policy is a resource-based policy, not an identity-based policy. For more information, see [Identity-based policies and resource-based policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // GetDomainPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 * };
 * const command = new GetDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainPermissionsPolicyCommandInput - {@link GetDomainPermissionsPolicyCommandInput}
 * @returns {@link GetDomainPermissionsPolicyCommandOutput}
 * @see {@link GetDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDomainPermissionsPolicyCommandOutput} for command's `response` shape.
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
export class GetDomainPermissionsPolicyCommand extends command<GetDomainPermissionsPolicyCommandInput, GetDomainPermissionsPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainPermissionsPolicy",
  GetDomainPermissionsPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainPermissionsPolicyRequest;
      output: GetDomainPermissionsPolicyResult;
    };
    sdk: {
      input: GetDomainPermissionsPolicyCommandInput;
      output: GetDomainPermissionsPolicyCommandOutput;
    };
  };
}
