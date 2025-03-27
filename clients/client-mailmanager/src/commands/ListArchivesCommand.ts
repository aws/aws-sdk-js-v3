// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
import { de_ListArchivesCommand, se_ListArchivesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandInput extends ListArchivesRequest {}
/**
 * @public
 *
 * The output of {@link ListArchivesCommand}.
 */
export interface ListArchivesCommandOutput extends ListArchivesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all email archives in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListArchivesCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListArchivesCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // ListArchivesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListArchivesCommand(input);
 * const response = await client.send(command);
 * // { // ListArchivesResponse
 * //   Archives: [ // ArchivesList // required
 * //     { // Archive
 * //       ArchiveId: "STRING_VALUE", // required
 * //       ArchiveName: "STRING_VALUE",
 * //       ArchiveState: "ACTIVE" || "PENDING_DELETION",
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchivesCommandInput - {@link ListArchivesCommandInput}
 * @returns {@link ListArchivesCommandOutput}
 * @see {@link ListArchivesCommandInput} for command's `input` shape.
 * @see {@link ListArchivesCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
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
export class ListArchivesCommand extends $Command
  .classBuilder<
    ListArchivesCommandInput,
    ListArchivesCommandOutput,
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
  .s("MailManagerSvc", "ListArchives", {})
  .n("MailManagerClient", "ListArchivesCommand")
  .f(void 0, void 0)
  .ser(se_ListArchivesCommand)
  .de(de_ListArchivesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArchivesRequest;
      output: ListArchivesResponse;
    };
    sdk: {
      input: ListArchivesCommandInput;
      output: ListArchivesCommandOutput;
    };
  };
}
