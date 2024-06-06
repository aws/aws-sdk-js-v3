// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetApplicationAccessScopeRequest, GetApplicationAccessScopeResponse } from "../models/models_0";
import { de_GetApplicationAccessScopeCommand, se_GetApplicationAccessScopeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationAccessScopeCommand}.
 */
export interface GetApplicationAccessScopeCommandInput extends GetApplicationAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationAccessScopeCommand}.
 */
export interface GetApplicationAccessScopeCommandOutput extends GetApplicationAccessScopeResponse, __MetadataBearer {}

/**
 * <p>Retrieves the authorized targets for an IAM Identity Center access scope for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationAccessScopeCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationAccessScopeCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationAccessScopeRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   Scope: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationAccessScopeResponse
 * //   Scope: "STRING_VALUE", // required
 * //   AuthorizedTargets: [ // ScopeTargets
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationAccessScopeCommandInput - {@link GetApplicationAccessScopeCommandInput}
 * @returns {@link GetApplicationAccessScopeCommandOutput}
 * @see {@link GetApplicationAccessScopeCommandInput} for command's `input` shape.
 * @see {@link GetApplicationAccessScopeCommandOutput} for command's `response` shape.
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
export class GetApplicationAccessScopeCommand extends $Command
  .classBuilder<
    GetApplicationAccessScopeCommandInput,
    GetApplicationAccessScopeCommandOutput,
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
  .s("SWBExternalService", "GetApplicationAccessScope", {})
  .n("SSOAdminClient", "GetApplicationAccessScopeCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationAccessScopeCommand)
  .de(de_GetApplicationAccessScopeCommand)
  .build() {}
