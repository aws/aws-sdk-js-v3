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
 * <p>Returns temporary Amazon Web Services credentials for a role that you are entitled to assume within a tenant. You can use these credentials for programmatic access with the CLI or an Amazon Web Services SDK. If you aren't entitled to the role, the request fails with an <code>AccessDeniedException</code> error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessRuntimeClient, GetRoleCredentialsCommand } from "@aws-sdk/client-account-access-runtime"; // ES Modules import
 * // const { AccountAccessRuntimeClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-account-access-runtime"); // CommonJS import
 * // import type { AccountAccessRuntimeClientConfig } from "@aws-sdk/client-account-access-runtime";
 * const config = {}; // type is AccountAccessRuntimeClientConfig
 * const client = new AccountAccessRuntimeClient(config);
 * const input = { // GetRoleCredentialsRequest
 *   tenantId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   accessType: "PROGRAMMATIC_ACCESS", // required
 *   sessionName: "STRING_VALUE",
 *   sessionDuration: Number("int"),
 * };
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleCredentialsResponse
 * //   credentialsDetails: { // CredentialsDetails Union: only one key present
 * //     programmaticAccess: { // ProgrammaticAccessDetails
 * //       accessKeyId: "STRING_VALUE", // required
 * //       secretAccessKey: "STRING_VALUE", // required
 * //       sessionToken: "STRING_VALUE", // required
 * //       expiresAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleCredentialsCommandInput - {@link GetRoleCredentialsCommandInput}
 * @returns {@link GetRoleCredentialsCommandOutput}
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessRuntimeClientResolvedConfig | config} for AccountAccessRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are authenticated but not authorized to perform the requested action, such as assuming a role that you aren't entitled to. This error returns an HTTP 403 status code.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request. If the problem persists, contact Amazon Web Services Support. This error returns an HTTP 500 status code.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Reduce your request rate, and then retry the request. This error returns an HTTP 429 status code.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The bearer token is missing, invalid, or expired. Obtain a new token, and then retry the request. This error returns an HTTP 401 status code.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is missing a required parameter, or a parameter value doesn't satisfy its constraints, such as its length or pattern. Correct the input, and then retry the request. This error returns an HTTP 400 status code.</p>
 *
 * @throws {@link AccountAccessRuntimeServiceException}
 * <p>Base exception class for all service exceptions from AccountAccessRuntime service.</p>
 *
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
