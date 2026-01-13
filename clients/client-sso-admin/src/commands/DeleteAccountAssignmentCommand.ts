// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAccountAssignmentRequest, DeleteAccountAssignmentResponse } from "../models/models_0";
import { DeleteAccountAssignment$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountAssignmentCommand}.
 */
export interface DeleteAccountAssignmentCommandInput extends DeleteAccountAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountAssignmentCommand}.
 */
export interface DeleteAccountAssignmentCommandOutput extends DeleteAccountAssignmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentDeletionStatus</code> to describe the status of an assignment deletion request.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DeleteAccountAssignmentRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   TargetId: "STRING_VALUE", // required
 *   TargetType: "AWS_ACCOUNT", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   PrincipalId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountAssignmentResponse
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
 * @param DeleteAccountAssignmentCommandInput - {@link DeleteAccountAssignmentCommandInput}
 * @returns {@link DeleteAccountAssignmentCommandOutput}
 * @see {@link DeleteAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class DeleteAccountAssignmentCommand extends $Command
  .classBuilder<
    DeleteAccountAssignmentCommandInput,
    DeleteAccountAssignmentCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DeleteAccountAssignment", {})
  .n("SSOAdminClient", "DeleteAccountAssignmentCommand")
  .sc(DeleteAccountAssignment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountAssignmentRequest;
      output: DeleteAccountAssignmentResponse;
    };
    sdk: {
      input: DeleteAccountAssignmentCommandInput;
      output: DeleteAccountAssignmentCommandOutput;
    };
  };
}
