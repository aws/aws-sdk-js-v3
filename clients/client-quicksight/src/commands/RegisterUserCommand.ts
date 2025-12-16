// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterUserRequest, RegisterUserResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { RegisterUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterUserCommand}.
 */
export interface RegisterUserCommandInput extends RegisterUserRequest {}
/**
 * @public
 *
 * The output of {@link RegisterUserCommand}.
 */
export interface RegisterUserCommandOutput extends RegisterUserResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Quick Sight user whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. When you register a new user from the Quick Sight API, Quick Sight generates a registration URL. The user accesses this registration URL to create their account. Quick Sight doesn't send a registration email to users who are registered from the Quick Sight API. If you want new users to receive a registration email, then add those users in the Quick Sight console. For more information on registering a new user in the Quick Sight console, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/managing-users.html#inviting-users"> Inviting users to access Quick Sight</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, RegisterUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, RegisterUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // RegisterUserRequest
 *   IdentityType: "IAM" || "QUICKSIGHT" || "IAM_IDENTITY_CENTER", // required
 *   Email: "STRING_VALUE", // required
 *   UserRole: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO", // required
 *   IamArn: "STRING_VALUE",
 *   SessionName: "STRING_VALUE",
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 *   CustomPermissionsName: "STRING_VALUE",
 *   ExternalLoginFederationProviderType: "STRING_VALUE",
 *   CustomFederationProviderUrl: "STRING_VALUE",
 *   ExternalLoginId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RegisterUserCommand(input);
 * const response = await client.send(command);
 * // { // RegisterUserResponse
 * //   User: { // User
 * //     Arn: "STRING_VALUE",
 * //     UserName: "STRING_VALUE",
 * //     Email: "STRING_VALUE",
 * //     Role: "ADMIN" || "AUTHOR" || "READER" || "RESTRICTED_AUTHOR" || "RESTRICTED_READER" || "ADMIN_PRO" || "AUTHOR_PRO" || "READER_PRO",
 * //     IdentityType: "IAM" || "QUICKSIGHT" || "IAM_IDENTITY_CENTER",
 * //     Active: true || false,
 * //     PrincipalId: "STRING_VALUE",
 * //     CustomPermissionsName: "STRING_VALUE",
 * //     ExternalLoginFederationProviderType: "STRING_VALUE",
 * //     ExternalLoginFederationProviderUrl: "STRING_VALUE",
 * //     ExternalLoginId: "STRING_VALUE",
 * //   },
 * //   UserInvitationUrl: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param RegisterUserCommandInput - {@link RegisterUserCommandInput}
 * @returns {@link RegisterUserCommandOutput}
 * @see {@link RegisterUserCommandInput} for command's `input` shape.
 * @see {@link RegisterUserCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
 *
 * @public
 */
export class RegisterUserCommand extends $Command
  .classBuilder<
    RegisterUserCommandInput,
    RegisterUserCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "RegisterUser", {})
  .n("QuickSightClient", "RegisterUserCommand")
  .sc(RegisterUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterUserRequest;
      output: RegisterUserResponse;
    };
    sdk: {
      input: RegisterUserCommandInput;
      output: RegisterUserCommandOutput;
    };
  };
}
