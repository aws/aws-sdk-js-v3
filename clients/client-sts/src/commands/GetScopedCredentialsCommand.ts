// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetScopedCredentialsRequest, GetScopedCredentialsResponse } from "../models/models_0";
import { GetScopedCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetScopedCredentialsCommand}.
 */
export interface GetScopedCredentialsCommandInput extends GetScopedCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetScopedCredentialsCommand}.
 */
export interface GetScopedCredentialsCommandOutput extends GetScopedCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns a set of temporary security credentials that are scoped down from the caller's
 *       existing temporary security credentials. <code>GetScopedCredentials</code> preserves the
 *       caller's identity while narrowing the permissions and optionally shortening the session
 *       lifetime.</p>
 *          <p>For a comparison of <code>GetScopedCredentials</code> with the other API operations that
 *          produce temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_sts-comparison.html">Compare STS
 *             credentials</a> in the IAM User Guide.</p>
 *          <p>
 *             <b>Credential requirements</b>
 *          </p>
 *          <p>You can only call <code>GetScopedCredentials</code> with temporary security credentials,
 *          for example, credentials from an assumed role or a federated session. You cannot call it
 *          with IAM user credentials or root credentials. If you want to scope down IAM user
 *          credentials, first call <code>GetSessionToken</code> to get temporary security credentials,
 *          and then call <code>GetScopedCredentials</code> with those credentials.</p>
 *          <note>
 *             <p>The <code>GetScopedCredentials</code> API is not available on the STS Global
 *             endpoint.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetScopedCredentialsCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetScopedCredentialsCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // GetScopedCredentialsRequest
 *   Policy: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   MinimumSessionTokenSize: Number("int"),
 *   ScopedSessionDescription: "STRING_VALUE",
 * };
 * const command = new GetScopedCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetScopedCredentialsResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   SessionInfo: { // ScopedSession
 * //     ScopedSessionId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //   },
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * //   ScopedPoliciesCount: Number("int"),
 * //   SourceIdentity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScopedCredentialsCommandInput - {@link GetScopedCredentialsCommandInput}
 * @returns {@link GetScopedCredentialsCommandOutput}
 * @see {@link GetScopedCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetScopedCredentialsCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link InsufficientSessionLifetimeException} (client fault)
 *  <p>The request was rejected because the requested <code>DurationSeconds</code> is greater
 *             than the remaining lifetime of the calling session. <code>GetScopedCredentials</code>
 *             cannot extend a session beyond its original expiration. Request a duration that is less
 *             than or equal to the calling session's remaining lifetime, or omit
 *             <code>DurationSeconds</code> to inherit it.</p>
 *
 * @throws {@link InvalidSubjectCredentialsException} (client fault)
 *  <p>The request was rejected because the session used to call
 *         <code>GetScopedCredentials</code> is not a valid session. The calling session's credentials
 *         could not be validated or resolved.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *             describes the specific error.</p>
 *
 * @throws {@link PackedPolicyTooLargeException} (client fault)
 *  <p>The request was rejected because the session token exceeded the maximum allowed size.
 *             The error message reports the session token size and the maximum allowed size, both in
 *             bytes. Session policies and session tags add to the session token size. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in
 *             the <i>IAM User Guide</i>.</p>
 *          <p>You might receive this error even though you meet the individual session policy and
 *             session tag limits. Monitor <code>SessionTokenUtilization</code> to track how close the
 *             session token is to the maximum allowed size. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length">IAM and STS Entity Character Limits</a> in the <i>IAM User
 *                 Guide</i>.</p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 *
 * @example To scope down existing temporary credentials
 * ```javascript
 * //
 * const input = {
 *   DurationSeconds: 3600,
 *   Policy: `{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":"s3:GetObject","Resource":"arn:aws:s3:::example-bucket/*"}]}`
 * };
 * const command = new GetScopedCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Credentials: {
 *     AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *     Expiration: "2011-07-15T23:28:33.359Z",
 *     SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     SessionToken: "AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtpZ3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE"
 *   },
 *   ScopedPoliciesCount: 1,
 *   SessionInfo: {
 *     Arn: "arn:aws:sts::123456789012:assumed-role/example-role/example-session",
 *     ScopedSessionId: "AROAEXAMPLEID:example-session"
 *   },
 *   SourceIdentity: "example-source-identity"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetScopedCredentialsCommand extends command<GetScopedCredentialsCommandInput, GetScopedCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetScopedCredentials",
  GetScopedCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScopedCredentialsRequest;
      output: GetScopedCredentialsResponse;
    };
    sdk: {
      input: GetScopedCredentialsCommandInput;
      output: GetScopedCredentialsCommandOutput;
    };
  };
}
