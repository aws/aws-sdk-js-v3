// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePermissionSetRequest, DescribePermissionSetResponse } from "../models/models_0";
import { DescribePermissionSet } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the details of the permission set.</p>
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
export class DescribePermissionSetCommand extends $Command
  .classBuilder<
    DescribePermissionSetCommandInput,
    DescribePermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "DescribePermissionSet", {})
  .n("SSOAdminClient", "DescribePermissionSetCommand")
  .sc(DescribePermissionSet)
  .build() {
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
