// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResult,
  GetAuthorizationTokenResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAuthorizationTokenCommand, se_GetAuthorizationTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandInput extends GetAuthorizationTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandOutput extends GetAuthorizationTokenResult, __MetadataBearer {}

/**
 * <p>
 *         Generates a temporary authorization token for accessing repositories in the domain.
 *         This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
 *         For more information about authorization tokens, see
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">CodeArtifact authentication and tokens</a>.
 *       </p>
 *          <note>
 *             <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command.
 *          You can call <code>login</code> periodically to refresh the token. When
 *          you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period,
 *          up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p>
 *             <p>The authorization period begins after <code>login</code>
 *          or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while
 *          assuming a role, the token lifetime is independent of the maximum session duration
 *          of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then
 *          generate a CodeArtifact authorization token, the token will be valid for the full authorization period
 *          even though this is longer than the 15-minute session duration.</p>
 *             <p>See
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a>
 *          for more information on controlling session duration. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeartifactClient(config);
 * const input = { // GetAuthorizationTokenRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   durationSeconds: Number("long"),
 * };
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizationTokenResult
 * //   authorizationToken: "STRING_VALUE",
 * //   expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAuthorizationTokenCommandInput - {@link GetAuthorizationTokenCommandInput}
 * @returns {@link GetAuthorizationTokenCommandOutput}
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
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
export class GetAuthorizationTokenCommand extends $Command
  .classBuilder<
    GetAuthorizationTokenCommandInput,
    GetAuthorizationTokenCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "GetAuthorizationToken", {})
  .n("CodeartifactClient", "GetAuthorizationTokenCommand")
  .f(void 0, GetAuthorizationTokenResultFilterSensitiveLog)
  .ser(se_GetAuthorizationTokenCommand)
  .de(de_GetAuthorizationTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAuthorizationTokenRequest;
      output: GetAuthorizationTokenResult;
    };
    sdk: {
      input: GetAuthorizationTokenCommandInput;
      output: GetAuthorizationTokenCommandOutput;
    };
  };
}
