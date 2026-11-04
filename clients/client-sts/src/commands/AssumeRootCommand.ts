// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeRootRequest, AssumeRootResponse } from "../models/models_0";
import { AssumeRoot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeRootCommand}.
 */
export interface AssumeRootCommandInput extends AssumeRootRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRootCommand}.
 */
export interface AssumeRootCommandOutput extends AssumeRootResponse, __MetadataBearer {}

/**
 * Returns a set of short term credentials you can use to perform privileged tasks on a member account in your organization. You must use credentials from an Organizations management account or a delegated administrator account for IAM to call `AssumeRoot`. You cannot use root user credentials to make this call.
 *
 * Before you can launch a privileged session, you must have centralized root access in your organization. For steps to enable this feature, see [Centralize root access for member accounts](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-enable-root-access.html) in the *IAM User Guide*.
 *
 * > **Note:** The STS global endpoint is not supported for AssumeRoot. You must send this request to a Regional STS endpoint. For more information, see [Endpoints](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html#sts-endpoints).
 *
 * You can track AssumeRoot in CloudTrail logs to determine what actions were performed in a session. For more information, see [Track privileged tasks in CloudTrail](https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-track-privileged-tasks.html) in the *IAM User Guide*.
 *
 * When granting access to privileged tasks you should only grant the necessary permissions required to perform that task. For more information, see [Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html). In addition, you can use [service control policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) (SCPs) to manage and limit permissions in your organization. See [General examples](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html) in the *Organizations User Guide* for more information on SCPs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRootCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRootCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * // import type { STSClientConfig } from "@aws-sdk/client-sts";
 * const config = {}; // type is STSClientConfig
 * const client = new STSClient(config);
 * const input = { // AssumeRootRequest
 *   TargetPrincipal: "STRING_VALUE", // required
 *   TaskPolicyArn: { // PolicyDescriptorType
 *     arn: "STRING_VALUE",
 *   },
 *   DurationSeconds: Number("int"),
 *   MinimumSessionTokenSize: Number("int"),
 * };
 * const command = new AssumeRootCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRootResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   SourceIdentity: "STRING_VALUE",
 * //   SessionTokenUtilization: Number("int"),
 * //   SessionTokenSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param AssumeRootCommandInput - {@link AssumeRootCommandInput}
 * @returns {@link AssumeRootCommandOutput}
 * @see {@link AssumeRootCommandInput} for command's `input` shape.
 * @see {@link AssumeRootCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
 *
 * @throws {@link RegionDisabledException} (client fault)
 *
 * STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see [Activating and Deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate) in the *IAM User Guide*.
 *
 * @throws {@link STSServiceException}
 *
 * Base exception class for all service exceptions from STS service.
 *
 * @example To launch a privileged session
 * ```javascript
 * // The following command retrieves a set of short-term credentials you can use to unlock an S3 bucket for a member account by removing the bucket policy.
 * const input = {
 *   DurationSeconds: 900,
 *   TargetPrincipal: "111122223333",
 *   TaskPolicyArn: {
 *     arn: "arn:aws:iam::aws:policy/root-task/S3UnlockBucketPolicy"
 *   }
 * };
 * const command = new AssumeRootCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Credentials: {
 *     AccessKeyId: "ASIAJEXAMPLEXEG2JICEA",
 *     Expiration: "2024-11-15T00:05:07Z",
 *     SecretAccessKey: "9drTJvcXLB89EXAMPLELB8923FB892xMFI",
 *     SessionToken: "AQoXdzELDDY//////////wEaoAK1wvxJY12r2IrDFT2IvAzTCn3zHoZ7YNtpiQLF0MqZye/qwjzP2iEXAMPLEbw/m3hsj8VBTkPORGvr9jM5sgP+w9IZWZnU+LWhmg+a5fDi2oTGUYcdg9uexQ4mtCHIHfi4citgqZTgco40Yqr4lIlo4V2b2Dyauk0eYFNebHtYlFVgAUj+7Indz3LU0aTWk1WKIjHmmMCIoTkyYp/k7kUG7moeEYKSitwQIi6Gjn+nyzM+PtoA3685ixzv0R7i5rjQi0YE0lf1oeie3bDiNHncmzosRM6SFiPzSvp6h/32xQuZsjcypmwsPSDtTPYcs0+YN/8BRi2/IcrxSpnWEXAMPLEXSDFTAQAM6Dl9zR0tXoybnlrZIwMLlMi1Kcgo5OytwU="
 *   },
 *   SourceIdentity: "Alice"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssumeRootCommand extends command<AssumeRootCommandInput, AssumeRootCommandOutput>(
  _ep0,
  _mw0,
  "AssumeRoot",
  AssumeRoot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRootRequest;
      output: AssumeRootResponse;
    };
    sdk: {
      input: AssumeRootCommandInput;
      output: AssumeRootCommandOutput;
    };
  };
}
