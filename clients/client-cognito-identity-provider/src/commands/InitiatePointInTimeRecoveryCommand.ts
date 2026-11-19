// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitiatePointInTimeRecoveryRequest, InitiatePointInTimeRecoveryResponse } from "../models/models_0";
import { InitiatePointInTimeRecovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InitiatePointInTimeRecoveryCommand}.
 */
export interface InitiatePointInTimeRecoveryCommandInput extends InitiatePointInTimeRecoveryRequest {}
/**
 * @public
 *
 * The output of {@link InitiatePointInTimeRecoveryCommand}.
 */
export interface InitiatePointInTimeRecoveryCommandOutput extends InitiatePointInTimeRecoveryResponse, __MetadataBearer {}

/**
 * <p>Initiates a point-in-time recovery of a user pool to a time in the past that you
 *             specify. This operation is the first step of a recovery and doesn't change your
 *             user pool data. Amazon Cognito pauses write operations in the user pool and
 *             generates a recovery preview, which might not be available immediately. The preview shows the number of entities that the recovery creates, updates,
 *             and deletes. To check the status of the recovery and review the preview, make a  request. When the status is
 *                 <code>PREVIEW_GENERATED</code>, apply the recovery with a  request or discard it with a  request. The time that it takes to
 *             generate the recovery preview doesn't depend on the size of your user
 *             pool.</p>
 *          <important>
 *             <p>Point-in-time recovery is a disaster recovery feature. Use it to recover from
 *                 accidental or unauthorized changes that affect your user data, for example the
 *                 deletion or corruption of many users. Don't use point-in-time recovery to
 *                 remove users that were created recently or to revert changes to individual users.
 *                 To delete or update individual users, use operations like  and .</p>
 *          </important>
 *          <p>While a recovery is in progress, Amazon Cognito blocks operations that write to the user pool,
 *             for example user sign-up, user creation, and attribute updates. Sign-in and read
 *             operations continue to work, with the following exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>Users who must set a new password, set up MFA, or respond to a TOTP MFA
 *                     challenge can't complete sign-in. Sign-in with the
 *                         <code>NEW_PASSWORD_REQUIRED</code>, <code>MFA_SETUP</code>, and
 *                         <code>SOFTWARE_TOKEN_MFA</code> challenges fails until the recovery
 *                     ends.</p>
 *             </li>
 *             <li>
 *                <p>Federated users can sign in only if they have previously signed in to the user
 *                     pool and their attributes from the external identity provider haven't
 *                     changed.</p>
 *             </li>
 *             <li>
 *                <p>You can't create or start user import jobs. Start your import jobs
 *                     after the recovery ends.</p>
 *             </li>
 *          </ul>
 *          <p>If you don't start or cancel the recovery within 24 hours after you initiate it,
 *             the recovery preview expires. Amazon Cognito then resumes write operations and doesn't
 *             change your user pool data. The 24-hour period includes the time that
 *             Amazon Cognito takes to generate the recovery preview.</p>
 *          <p>A point-in-time recovery restores user data, including user profiles and attributes,
 *             group memberships, passwords, MFA settings, and passkeys. It doesn't restore user
 *             pool configuration, for example app clients, the attribute schema, encryption
 *             settings, or multi-Region replication settings. Users who changed their password after
 *             the recovery point keep their current password.</p>
 *          <p>The following requirements and limits apply to point-in-time recovery:</p>
 *          <ul>
 *             <li>
 *                <p>Your user pool must be on the Essentials or Plus <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a>. With the Essentials feature
 *                     plan, you can recover your user pool to a point in time up to 1 day in the
 *                     past. With the Plus feature plan, you can recover up to 14 days in the past.
 *                     Your user pool must have been on the required feature plan at the recovery
 *                     point. For example, to recover to a point in time 14 days ago, your user pool
 *                     must have been on the Plus feature plan for the past 14 days.</p>
 *             </li>
 *             <li>
 *                <p>The recovery point must be at least 15 minutes in the past and can't be
 *                     earlier than the creation time of the user pool.</p>
 *             </li>
 *             <li>
 *                <p>A user pool can have only one active recovery at a time.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Web Services account can have up to five active recoveries at a time
 *                     across all of its user pools. An organization in Amazon Web Services Organizations can have up
 *                     to ten active recoveries at a time across all of its accounts.</p>
 *             </li>
 *             <li>
 *                <p>You can complete one recovery of a user pool in a 24-hour period.</p>
 *             </li>
 *             <li>
 *                <p>You can create up to three recovery previews of a user pool, ten recovery
 *                     previews in an Amazon Web Services account, and 15 recovery previews in an
 *                     organization in Amazon Web Services Organizations in a 24-hour period. You can create up to
 *                     ten recovery previews of a user pool in a 30-day period.</p>
 *             </li>
 *             <li>
 *                <p>You can't initiate a recovery while a user import job is in progress in
 *                     your user pool. Wait for the import job to complete, or stop it with a  request, and then initiate the
 *                     recovery.</p>
 *             </li>
 *             <li>
 *                <p>In a user pool with multi-Region replication, you can initiate a recovery only
 *                     in the primary Amazon Web Services Region, and only after replication is complete.</p>
 *             </li>
 *             <li>
 *                <p>If your user pool uses a customer managed key in KMS for encryption, the key
 *                     must remain enabled and accessible to Amazon Cognito for the duration of the
 *                     recovery.</p>
 *             </li>
 *             <li>
 *                <p>Some user pools don't support point-in-time recovery, for example some
 *                     older user pools and user pools that contain user data with characters or
 *                     formats that point-in-time recovery doesn't support. If your user pool
 *                     doesn't support it, Amazon Cognito returns an error when you initiate a
 *                     recovery. To get help with this limitation, contact Amazon Web Services Support.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, InitiatePointInTimeRecoveryCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, InitiatePointInTimeRecoveryCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // InitiatePointInTimeRecoveryRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RestoreTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new InitiatePointInTimeRecoveryCommand(input);
 * const response = await client.send(command);
 * // { // InitiatePointInTimeRecoveryResponse
 * //   Restoration: { // RestorationType
 * //     RestoreId: "STRING_VALUE",
 * //     RestoreStatus: "PREVIEW_GENERATING" || "PREVIEW_GENERATED" || "PREVIEW_CANCELLED" || "PREVIEW_GENERATION_FAILED" || "PREVIEW_EXPIRED" || "RESTORING" || "RESTORE_COMPLETED" || "TEMPORARY_INTERNAL_ERROR_SEE_SUPPORT_CASE" || "AWS_ABORTED",
 * //     RestoreTimestamp: new Date("TIMESTAMP"),
 * //     TriggerTimestamp: new Date("TIMESTAMP"),
 * //     RestorePreview: [ // RestorePreviewListType
 * //       { // RestorePreviewType
 * //         Entity: "STRING_VALUE",
 * //         CreateCount: Number("long"),
 * //         UpdateCount: Number("long"),
 * //         DeleteCount: Number("long"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param InitiatePointInTimeRecoveryCommandInput - {@link InitiatePointInTimeRecoveryCommandInput}
 * @returns {@link InitiatePointInTimeRecoveryCommandOutput}
 * @see {@link InitiatePointInTimeRecoveryCommandInput} for command's `input` shape.
 * @see {@link InitiatePointInTimeRecoveryCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *  <p>This exception is thrown when a feature that you attempted to use or configure
 *             isn't included in your user pool's current feature plan. This can occur
 *             when:</p>
 *          <ul>
 *             <li>
 *                <p>You configure a feature that your feature plan doesn't support.</p>
 *             </li>
 *             <li>
 *                <p>You make a request that uses a feature that requires a higher feature
 *                     plan.</p>
 *             </li>
 *          </ul>
 *          <p>To resolve this issue, upgrade your user pool to a feature plan that includes the
 *             feature.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class InitiatePointInTimeRecoveryCommand extends command<InitiatePointInTimeRecoveryCommandInput, InitiatePointInTimeRecoveryCommandOutput>(
  _ep0,
  _mw0,
  "InitiatePointInTimeRecovery",
  InitiatePointInTimeRecovery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiatePointInTimeRecoveryRequest;
      output: InitiatePointInTimeRecoveryResponse;
    };
    sdk: {
      input: InitiatePointInTimeRecoveryCommandInput;
      output: InitiatePointInTimeRecoveryCommandOutput;
    };
  };
}
