// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListTokensRequest, ListTokensResponse } from "../models/models_0";
import { de_ListTokensCommand, se_ListTokensCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists your tokens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListTokensCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListTokensCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
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
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class ListTokensCommand extends $Command
  .classBuilder<
    ListTokensCommandInput,
    ListTokensCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListTokens", {})
  .n("LicenseManagerClient", "ListTokensCommand")
  .f(void 0, void 0)
  .ser(se_ListTokensCommand)
  .de(de_ListTokensCommand)
  .build() {
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
