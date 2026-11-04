// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIdentityContextRequest, GetIdentityContextResponse } from "../models/models_4";
import { GetIdentityContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the identity context for a Quick Sight user in a specified namespace, allowing you to obtain identity tokens that can be used with identity-enhanced IAM role sessions to call identity-aware APIs.
 *
 * Currently, you can call the following APIs with identity-enhanced Credentials
 *
 * - [StartDashboardSnapshotJob](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_StartDashboardSnapshotJob.html)
 * - [DescribeDashboardSnapshotJob](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJob.html)
 * - [DescribeDashboardSnapshotJobResult](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardSnapshotJobResult.html)
 *
 * **Supported Authentication Methods**
 *
 * This API supports Quick Sight native users, IAM federated users, and Active Directory users. For Quick Sight users authenticated by Amazon Web Services Identity Center, see [Identity Center documentation on identity-enhanced IAM role sessions](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html).
 *
 * **Supported Regions**
 *
 * The GetIdentityContext API works only in regions that support at least one of these identity types:
 *
 * - Amazon Quick Sight native identity
 * - IAM federated identity
 * - Active Directory
 *
 * To use this API successfully, call it in the same region where your user's identity resides. For example, if your user's identity is in us-east-1, make the API call in us-east-1. For more information about managing identities in Amazon Quick Sight, see [Identity and access management in Amazon Quick Sight](https://docs.aws.amazon.com/quicksight/latest/userguide/identity.html) in the Amazon Quick Sight User Guide.
 *
 * **Getting Identity-Enhanced Credentials**
 *
 * To obtain identity-enhanced credentials, follow these steps:
 *
 * - Call the GetIdentityContext API to retrieve an identity token for the specified user.
 * - Use the identity token with the [STS AssumeRole API](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) to obtain identity-enhanced IAM role session credentials.
 *
 * **Usage with STS AssumeRole**
 *
 * The identity token returned by this API should be used with the STS AssumeRole API to obtain credentials for an identity-enhanced IAM role session. When calling AssumeRole, include the identity token in the `ProvidedContexts` parameter with `ProviderArn` set to `arn:aws:iam::aws:contextProvider/QuickSight` and `ContextAssertion` set to the identity token received from this API.
 *
 * The assumed role must allow the `sts:SetContext` action in addition to `sts:AssumeRole` in its trust relationship policy. The trust policy should include both actions for the principal that will be assuming the role.
 *
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
 *   ContextRegion: "STRING_VALUE",
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class GetIdentityContextCommand extends command<GetIdentityContextCommandInput, GetIdentityContextCommandOutput>(
  _ep0,
  _mw0,
  "GetIdentityContext",
  GetIdentityContext$
) {
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
