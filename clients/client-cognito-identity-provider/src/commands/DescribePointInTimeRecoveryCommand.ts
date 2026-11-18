// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePointInTimeRecoveryRequest, DescribePointInTimeRecoveryResponse } from "../models/models_0";
import { DescribePointInTimeRecovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePointInTimeRecoveryCommand}.
 */
export interface DescribePointInTimeRecoveryCommandInput extends DescribePointInTimeRecoveryRequest {}
/**
 * @public
 *
 * The output of {@link DescribePointInTimeRecoveryCommand}.
 */
export interface DescribePointInTimeRecoveryCommandOutput extends DescribePointInTimeRecoveryResponse, __MetadataBearer {}

/**
 * <p>Returns details about a point-in-time recovery of a user pool, including its status
 *             and the point in time that it restores the user pool to. After Amazon Cognito generates the
 *             recovery preview, the response also includes the number of entities that the recovery
 *             creates, updates, and deletes. Review the preview before you apply the recovery with a
 *                  request or discard it with a  request.</p>
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
 * import { CognitoIdentityProviderClient, DescribePointInTimeRecoveryCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribePointInTimeRecoveryCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribePointInTimeRecoveryRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   RestoreId: "STRING_VALUE", // required
 * };
 * const command = new DescribePointInTimeRecoveryCommand(input);
 * const response = await client.send(command);
 * // { // DescribePointInTimeRecoveryResponse
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
 * @param DescribePointInTimeRecoveryCommandInput - {@link DescribePointInTimeRecoveryCommandInput}
 * @returns {@link DescribePointInTimeRecoveryCommandOutput}
 * @see {@link DescribePointInTimeRecoveryCommandInput} for command's `input` shape.
 * @see {@link DescribePointInTimeRecoveryCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
export class DescribePointInTimeRecoveryCommand extends command<DescribePointInTimeRecoveryCommandInput, DescribePointInTimeRecoveryCommandOutput>(
  _ep0,
  _mw0,
  "DescribePointInTimeRecovery",
  DescribePointInTimeRecovery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePointInTimeRecoveryRequest;
      output: DescribePointInTimeRecoveryResponse;
    };
    sdk: {
      input: DescribePointInTimeRecoveryCommandInput;
      output: DescribePointInTimeRecoveryCommandOutput;
    };
  };
}
