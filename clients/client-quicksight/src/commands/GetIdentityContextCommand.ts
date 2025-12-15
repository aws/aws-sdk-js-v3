// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIdentityContextRequest, GetIdentityContextResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetIdentityContext } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityContextCommand}.
 */
export interface GetIdentityContextCommandInput extends GetIdentityContextRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityContextCommand}.
 */
export interface GetIdentityContextCommandOutput extends GetIdentityContextResponse, __MetadataBearer {}

/**
 * <p>Retrieves the identity context for a Quick Sight user in a specified namespace, allowing you to obtain identity tokens that can be used with identity-enhanced IAM role sessions to call identity-aware APIs.</p>
 *          <p>Currently, you can call the following APIs with identity-enhanced Credentials</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartDashboardSnapshotJob.html">StartDashboardSnapshotJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJob.html">DescribeDashboardSnapshotJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJobResult.html">DescribeDashboardSnapshotJobResult</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Supported Authentication Methods</b>
 *          </p>
 *          <p>This API supports Quick Sight native users, IAM federated users, and Active Directory users. For Quick Sight users authenticated by Amazon Web Services Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html">Identity Center documentation on identity-enhanced IAM role sessions</a>.</p>
 *          <p>
 *             <b>Getting Identity-Enhanced Credentials</b>
 *          </p>
 *          <p>To obtain identity-enhanced credentials, follow these steps:</p>
 *          <ul>
 *             <li>
 *                <p>Call the GetIdentityContext API to retrieve an identity token for the specified user.</p>
 *             </li>
 *             <li>
 *                <p>Use the identity token with the <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html">STS AssumeRole API</a> to obtain identity-enhanced IAM role session credentials.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Usage with STS AssumeRole</b>
 *          </p>
 *          <p>The identity token returned by this API should be used with the STS AssumeRole API to obtain credentials for an identity-enhanced IAM role session. When calling AssumeRole, include the identity token in the <code>ProvidedContexts</code> parameter with <code>ProviderArn</code> set to <code>arn:aws:iam::aws:contextProvider/QuickSight</code> and <code>ContextAssertion</code> set to the identity token received from this API.</p>
 *          <p>The assumed role must allow the <code>sts:SetContext</code> action in addition to <code>sts:AssumeRole</code> in its trust relationship policy. The trust policy should include both actions for the principal that will be assuming the role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetIdentityContextCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetIdentityContextCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GetIdentityContextRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   UserIdentifier: { // UserIdentifier Union: only one key present
 *     UserName: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     UserArn: "STRING_VALUE",
 *   },
 *   Namespace: "STRING_VALUE",
 *   SessionExpiresAt: new Date("TIMESTAMP"),
 * };
 * const command = new GetIdentityContextCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityContextResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   Context: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIdentityContextCommandInput - {@link GetIdentityContextCommandInput}
 * @returns {@link GetIdentityContextCommandOutput}
 * @see {@link GetIdentityContextCommandInput} for command's `input` shape.
 * @see {@link GetIdentityContextCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class GetIdentityContextCommand extends $Command
  .classBuilder<
    GetIdentityContextCommandInput,
    GetIdentityContextCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "GetIdentityContext", {})
  .n("QuickSightClient", "GetIdentityContextCommand")
  .sc(GetIdentityContext)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityContextRequest;
      output: GetIdentityContextResponse;
    };
    sdk: {
      input: GetIdentityContextCommandInput;
      output: GetIdentityContextCommandOutput;
    };
  };
}
