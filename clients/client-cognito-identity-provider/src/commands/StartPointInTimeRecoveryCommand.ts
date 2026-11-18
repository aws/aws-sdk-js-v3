// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPointInTimeRecoveryRequest, StartPointInTimeRecoveryResponse } from "../models/models_1";
import { StartPointInTimeRecovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartPointInTimeRecoveryCommand}.
 */
export interface StartPointInTimeRecoveryCommandInput extends StartPointInTimeRecoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartPointInTimeRecoveryCommand}.
 */
export interface StartPointInTimeRecoveryCommandOutput extends StartPointInTimeRecoveryResponse, __MetadataBearer {}

/**
 * <p>Applies a point-in-time recovery to a user pool. Before you start a recovery, review
 *             the recovery preview in the response to a  request. You can start a recovery when
 *             its status is <code>PREVIEW_GENERATED</code>.</p>
 *          <p>When you start a recovery, Amazon Cognito sets its status to <code>RESTORING</code> and
 *             restores user data in the user pool to its state at the recovery point. Write
 *             operations in the user pool remain paused until the recovery is complete. Sign-in and
 *             read operations continue to work. When the status of the recovery changes to
 *                 <code>RESTORE_COMPLETED</code>, Amazon Cognito resumes write operations.</p>
 *          <p>You can't cancel a recovery after you start it.</p>
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
 * import { CognitoIdentityProviderClient, StartPointInTimeRecoveryCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StartPointInTimeRecoveryCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // StartPointInTimeRecoveryRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RestoreId: "STRING_VALUE", // required
 * };
 * const command = new StartPointInTimeRecoveryCommand(input);
 * const response = await client.send(command);
 * // { // StartPointInTimeRecoveryResponse
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
 * @param StartPointInTimeRecoveryCommandInput - {@link StartPointInTimeRecoveryCommandInput}
 * @returns {@link StartPointInTimeRecoveryCommandOutput}
 * @see {@link StartPointInTimeRecoveryCommandInput} for command's `input` shape.
 * @see {@link StartPointInTimeRecoveryCommandOutput} for command's `response` shape.
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
export class StartPointInTimeRecoveryCommand extends command<StartPointInTimeRecoveryCommandInput, StartPointInTimeRecoveryCommandOutput>(
  _ep0,
  _mw0,
  "StartPointInTimeRecovery",
  StartPointInTimeRecovery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPointInTimeRecoveryRequest;
      output: StartPointInTimeRecoveryResponse;
    };
    sdk: {
      input: StartPointInTimeRecoveryCommandInput;
      output: StartPointInTimeRecoveryCommandOutput;
    };
  };
}
