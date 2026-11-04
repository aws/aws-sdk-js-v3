// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRoleCredentialsRequest, GetRoleCredentialsResponse } from "../models/models_0";
import { GetRoleCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the STS short-term credentials for a given role name that is assigned to the user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * // import type { SSOClientConfig } from "@aws-sdk/client-sso";
 * const config = {}; // type is SSOClientConfig
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
 *
 * Indicates that a problem occurred with the input to the request. For example, a required parameter might be missing or out of range.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Indicates that the request is being made too frequently and is more than what the server can handle.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * Indicates that the request is not authorized. This can happen due to an invalid access token in the request.
 *
 * @throws {@link SSOServiceException}
 *
 * Base exception class for all service exceptions from SSO service.
 *
 * @public
 */
export class GetRoleCredentialsCommand extends command<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetRoleCredentials",
  GetRoleCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoleCredentialsRequest;
      output: GetRoleCredentialsResponse;
    };
    sdk: {
      input: GetRoleCredentialsCommandInput;
      output: GetRoleCredentialsCommandOutput;
    };
  };
}
