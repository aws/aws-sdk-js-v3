// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { ListResourcePermissionStatementsInput, ListResourcePermissionStatementsOutput } from "../models/models_0";
import { ListResourcePermissionStatements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcePermissionStatementsCommand}.
 */
export interface ListResourcePermissionStatementsCommandInput extends ListResourcePermissionStatementsInput {}
/**
 * @public
 *
 * The output of {@link ListResourcePermissionStatementsCommand}.
 */
export interface ListResourcePermissionStatementsCommandOutput extends ListResourcePermissionStatementsOutput, __MetadataBearer {}

/**
 * Retrieve all permission statements in the account's SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, ListResourcePermissionStatementsCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, ListResourcePermissionStatementsCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // ListResourcePermissionStatementsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePermissionStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePermissionStatementsOutput
 * //   permissionStatements: [ // PermissionStatementSummaries // required
 * //     { // PermissionStatementSummary
 * //       sid: "STRING_VALUE", // required
 * //       condition: { // ConditionBlock
 * //         "<keys>": { // Condition
 * //           "<keys>": [ // ConditionValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcePermissionStatementsCommandInput - {@link ListResourcePermissionStatementsCommandInput}
 * @returns {@link ListResourcePermissionStatementsCommandOutput}
 * @see {@link ListResourcePermissionStatementsCommandInput} for command's `input` shape.
 * @see {@link ListResourcePermissionStatementsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListResourcePermissionStatementsCommand extends command<ListResourcePermissionStatementsCommandInput, ListResourcePermissionStatementsCommandOutput>(
  _ep2,
  _mw0,
  "ListResourcePermissionStatements",
  ListResourcePermissionStatements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePermissionStatementsInput;
      output: ListResourcePermissionStatementsOutput;
    };
    sdk: {
      input: ListResourcePermissionStatementsCommandInput;
      output: ListResourcePermissionStatementsCommandOutput;
    };
  };
}
