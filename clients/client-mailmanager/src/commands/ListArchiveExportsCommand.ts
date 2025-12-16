// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { ListArchiveExportsRequest, ListArchiveExportsResponse } from "../models/models_0";
import { ListArchiveExports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArchiveExportsCommand}.
 */
export interface ListArchiveExportsCommandInput extends ListArchiveExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListArchiveExportsCommand}.
 */
export interface ListArchiveExportsCommandOutput extends ListArchiveExportsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of email archive export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListArchiveExportsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListArchiveExportsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListArchiveExportsRequest
 *   ArchiveId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListArchiveExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListArchiveExportsResponse
 * //   Exports: [ // ExportSummaryList
 * //     { // ExportSummary
 * //       ExportId: "STRING_VALUE",
 * //       Status: { // ExportStatus
 * //         SubmissionTimestamp: new Date("TIMESTAMP"),
 * //         CompletionTimestamp: new Date("TIMESTAMP"),
 * //         State: "QUEUED" || "PREPROCESSING" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArchiveExportsCommandInput - {@link ListArchiveExportsCommandInput}
 * @returns {@link ListArchiveExportsCommandOutput}
 * @see {@link ListArchiveExportsCommandInput} for command's `input` shape.
 * @see {@link ListArchiveExportsCommandOutput} for command's `response` shape.
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
export class ListArchiveExportsCommand extends $Command
  .classBuilder<
    ListArchiveExportsCommandInput,
    ListArchiveExportsCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListArchiveExports", {})
  .n("MailManagerClient", "ListArchiveExportsCommand")
  .sc(ListArchiveExports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArchiveExportsRequest;
      output: ListArchiveExportsResponse;
    };
    sdk: {
      input: ListArchiveExportsCommandInput;
      output: ListArchiveExportsCommandOutput;
    };
  };
}
