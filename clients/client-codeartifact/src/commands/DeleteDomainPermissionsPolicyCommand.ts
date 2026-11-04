// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDomainPermissionsPolicyRequest, DeleteDomainPermissionsPolicyResult } from "../models/models_0";
import { DeleteDomainPermissionsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainPermissionsPolicyCommand}.
 */
export interface DeleteDomainPermissionsPolicyCommandInput extends DeleteDomainPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainPermissionsPolicyCommand}.
 */
export interface DeleteDomainPermissionsPolicyCommandOutput extends DeleteDomainPermissionsPolicyResult, __MetadataBearer {}

/**
 * Deletes the resource policy set on a domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // DeleteDomainPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   policyRevision: "STRING_VALUE",
 * };
 * const command = new DeleteDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDomainPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDomainPermissionsPolicyCommandInput - {@link DeleteDomainPermissionsPolicyCommandInput}
 * @returns {@link DeleteDomainPermissionsPolicyCommandOutput}
 * @see {@link DeleteDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The operation did not succeed because prerequisites are not met.
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
export class DeleteDomainPermissionsPolicyCommand extends command<DeleteDomainPermissionsPolicyCommandInput, DeleteDomainPermissionsPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainPermissionsPolicy",
  DeleteDomainPermissionsPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainPermissionsPolicyRequest;
      output: DeleteDomainPermissionsPolicyResult;
    };
    sdk: {
      input: DeleteDomainPermissionsPolicyCommandInput;
      output: DeleteDomainPermissionsPolicyCommandOutput;
    };
  };
}
