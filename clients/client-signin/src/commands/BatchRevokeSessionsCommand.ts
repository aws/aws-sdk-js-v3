// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchRevokeSessionsInput, BatchRevokeSessionsOutput } from "../models/models_0";
import { BatchRevokeSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchRevokeSessionsCommand}.
 */
export interface BatchRevokeSessionsCommandInput extends BatchRevokeSessionsInput {}
/**
 * @public
 *
 * The output of {@link BatchRevokeSessionsCommand}.
 */
export interface BatchRevokeSessionsCommandOutput extends BatchRevokeSessionsOutput, __MetadataBearer {}

/**
 * Revokes up to five sign-in sessions. A revoked session can no longer be refreshed. Revoking a session that is
 * already revoked succeeds. Each session must belong to the identity specified by principalArn, or to the caller if
 * principalArn is omitted. Failures for individual sessions are returned in the errors list and do not fail the
 * whole request.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, BatchRevokeSessionsCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, BatchRevokeSessionsCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // BatchRevokeSessionsInput
 *   principalArn: "STRING_VALUE",
 *   sessionArns: [ // SessionArnList // required
 *     "STRING_VALUE",
 *   ],
 *   reason: "STRING_VALUE",
 * };
 * const command = new BatchRevokeSessionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchRevokeSessionsOutput
 * //   revokedSessions: [ // RevokedSessionList // required
 * //     { // RevokedSession
 * //       sessionArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errors: [ // BatchRevokeSessionErrorList // required
 * //     { // BatchRevokeSessionError
 * //       sessionArn: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchRevokeSessionsCommandInput - {@link BatchRevokeSessionsCommandInput}
 * @returns {@link BatchRevokeSessionsCommandOutput}
 * @see {@link BatchRevokeSessionsCommandInput} for command's `input` shape.
 * @see {@link BatchRevokeSessionsCommandOutput} for command's `response` shape.
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
 * @example Revoke one of your own sessions
 * ```javascript
 * // Revokes a session owned by the caller and records the reason.
 * const input = {
 *   reason: "Signed out of a lost device",
 *   sessionArns: [
 *     "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7"
 *   ]
 * };
 * const command = new BatchRevokeSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   revokedSessions: [
 *     {
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Revoke another identity's session as an account administrator
 * ```javascript
 * // Uses the account wildcard principal ARN to revoke another IAM identity's session.
 * const input = {
 *   principalArn: "arn:aws:iam::123456789012:*",
 *   reason: "Revoked by account administrator",
 *   sessionArns: [
 *     "arn:aws:signin:us-east-1:123456789012:session/5dbdd43b-4135-4c59-ad06-5ddbcc2c1d77"
 *   ]
 * };
 * const command = new BatchRevokeSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   revokedSessions: [
 *     {
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/5dbdd43b-4135-4c59-ad06-5ddbcc2c1d77"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Revoke a batch of sessions with a partial failure
 * ```javascript
 * // Revokes the caller's session and reports a session that was not found in the errors list.
 * const input = {
 *   sessionArns: [
 *     "arn:aws:signin:us-east-1:123456789012:session/ac148df8-7f37-48eb-b0cf-8987fc4a55a4",
 *     "arn:aws:signin:us-east-1:123456789012:session/36b6ae9d-4fa9-40d9-8eff-eeeb4d15f79d"
 *   ]
 * };
 * const command = new BatchRevokeSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors: [
 *     {
 *       code: "ResourceNotFoundException",
 *       message: "No session found for the given sessionArn",
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/36b6ae9d-4fa9-40d9-8eff-eeeb4d15f79d"
 *     }
 *   ],
 *   revokedSessions: [
 *     {
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/ac148df8-7f37-48eb-b0cf-8987fc4a55a4"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchRevokeSessionsCommand extends command<BatchRevokeSessionsCommandInput, BatchRevokeSessionsCommandOutput>(
  _ep0,
  _mw0,
  "BatchRevokeSessions",
  BatchRevokeSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchRevokeSessionsInput;
      output: BatchRevokeSessionsOutput;
    };
    sdk: {
      input: BatchRevokeSessionsCommandInput;
      output: BatchRevokeSessionsCommandOutput;
    };
  };
}
