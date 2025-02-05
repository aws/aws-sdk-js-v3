// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInlinePolicyForPermissionSetRequest, GetInlinePolicyForPermissionSetResponse } from "../models/models_0";
import {
  de_GetInlinePolicyForPermissionSetCommand,
  se_GetInlinePolicyForPermissionSetCommand,
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
 * The input for {@link GetInlinePolicyForPermissionSetCommand}.
 */
export interface GetInlinePolicyForPermissionSetCommandInput extends GetInlinePolicyForPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link GetInlinePolicyForPermissionSetCommand}.
 */
export interface GetInlinePolicyForPermissionSetCommandOutput
  extends GetInlinePolicyForPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Obtains the inline policy assigned to the permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSOAdminClient(config);
 * const input = { // GetInlinePolicyForPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new GetInlinePolicyForPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // GetInlinePolicyForPermissionSetResponse
 * //   InlinePolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInlinePolicyForPermissionSetCommandInput - {@link GetInlinePolicyForPermissionSetCommandInput}
 * @returns {@link GetInlinePolicyForPermissionSetCommandOutput}
 * @see {@link GetInlinePolicyForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetInlinePolicyForPermissionSetCommandOutput} for command's `response` shape.
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
export class GetInlinePolicyForPermissionSetCommand extends $Command
  .classBuilder<
    GetInlinePolicyForPermissionSetCommandInput,
    GetInlinePolicyForPermissionSetCommandOutput,
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
  .s("SWBExternalService", "GetInlinePolicyForPermissionSet", {})
  .n("SSOAdminClient", "GetInlinePolicyForPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_GetInlinePolicyForPermissionSetCommand)
  .de(de_GetInlinePolicyForPermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInlinePolicyForPermissionSetRequest;
      output: GetInlinePolicyForPermissionSetResponse;
    };
    sdk: {
      input: GetInlinePolicyForPermissionSetCommandInput;
      output: GetInlinePolicyForPermissionSetCommandOutput;
    };
  };
}
