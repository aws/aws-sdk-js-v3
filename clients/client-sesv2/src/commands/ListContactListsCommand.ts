// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactListsRequest, ListContactListsResponse } from "../models/models_0";
import { de_ListContactListsCommand, se_ListContactListsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactListsCommand}.
 */
export interface ListContactListsCommandInput extends ListContactListsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactListsCommand}.
 */
export interface ListContactListsCommandOutput extends ListContactListsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the contact lists available.</p>
 *          <p>If your output includes a "NextToken" field with a string value, this indicates there may be additional
 *             contacts on the filtered list - regardless of the number of contacts returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListContactListsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListContactListsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListContactListsRequest
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContactListsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactListsResponse
 * //   ContactLists: [ // ListOfContactLists
 * //     { // ContactList
 * //       ContactListName: "STRING_VALUE",
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactListsCommandInput - {@link ListContactListsCommandInput}
 * @returns {@link ListContactListsCommandOutput}
 * @see {@link ListContactListsCommandInput} for command's `input` shape.
 * @see {@link ListContactListsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class ListContactListsCommand extends $Command
  .classBuilder<
    ListContactListsCommandInput,
    ListContactListsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "ListContactLists", {})
  .n("SESv2Client", "ListContactListsCommand")
  .f(void 0, void 0)
  .ser(se_ListContactListsCommand)
  .de(de_ListContactListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactListsRequest;
      output: ListContactListsResponse;
    };
    sdk: {
      input: ListContactListsCommandInput;
      output: ListContactListsCommandOutput;
    };
  };
}
