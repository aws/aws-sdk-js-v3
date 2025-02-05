// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListAllowListsRequest, ListAllowListsResponse } from "../models/models_0";
import { de_ListAllowListsCommand, se_ListAllowListsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAllowListsCommand}.
 */
export interface ListAllowListsCommandInput extends ListAllowListsRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowListsCommand}.
 */
export interface ListAllowListsCommandOutput extends ListAllowListsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about all the allow lists for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListAllowListsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListAllowListsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // ListAllowListsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAllowListsCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowListsResponse
 * //   allowLists: [ // __listOfAllowListSummary
 * //     { // AllowListSummary
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAllowListsCommandInput - {@link ListAllowListsCommandInput}
 * @returns {@link ListAllowListsCommandOutput}
 * @see {@link ListAllowListsCommandInput} for command's `input` shape.
 * @see {@link ListAllowListsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 * @public
 */
export class ListAllowListsCommand extends $Command
  .classBuilder<
    ListAllowListsCommandInput,
    ListAllowListsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "ListAllowLists", {})
  .n("Macie2Client", "ListAllowListsCommand")
  .f(void 0, void 0)
  .ser(se_ListAllowListsCommand)
  .de(de_ListAllowListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowListsRequest;
      output: ListAllowListsResponse;
    };
    sdk: {
      input: ListAllowListsCommandInput;
      output: ListAllowListsCommandOutput;
    };
  };
}
