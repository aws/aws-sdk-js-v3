// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccountSubscriptionRequest, CreateAccountSubscriptionResponse } from "../models/models_2";
import { CreateAccountSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon Quick Sight account, or subscribes to Amazon Quick Sight Q.
 *
 * The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK.
 *
 * Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see [Sign up for Amazon Web Services](https://docs.aws.amazon.com/quicksight/latest/user/setting-up-aws-sign-up.html) in the *Amazon Quick Sight User Guide*. The person who signs up for Amazon Quick Sight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see [IAM Policy Examples for Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/iam-policy-examples.html) in the *Amazon Quick Sight User Guide*.
 *
 * If your IAM policy includes both the `Subscribe` and `CreateAccountSubscription` actions, make sure that both actions are set to `Allow`. If either action is set to `Deny`, the `Deny` action prevails and your API call fails.
 *
 * You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon Quick Sight, see [Passing IAM roles to Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html#security-create-iam-role) in the *Amazon Quick Sight User Guide*.
 *
 * You can't set default resource access on the new account from the Amazon Quick Sight API. Instead, add default resource access from the Amazon Quick Sight console. For more information about setting default resource access to Amazon Web Services services, see [Setting default resource access to Amazon Web Services services](https://docs.aws.amazon.com/quicksight/latest/user/scoping-policies-defaults.html) in the *Amazon Quick Sight User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccountSubscriptionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccountSubscriptionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class CreateAccountSubscriptionCommand extends command<CreateAccountSubscriptionCommandInput, CreateAccountSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccountSubscription",
  CreateAccountSubscription$
) {
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
