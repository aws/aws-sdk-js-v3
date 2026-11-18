// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionInput, GetSessionOutput } from "../models/models_0";
import { GetSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionInput {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionOutput, __MetadataBearer {}

/**
 * Returns the details of a single sign-in session. The session must belong to the identity specified by
 * principalArn, or to the caller if principalArn is omitted. A session that belongs to a different identity or
 * account is reported as not found.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, GetSessionCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, GetSessionCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // GetSessionInput
 *   sessionArn: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE",
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionOutput
 * //   sessionArn: "STRING_VALUE", // required
 * //   principalArn: "STRING_VALUE", // required
 * //   role: "STRING_VALUE",
 * //   status: "ACTIVE" || "REVOKED",
 * //   clientId: "STRING_VALUE",
 * //   clientType: "CLI" || "MCP",
 * //   resource: "STRING_VALUE",
 * //   issuedAt: Number("long"), // required
 * //   expiresAt: Number("long"), // required
 * //   lastUsedAt: Number("long"),
 * //   issuedInRegion: "STRING_VALUE",
 * //   originSessionArn: "STRING_VALUE",
 * //   userAgent: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @example Get one of your own sessions
 * ```javascript
 * // Returns a session owned by the caller when principalArn is omitted.
 * const input = {
 *   sessionArn: "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7"
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "arn:aws:signin:::devtools/same-device",
 *   clientType: "CLI",
 *   expiresAt: 1794431207,
 *   issuedAt: 1793825807,
 *   issuedInRegion: "us-east-1",
 *   principalArn: "arn:aws:iam::123456789012:role/Developer",
 *   role: "arn:aws:iam::123456789012:role/Developer",
 *   sessionArn: "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @example Get another identity's session as an account administrator
 * ```javascript
 * // Uses the account wildcard principal ARN to get a session owned by another IAM identity.
 * const input = {
 *   principalArn: "arn:aws:iam::123456789012:*",
 *   sessionArn: "arn:aws:signin:us-east-1:123456789012:session/5dbdd43b-4135-4c59-ad06-5ddbcc2c1d77"
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "arn:aws:signin:::devtools/same-device",
 *   clientType: "CLI",
 *   expiresAt: 1794431214,
 *   issuedAt: 1793826107,
 *   issuedInRegion: "us-east-1",
 *   principalArn: "arn:aws:iam::123456789012:role/ReadOnly",
 *   role: "arn:aws:iam::123456789012:role/ReadOnly",
 *   sessionArn: "arn:aws:signin:us-east-1:123456789012:session/5dbdd43b-4135-4c59-ad06-5ddbcc2c1d77",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSessionCommand extends command<GetSessionCommandInput, GetSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetSession",
  GetSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionInput;
      output: GetSessionOutput;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
