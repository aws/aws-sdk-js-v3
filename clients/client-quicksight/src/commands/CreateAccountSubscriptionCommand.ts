// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccountSubscriptionRequest, CreateAccountSubscriptionResponse } from "../models/models_3";
import { de_CreateAccountSubscriptionCommand, se_CreateAccountSubscriptionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountSubscriptionCommand}.
 */
export interface CreateAccountSubscriptionCommandInput extends CreateAccountSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountSubscriptionCommand}.
 */
export interface CreateAccountSubscriptionCommandOutput extends CreateAccountSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon QuickSight account, or subscribes to Amazon QuickSight Q.</p>
 *          <p>The Amazon Web Services Region for the account is derived from what is configured in the
 *           CLI or SDK.</p>
 *          <p>Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/setting-up-aws-sign-up.html">Sign
 *                 up for Amazon Web Services</a> in the <i>Amazon QuickSight User
 *                 Guide</i>. The person who signs up for Amazon QuickSight needs to have the
 *             correct Identity and Access Management (IAM) permissions. For more information,
 *             see <a href="https://docs.aws.amazon.com/quicksight/latest/user/iam-policy-examples.html">IAM Policy Examples for Amazon QuickSight</a> in the
 *                     <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>If your IAM policy includes both the <code>Subscribe</code> and
 *                 <code>CreateAccountSubscription</code> actions, make sure that both actions are set
 *             to <code>Allow</code>. If either action is set to <code>Deny</code>, the
 *                 <code>Deny</code> action prevails and your API call fails.</p>
 *          <p>You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to
 *                 Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html#security-create-iam-role">Passing IAM roles to Amazon QuickSight</a> in the
 *                     <i>Amazon QuickSight User Guide</i>.</p>
 *          <p>You can't set default resource access on the new account from the Amazon QuickSight
 *             API. Instead, add default resource access from the Amazon QuickSight console. For more
 *             information about setting default resource access to Amazon Web Services services, see
 *                 <a href="https://docs.aws.amazon.com/quicksight/latest/user/scoping-policies-defaults.html">Setting default resource
 *                 access to Amazon Web Services services</a> in the <i>Amazon QuickSight
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // CreateAccountSubscriptionRequest
 *   Edition: "STANDARD" || "ENTERPRISE" || "ENTERPRISE_AND_Q",
 *   AuthenticationMethod: "IAM_AND_QUICKSIGHT" || "IAM_ONLY" || "ACTIVE_DIRECTORY" || "IAM_IDENTITY_CENTER", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   AccountName: "STRING_VALUE", // required
 *   NotificationEmail: "STRING_VALUE", // required
 *   ActiveDirectoryName: "STRING_VALUE",
 *   Realm: "STRING_VALUE",
 *   DirectoryId: "STRING_VALUE",
 *   AdminGroup: [ // GroupsList
 *     "STRING_VALUE",
 *   ],
 *   AuthorGroup: [
 *     "STRING_VALUE",
 *   ],
 *   ReaderGroup: [
 *     "STRING_VALUE",
 *   ],
 *   AdminProGroup: [
 *     "STRING_VALUE",
 *   ],
 *   AuthorProGroup: [
 *     "STRING_VALUE",
 *   ],
 *   ReaderProGroup: "<GroupsList>",
 *   FirstName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   EmailAddress: "STRING_VALUE",
 *   ContactNumber: "STRING_VALUE",
 *   IAMIdentityCenterInstanceArn: "STRING_VALUE",
 * };
 * const command = new CreateAccountSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountSubscriptionResponse
 * //   SignupResponse: { // SignupResponse
 * //     IAMUser: true || false,
 * //     userLoginName: "STRING_VALUE",
 * //     accountName: "STRING_VALUE",
 * //     directoryType: "STRING_VALUE",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccountSubscriptionCommandInput - {@link CreateAccountSubscriptionCommandInput}
 * @returns {@link CreateAccountSubscriptionCommandOutput}
 * @see {@link CreateAccountSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAccountSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class CreateAccountSubscriptionCommand extends $Command
  .classBuilder<
    CreateAccountSubscriptionCommandInput,
    CreateAccountSubscriptionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "CreateAccountSubscription", {})
  .n("QuickSightClient", "CreateAccountSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccountSubscriptionCommand)
  .de(de_CreateAccountSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountSubscriptionRequest;
      output: CreateAccountSubscriptionResponse;
    };
    sdk: {
      input: CreateAccountSubscriptionCommandInput;
      output: CreateAccountSubscriptionCommandOutput;
    };
  };
}
