// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
} from "../models/models_0";
import { DescribeAccountAssignmentDeletionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountAssignmentDeletionStatusCommand}.
 */
export interface DescribeAccountAssignmentDeletionStatusCommandInput extends DescribeAccountAssignmentDeletionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAssignmentDeletionStatusCommand}.
 */
export interface DescribeAccountAssignmentDeletionStatusCommandOutput extends DescribeAccountAssignmentDeletionStatusResponse, __MetadataBearer {}

/**
 * Describes the status of the assignment deletion request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeAccountAssignmentDeletionStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountAssignmentDeletionRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAssignmentDeletionStatusResponse
 * //   AccountAssignmentDeletionStatus: { // AccountAssignmentOperationStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     TargetId: "STRING_VALUE",
 * //     TargetType: "AWS_ACCOUNT",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     PrincipalType: "USER" || "GROUP",
 * //     PrincipalId: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountAssignmentDeletionStatusCommandInput - {@link DescribeAccountAssignmentDeletionStatusCommandInput}
 * @returns {@link DescribeAccountAssignmentDeletionStatusCommandOutput}
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeAccountAssignmentDeletionStatusCommand extends command<DescribeAccountAssignmentDeletionStatusCommandInput, DescribeAccountAssignmentDeletionStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountAssignmentDeletionStatus",
  DescribeAccountAssignmentDeletionStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountAssignmentDeletionStatusRequest;
      output: DescribeAccountAssignmentDeletionStatusResponse;
    };
    sdk: {
      input: DescribeAccountAssignmentDeletionStatusCommandInput;
      output: DescribeAccountAssignmentDeletionStatusCommandOutput;
    };
  };
}
