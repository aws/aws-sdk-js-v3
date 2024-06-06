// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeApplicationAssignmentRequest, DescribeApplicationAssignmentResponse } from "../models/models_0";
import {
  de_DescribeApplicationAssignmentCommand,
  se_DescribeApplicationAssignmentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationAssignmentCommand}.
 */
export interface DescribeApplicationAssignmentCommandInput extends DescribeApplicationAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationAssignmentCommand}.
 */
export interface DescribeApplicationAssignmentCommandOutput
  extends DescribeApplicationAssignmentResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application,
 *             the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user.
 *             Instead use <a>ListApplicationAssignmentsForPrincipal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationAssignmentRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 * };
 * const command = new DescribeApplicationAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationAssignmentResponse
 * //   PrincipalType: "USER" || "GROUP",
 * //   PrincipalId: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationAssignmentCommandInput - {@link DescribeApplicationAssignmentCommandInput}
 * @returns {@link DescribeApplicationAssignmentCommandOutput}
 * @see {@link DescribeApplicationAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 * @public
 */
export class DescribeApplicationAssignmentCommand extends $Command
  .classBuilder<
    DescribeApplicationAssignmentCommandInput,
    DescribeApplicationAssignmentCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "DescribeApplicationAssignment", {})
  .n("SSOAdminClient", "DescribeApplicationAssignmentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationAssignmentCommand)
  .de(de_DescribeApplicationAssignmentCommand)
  .build() {}
