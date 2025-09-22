// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
} from "../models/models_0";
import { GetPermissionsBoundaryForPermissionSet } from "../schemas/schemas_13_Set";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandInput
  extends GetPermissionsBoundaryForPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandOutput
  extends GetPermissionsBoundaryForPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Obtains the permissions boundary for a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetPermissionsBoundaryForPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionsBoundaryForPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionsBoundaryForPermissionSetResponse
 * //   PermissionsBoundary: { // PermissionsBoundary
 * //     CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 * //       Name: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE",
 * //     },
 * //     ManagedPolicyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPermissionsBoundaryForPermissionSetCommandInput - {@link GetPermissionsBoundaryForPermissionSetCommandInput}
 * @returns {@link GetPermissionsBoundaryForPermissionSetCommandOutput}
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandOutput} for command's `response` shape.
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
export class GetPermissionsBoundaryForPermissionSetCommand extends $Command
  .classBuilder<
    GetPermissionsBoundaryForPermissionSetCommandInput,
    GetPermissionsBoundaryForPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "GetPermissionsBoundaryForPermissionSet", {})
  .n("SSOAdminClient", "GetPermissionsBoundaryForPermissionSetCommand")
  .sc(GetPermissionsBoundaryForPermissionSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPermissionsBoundaryForPermissionSetRequest;
      output: GetPermissionsBoundaryForPermissionSetResponse;
    };
    sdk: {
      input: GetPermissionsBoundaryForPermissionSetCommandInput;
      output: GetPermissionsBoundaryForPermissionSetCommandOutput;
    };
  };
}
