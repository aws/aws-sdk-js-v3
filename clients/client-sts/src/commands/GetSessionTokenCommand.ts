// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionTokenRequest, GetSessionTokenResponse } from "../models/models_0";
import { GetSessionToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSessionTokenCommand}.
 */
export interface GetSessionTokenCommandInput extends GetSessionTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionTokenCommand}.
 */
export interface GetSessionTokenCommandOutput extends GetSessionTokenResponse, __MetadataBearer {}

/**
 * Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use `GetSessionToken` if you want to use MFA to protect programmatic calls to specific Amazon Web Services API operations like Amazon EC2 `StopInstances`.
 *
 * MFA-enabled IAM users must call `GetSessionToken` and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that the call returns, IAM users can then make programmatic calls to API operations that require MFA authentication. An incorrect MFA code causes the API to return an access denied error. For a comparison of `GetSessionToken` with the other API operations that produce temporary credentials, see [Requesting Temporary Security Credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Compare STS credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_sts-comparison.html) in the *IAM User Guide*.
 *
 * > **Note:** No permissions are required for users to perform this operation. The purpose of the `sts:GetSessionToken` operation is to authenticate the user using MFA. You cannot use policies to control authentication operations. For more information, see [Permissions for GetSessionToken](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getsessiontoken.html) in the *IAM User Guide*.
 *
 * **Session Duration**
 *
 * The `GetSessionToken` operation must be called by using the long-term Amazon Web Services security credentials of an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour.
 *
 * **Permissions**
 *
 * The temporary security credentials created by `GetSessionToken` can be used to make API calls to any Amazon Web Services service with the following exceptions:
 *
 * - You cannot call any IAM API operations unless MFA authentication information is included in the request.
 * - You cannot call any STS API *except* `AssumeRole` or `GetCallerIdentity`.
 *
 * The credentials that `GetSessionToken` returns are based on permissions associated with the IAM user whose credentials were used to call the operation. The temporary credentials have the same permissions as the IAM user.
 *
 * > **Note:** Although it is possible to call `GetSessionToken` using the security credentials of an Amazon Web Services account root user rather than an IAM user, we do not recommend it. If `GetSessionToken` is called using root user credentials, the temporary credentials have root user permissions. For more information, see [Safeguard your root user credentials and don't use them for everyday tasks](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials) in the *IAM User Guide*
 *
 * For more information about using `GetSessionToken` to create temporary credentials, see [Temporary Credentials for Users in Untrusted Environments](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetSessionTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetSessionTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // GetSessionTokenRequest
 *   DurationSeconds: Number("int"),
 *   SerialNumber: "STRING_VALUE",
 *   TokenCode: "STRING_VALUE",
 *   MinimumSessionTokenSize: Number("int"),
 * };
 * const command = new GetSessionTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetSessionTokenCommandInput - {@link GetSessionTokenCommandInput}
 * @returns {@link GetSessionTokenCommandOutput}
 * @see {@link GetSessionTokenCommandInput} for command's `input` shape.
 * @see {@link GetSessionTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link RegionDisabledException} (client fault)
 *
 * STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see [Activating and Deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate) in the *IAM User Guide*.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @example To get temporary credentials for an IAM user or an AWS account
 * ```javascript
 * //
 * const input = {
 *   DurationSeconds: 3600,
 *   SerialNumber: "YourMFASerialNumber",
 *   TokenCode: "123456"
 * };
 * const command = new GetSessionTokenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Credentials: {
 *     AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
 *     Expiration: "2011-07-11T19:55:29.611Z",
 *     SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     SessionToken: "AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtpZ3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSessionTokenCommand extends command<GetSessionTokenCommandInput, GetSessionTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetSessionToken",
  GetSessionToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionTokenRequest;
      output: GetSessionTokenResponse;
    };
    sdk: {
      input: GetSessionTokenCommandInput;
      output: GetSessionTokenCommandOutput;
    };
  };
}
