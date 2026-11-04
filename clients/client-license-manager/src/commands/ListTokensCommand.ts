// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTokensRequest, ListTokensResponse } from "../models/models_0";
import { ListTokens$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTokensCommand}.
 */
export interface ListTokensCommandInput extends ListTokensRequest {}
/**
 * @public
 *
 * The output of {@link ListTokensCommand}.
 */
export interface ListTokensCommandOutput extends ListTokensResponse, __MetadataBearer {}

/**
 * Lists your tokens.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListTokensCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListTokensCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListTokensRequest
 *   TokenIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTokensCommand(input);
 * const response = await client.send(command);
 * // { // ListTokensResponse
 * //   Tokens: [ // TokenList
 * //     { // TokenData
 * //       TokenId: "STRING_VALUE",
 * //       TokenType: "STRING_VALUE",
 * //       LicenseArn: "STRING_VALUE",
 * //       ExpirationTime: "STRING_VALUE",
 * //       TokenProperties: [ // MaxSize3StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       RoleArns: [ // ArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTokensCommandInput - {@link ListTokensCommandInput}
 * @returns {@link ListTokensCommandOutput}
 * @see {@link ListTokensCommandInput} for command's `input` shape.
 * @see {@link ListTokensCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class ListTokensCommand extends command<ListTokensCommandInput, ListTokensCommandOutput>(
  _ep0,
  _mw0,
  "ListTokens",
  ListTokens$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTokensRequest;
      output: ListTokensResponse;
    };
    sdk: {
      input: ListTokensCommandInput;
      output: ListTokensCommandOutput;
    };
  };
}
