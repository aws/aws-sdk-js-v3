// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryPermissionsPolicyRequest, GetRepositoryPermissionsPolicyResult } from "../models/models_0";
import {
  de_GetRepositoryPermissionsPolicyCommand,
  se_GetRepositoryPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetRepositoryPermissionsPolicyCommandOutput
  extends GetRepositoryPermissionsPolicyResult,
    __MetadataBearer {}

/**
 * <p>
 *         Returns the resource policy that is set on a repository.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
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
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
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
 * @public
 */
export class GetRepositoryPermissionsPolicyCommand extends $Command
  .classBuilder<
    GetRepositoryPermissionsPolicyCommandInput,
    GetRepositoryPermissionsPolicyCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "GetRepositoryPermissionsPolicy", {})
  .n("CodeartifactClient", "GetRepositoryPermissionsPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryPermissionsPolicyCommand)
  .de(de_GetRepositoryPermissionsPolicyCommand)
  .build() {}
