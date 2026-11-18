// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSessionsInput, ListSessionsOutput } from "../models/models_0";
import { ListSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsInput {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsOutput, __MetadataBearer {}

/**
 * Lists sign-in sessions for an IAM identity in your account. If you omit principalArn, the operation lists the
 * caller's own sessions. Specify a user or role ARN to list that identity's sessions, or specify
 * arn:aws:iam::\{account-id\}:* to list all sessions in the account. Filters are combined with a logical AND.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, ListSessionsCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, ListSessionsCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // ListSessionsInput
 *   principalArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "REVOKED",
 *   clientId: "STRING_VALUE",
 *   issuedAfter: Number("long"),
 *   issuedBefore: Number("long"),
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsOutput
 * //   items: [ // SessionSummaryList // required
 * //     { // Session
 * //       sessionArn: "STRING_VALUE", // required
 * //       principalArn: "STRING_VALUE", // required
 * //       role: "STRING_VALUE",
 * //       status: "ACTIVE" || "REVOKED",
 * //       issuedAt: Number("long"), // required
 * //       expiresAt: Number("long"), // required
 * //       clientId: "STRING_VALUE",
 * //       clientType: "CLI" || "MCP",
 * //       resource: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
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
 * @example List your own sessions
 * ```javascript
 * // Lists the caller's sessions when principalArn is omitted.
 * const input = { /* empty *\/ };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       clientId: "arn:aws:signin:::devtools/same-device",
 *       clientType: "CLI",
 *       expiresAt: 1794431207,
 *       issuedAt: 1793825807,
 *       principalArn: "arn:aws:iam::123456789012:role/Developer",
 *       role: "arn:aws:iam::123456789012:role/Developer",
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7",
 *       status: "ACTIVE"
 *     },
 *     {
 *       clientId: "arn:aws:signin:::devtools/same-device",
 *       clientType: "CLI",
 *       expiresAt: 1794431212,
 *       issuedAt: 1793824607,
 *       principalArn: "arn:aws:iam::123456789012:role/Developer",
 *       role: "arn:aws:iam::123456789012:role/Developer",
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/4c63f231-2128-42cf-aa83-83589f9a0df2",
 *       status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List active sessions one page at a time
 * ```javascript
 * // Returns one active session and a token to request the next page.
 * const input = {
 *   maxResults: 1,
 *   status: "ACTIVE"
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       clientId: "arn:aws:signin:::devtools/same-device",
 *       clientType: "CLI",
 *       expiresAt: 1794431207,
 *       issuedAt: 1793825807,
 *       principalArn: "arn:aws:iam::123456789012:role/Developer",
 *       role: "arn:aws:iam::123456789012:role/Developer",
 *       sessionArn: "arn:aws:signin:us-east-1:123456789012:session/3b0a6152-ba23-447d-83cf-b3b3cc7b95f7",
 *       status: "ACTIVE"
 *     }
 *   ],
 *   nextToken: "AAMA-EXAMPLE-NEXT-TOKEN"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSessionsCommand extends command<ListSessionsCommandInput, ListSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSessions",
  ListSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsInput;
      output: ListSessionsOutput;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
