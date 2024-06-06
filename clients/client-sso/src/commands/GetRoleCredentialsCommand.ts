// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRoleCredentialsRequest,
  GetRoleCredentialsRequestFilterSensitiveLog,
  GetRoleCredentialsResponse,
  GetRoleCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRoleCredentialsCommand, se_GetRoleCredentialsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandInput extends GetRoleCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandOutput extends GetRoleCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // GetRoleCredentialsRequest
 *   roleName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleCredentialsResponse
 * //   roleCredentials: { // RoleCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleCredentialsCommandInput - {@link GetRoleCredentialsCommandInput}
 * @returns {@link GetRoleCredentialsCommandOutput}
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 * @public
 */
export class GetRoleCredentialsCommand extends $Command
  .classBuilder<
    GetRoleCredentialsCommandInput,
    GetRoleCredentialsCommandOutput,
    SSOClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBPortalService", "GetRoleCredentials", {})
  .n("SSOClient", "GetRoleCredentialsCommand")
  .f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog)
  .ser(se_GetRoleCredentialsCommand)
  .de(de_GetRoleCredentialsCommand)
  .build() {}
