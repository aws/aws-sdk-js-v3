// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePermissionSetRequest, DescribePermissionSetResponse } from "../models/models_0";
import { DescribePermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePermissionSetCommand}.
 */
export interface DescribePermissionSetCommandInput extends DescribePermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribePermissionSetCommand}.
 */
export interface DescribePermissionSetCommandOutput extends DescribePermissionSetResponse, __MetadataBearer {}

/**
 * Gets the details of the permission set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribePermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribePermissionSetResponse
 * //   PermissionSet: { // PermissionSet
 * //     Name: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     SessionDuration: "STRING_VALUE",
 * //     RelayState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePermissionSetCommandInput - {@link DescribePermissionSetCommandInput}
 * @returns {@link DescribePermissionSetCommandOutput}
 * @see {@link DescribePermissionSetCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetCommandOutput} for command's `response` shape.
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
export class DescribePermissionSetCommand extends command<DescribePermissionSetCommandInput, DescribePermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "DescribePermissionSet",
  DescribePermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePermissionSetRequest;
      output: DescribePermissionSetResponse;
    };
    sdk: {
      input: DescribePermissionSetCommandInput;
      output: DescribePermissionSetCommandOutput;
    };
  };
}
