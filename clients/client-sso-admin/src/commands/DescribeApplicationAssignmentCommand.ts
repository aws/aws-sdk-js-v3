// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationAssignmentRequest, DescribeApplicationAssignmentResponse } from "../models/models_0";
import { DescribeApplicationAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeApplicationAssignmentCommandOutput extends DescribeApplicationAssignmentResponse, __MetadataBearer {}

/**
 * Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
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
export class DescribeApplicationAssignmentCommand extends command<DescribeApplicationAssignmentCommandInput, DescribeApplicationAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationAssignment",
  DescribeApplicationAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationAssignmentRequest;
      output: DescribeApplicationAssignmentResponse;
    };
    sdk: {
      input: DescribeApplicationAssignmentCommandInput;
      output: DescribeApplicationAssignmentCommandOutput;
    };
  };
}
