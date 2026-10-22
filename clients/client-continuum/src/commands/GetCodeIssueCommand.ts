// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCodeIssueInput, GetCodeIssueOutput } from "../models/models_0";
import { GetCodeIssue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCodeIssueCommand}.
 */
export interface GetCodeIssueCommandInput extends GetCodeIssueInput {}
/**
 * @public
 *
 * The output of {@link GetCodeIssueCommand}.
 */
export interface GetCodeIssueCommandOutput extends GetCodeIssueOutput, __MetadataBearer {}

/**
 * Retrieves the current state and details of an issue.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCodeIssueCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCodeIssueCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCodeIssueInput
 *   environmentId: "STRING_VALUE", // required
 *   issueId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeIssueCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeIssueOutput
 * //   issueId: "STRING_VALUE", // required
 * //   issueArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   synopsis: "STRING_VALUE", // required
 * //   severity: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //   confidence: Number("int"),
 * //   severityReasoning: "STRING_VALUE",
 * //   summary: "STRING_VALUE",
 * //   findingIds: [ // IssueFindingIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   phase: "VALIDATION" || "PRIORITIZATION" || "REMEDIATION",
 * //   statusReason: "INTERNAL_ERROR" || "REMEDIATION_FAILED",
 * //   statusMessage: "STRING_VALUE",
 * //   statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   evidenceAvailability: "NONE" || "AVAILABLE",
 * //   patchDelivery: { // IssuePatchDelivery
 * //     status: "PENDING" || "SUCCEEDED" || "FAILED" || "SKIPPED", // required
 * //     patchCount: Number("int"), // required
 * //     succeededCount: Number("int"), // required
 * //     failedCount: Number("int"), // required
 * //     failureReasons: [ // IssuePatchDeliveryFailureReasons
 * //       "ARTIFACT_READ_FAILED" || "ARTIFACT_SOURCE_MISMATCH" || "ARTIFACT_SOURCE_MISSING" || "BUILD_NOT_FOUND" || "BUILD_READ_FAILED" || "BUILD_RESULT_SCOPE_MISMATCH" || "DELIVERY_NOT_CONFIGURED" || "DELIVERY_SOURCE_KIND_CHANGED" || "DUPLICATE_LOGICAL_REPOSITORY" || "DUPLICATE_OR_INVALID_REPOSITORY" || "ENVIRONMENT_DELETED" || "ENVIRONMENT_NOT_ACTIVE" || "ENVIRONMENT_NOT_FOUND" || "ENVIRONMENT_READ_FAILED" || "S3_ACCESS_DENIED" || "S3_SOURCE_PREFIX_OVERLAP" || "SOURCE_INTEGRATION_UNRESOLVED" || "SOURCE_INTEGRATION_READ_FAILED" || "SOURCE_INTEGRATION_INVALID" || "SOURCE_INTEGRATION_CHANGED" || "EXPORT_CREDENTIALS_MISSING" || "EXPORT_CREDENTIAL_EXPIRY_INVALID" || "EXPORT_DESTINATION_INVALID" || "EXPORT_EXISTING_OBJECT_MISMATCH" || "EXPORT_PUT_FAILED" || "EXPORT_RECONCILIATION_READ_FAILED" || "EXPORT_ROLE_ASSUMPTION_FAILED" || "GITHUB_ACCESS_DENIED" || "GITHUB_BASE_NOT_FOUND" || "GITHUB_BRANCH_CONFLICT" || "GITHUB_NOT_FOUND" || "GITHUB_RATE_LIMITED" || "GITHUB_REPOSITORY_CHANGED" || "GITHUB_REPOSITORY_NOT_FOUND" || "GITHUB_REQUEST_FAILED" || "GITHUB_REQUEST_REJECTED" || "GITHUB_RESPONSE_INVALID" || "GREEN_ATTEMPT_NOT_SUCCESSFUL" || "GREEN_COMPLETION_NOT_OBSERVED" || "PATCH_NOT_SELECTED" || "INCOMPLETE_SOURCE_REFERENCE" || "INVALID_ARCHIVE_DIGEST" || "INVALID_ARTIFACT_SOURCE" || "INVALID_COMPLETED_MANIFEST" || "INVALID_EXPORT_RECEIPT" || "INVALID_GITHUB_PROVENANCE" || "INVALID_S3_DESTINATION" || "INVALID_SERVICE_RECEIPT" || "INVALID_SOURCE_INVENTORY" || "INVALID_SOURCE_MANIFEST" || "INVALID_SOURCE_REFERENCE" || "ISSUE_INTEGRITY_FAILURE" || "ISSUE_NOT_FOUND" || "MANIFEST_INVENTORY_MISMATCH" || "MANIFEST_PROVENANCE_CHANGED" || "MANIFEST_REPOSITORY_SET_MISMATCH" || "MANIFEST_SCOPE_OR_VERSION_MISMATCH" || "MISSING_BUILD_RESULT" || "MISSING_COMPLETED_MANIFEST" || "MISSING_RESULT_DIGEST" || "MISSING_SOURCE_MANIFEST" || "MISSING_SOURCE_TARGET" || "PATCH_NOT_APPLICABLE" || "PATCH_STORAGE_IDENTITY_MISSING" || "PATCH_UNSUPPORTED" || "PUBLICATION_OUTCOME_UNKNOWN_AFTER_RETRY_LIMIT" || "PUBLISHER_DEADLINE_EXCEEDED" || "RESULT_COMPLETED_MANIFEST_MISMATCH" || "RESULT_SOURCE_BINDING_MISMATCH" || "SERVICE_COPY_DIGEST_MISMATCH" || "SERVICE_OBJECT_READ_FAILED" || "SERVICE_OBJECT_TOO_LARGE" || "SERVICE_RECEIPT_OUTSIDE_ISSUE" || "SOURCE_OBJECT_DIGEST_MISMATCH" || "SOURCE_REFERENCE_OUTSIDE_BUILD" || "SOURCE_TARGET_BUILD_MISMATCH" || "UNKNOWN_REPOSITORY" || "UNKNOWN_SOURCE_PROVIDER" || "UNSUPPORTED_ENVIRONMENT_SCHEMA" || "github_destination_not_enabled" || "patch_creation_policy_disabled",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCodeIssueCommandInput - {@link GetCodeIssueCommandInput}
 * @returns {@link GetCodeIssueCommandOutput}
 * @see {@link GetCodeIssueCommandInput} for command's `input` shape.
 * @see {@link GetCodeIssueCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class GetCodeIssueCommand extends command<GetCodeIssueCommandInput, GetCodeIssueCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeIssue",
  GetCodeIssue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeIssueInput;
      output: GetCodeIssueOutput;
    };
    sdk: {
      input: GetCodeIssueCommandInput;
      output: GetCodeIssueCommandOutput;
    };
  };
}
