// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListArchiveSearchesRequest, ListArchiveSearchesResponse } from "../models/models_0";
import { de_ListArchiveSearchesCommand, se_ListArchiveSearchesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchiveSearchesCommand}.
 */
export interface ListArchiveSearchesCommandInput extends ListArchiveSearchesRequest {}
/**
 * @public
 *
 * The output of {@link ListArchiveSearchesCommand}.
 */
export interface ListArchiveSearchesCommandOutput extends ListArchiveSearchesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of email archive search jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListArchiveSearchesCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListArchiveSearchesCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // ListArchiveSearchesRequest
 *   ArchiveId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListArchiveSearchesCommand(input);
 * const response = await client.send(command);
 * // { // ListArchiveSearchesResponse
 * //   Searches: [ // SearchSummaryList
 * //     { // SearchSummary
 * //       SearchId: "STRING_VALUE",
 * //       Status: { // SearchStatus
 * //         SubmissionTimestamp: new Date("TIMESTAMP"),
 * //         CompletionTimestamp: new Date("TIMESTAMP"),
 * //         State: "QUEUED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchiveSearchesCommandInput - {@link ListArchiveSearchesCommandInput}
 * @returns {@link ListArchiveSearchesCommandOutput}
 * @see {@link ListArchiveSearchesCommandInput} for command's `input` shape.
 * @see {@link ListArchiveSearchesCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class ListArchiveSearchesCommand extends $Command
  .classBuilder<
    ListArchiveSearchesCommandInput,
    ListArchiveSearchesCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "ListArchiveSearches", {})
  .n("MailManagerClient", "ListArchiveSearchesCommand")
  .f(void 0, void 0)
  .ser(se_ListArchiveSearchesCommand)
  .de(de_ListArchiveSearchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArchiveSearchesRequest;
      output: ListArchiveSearchesResponse;
    };
    sdk: {
      input: ListArchiveSearchesCommandInput;
      output: ListArchiveSearchesCommandOutput;
    };
  };
}
