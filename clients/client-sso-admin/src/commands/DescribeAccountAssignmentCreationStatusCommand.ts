// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
} from "../models/models_0";
import { DescribeAccountAssignmentCreationStatus$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAssignmentCreationStatusCommand}.
 */
export interface DescribeAccountAssignmentCreationStatusCommandInput extends DescribeAccountAssignmentCreationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAssignmentCreationStatusCommand}.
 */
export interface DescribeAccountAssignmentCreationStatusCommandOutput extends DescribeAccountAssignmentCreationStatusResponse, __MetadataBearer {}

/**
 * <p>Describes the status of the assignment creation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeAccountAssignmentCreationStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountAssignmentCreationRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAssignmentCreationStatusResponse
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
 * @param DescribeAccountAssignmentCreationStatusCommandInput - {@link DescribeAccountAssignmentCreationStatusCommandInput}
 * @returns {@link DescribeAccountAssignmentCreationStatusCommandOutput}
 * @see {@link DescribeAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribeAccountAssignmentCreationStatusCommand extends $Command
  .classBuilder<
    DescribeAccountAssignmentCreationStatusCommandInput,
    DescribeAccountAssignmentCreationStatusCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribeAccountAssignmentCreationStatus", {})
  .n("SSOAdminClient", "DescribeAccountAssignmentCreationStatusCommand")
  .sc(DescribeAccountAssignmentCreationStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountAssignmentCreationStatusRequest;
      output: DescribeAccountAssignmentCreationStatusResponse;
    };
    sdk: {
      input: DescribeAccountAssignmentCreationStatusCommandInput;
      output: DescribeAccountAssignmentCreationStatusCommandOutput;
    };
  };
}
