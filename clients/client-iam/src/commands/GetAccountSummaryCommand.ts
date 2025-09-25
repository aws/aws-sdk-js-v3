// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/models_0";
import { GetAccountSummary } from "../schemas/schemas_29_GetAccountSummary";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSummaryCommand}.
 */
export interface GetAccountSummaryCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountSummaryCommand}.
 */
export interface GetAccountSummaryCommandOutput extends GetAccountSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services
 *             account.</p>
 *          <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountSummaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountSummaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSummaryResponse
 * //   SummaryMap: { // summaryMapType
 * //     "<keys>": Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSummaryCommandInput - {@link GetAccountSummaryCommandInput}
 * @returns {@link GetAccountSummaryCommandOutput}
 * @see {@link GetAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To get information about IAM entity quotas and usage in the current account
 * ```javascript
 * // The following command returns information about the IAM entity quotas and usage in the current AWS account.
 * const input = { /* empty *\/ };
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SummaryMap: {
 *     AccessKeysPerUserQuota: 2,
 *     AccountAccessKeysPresent: 1,
 *     AccountMFAEnabled: 0,
 *     AccountSigningCertificatesPresent: 0,
 *     AttachedPoliciesPerGroupQuota: 10,
 *     AttachedPoliciesPerRoleQuota: 10,
 *     AttachedPoliciesPerUserQuota: 10,
 *     GlobalEndpointTokenVersion: 2,
 *     GroupPolicySizeQuota: 5120,
 *     Groups: 15,
 *     GroupsPerUserQuota: 10,
 *     GroupsQuota: 100,
 *     MFADevices: 6,
 *     MFADevicesInUse: 3,
 *     Policies: 8,
 *     PoliciesQuota: 1000,
 *     PolicySizeQuota: 5120,
 *     PolicyVersionsInUse: 22,
 *     PolicyVersionsInUseQuota: 10000,
 *     ServerCertificates: 1,
 *     ServerCertificatesQuota: 20,
 *     SigningCertificatesPerUserQuota: 2,
 *     UserPolicySizeQuota: 2048,
 *     Users: 27,
 *     UsersQuota: 5000,
 *     VersionsPerPolicyQuota: 5
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountSummaryCommand extends $Command
  .classBuilder<
    GetAccountSummaryCommandInput,
    GetAccountSummaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetAccountSummary", {})
  .n("IAMClient", "GetAccountSummaryCommand")
  .sc(GetAccountSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountSummaryResponse;
    };
    sdk: {
      input: GetAccountSummaryCommandInput;
      output: GetAccountSummaryCommandOutput;
    };
  };
}
