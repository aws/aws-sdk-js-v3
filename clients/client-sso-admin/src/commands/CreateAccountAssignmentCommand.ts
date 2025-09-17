// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccountAssignmentRequest, CreateAccountAssignmentResponse } from "../models/models_0";
import { de_CreateAccountAssignmentCommand, se_CreateAccountAssignmentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountAssignmentCommand}.
 */
export interface CreateAccountAssignmentCommandInput extends CreateAccountAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAssignmentCommand}.
 */
export interface CreateAccountAssignmentCommandOutput extends CreateAccountAssignmentResponse, __MetadataBearer {}

/**
 * <p>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // CreateAccountAssignmentRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   TargetId: "STRING_VALUE", // required
 *   TargetType: "AWS_ACCOUNT", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   PrincipalId: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountAssignmentResponse
 * //   AccountAssignmentCreationStatus: { // AccountAssignmentOperationStatus
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
 * @param CreateAccountAssignmentCommandInput - {@link CreateAccountAssignmentCommandInput}
 * @returns {@link CreateAccountAssignmentCommandOutput}
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
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
export class CreateAccountAssignmentCommand extends $Command
  .classBuilder<
    CreateAccountAssignmentCommandInput,
    CreateAccountAssignmentCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "CreateAccountAssignment", {})
  .n("SSOAdminClient", "CreateAccountAssignmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccountAssignmentCommand)
  .de(de_CreateAccountAssignmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountAssignmentRequest;
      output: CreateAccountAssignmentResponse;
    };
    sdk: {
      input: CreateAccountAssignmentCommandInput;
      output: CreateAccountAssignmentCommandOutput;
    };
  };
}
