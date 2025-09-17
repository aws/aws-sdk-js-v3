// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  GetArchiveSearchResultsRequest,
  GetArchiveSearchResultsResponse,
  GetArchiveSearchResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetArchiveSearchResultsCommand, se_GetArchiveSearchResultsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveSearchResultsCommand}.
 */
export interface GetArchiveSearchResultsCommandInput extends GetArchiveSearchResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveSearchResultsCommand}.
 */
export interface GetArchiveSearchResultsCommandOutput extends GetArchiveSearchResultsResponse, __MetadataBearer {}

/**
 * <p>Returns the results of a completed email archive search job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveSearchResultsCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveSearchResultsCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveSearchResultsRequest
 *   SearchId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveSearchResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveSearchResultsResponse
 * //   Rows: [ // RowsList
 * //     { // Row
 * //       ArchivedMessageId: "STRING_VALUE",
 * //       ReceivedTimestamp: new Date("TIMESTAMP"),
 * //       Date: "STRING_VALUE",
 * //       To: "STRING_VALUE",
 * //       From: "STRING_VALUE",
 * //       Cc: "STRING_VALUE",
 * //       Subject: "STRING_VALUE",
 * //       MessageId: "STRING_VALUE",
 * //       HasAttachments: true || false,
 * //       ReceivedHeaders: [ // EmailReceivedHeadersList
 * //         "STRING_VALUE",
 * //       ],
 * //       InReplyTo: "STRING_VALUE",
 * //       XMailer: "STRING_VALUE",
 * //       XOriginalMailer: "STRING_VALUE",
 * //       XPriority: "STRING_VALUE",
 * //       IngressPointId: "STRING_VALUE",
 * //       SenderHostname: "STRING_VALUE",
 * //       SenderIpAddress: "STRING_VALUE",
 * //       Envelope: { // Envelope
 * //         Helo: "STRING_VALUE",
 * //         From: "STRING_VALUE",
 * //         To: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetArchiveSearchResultsCommandInput - {@link GetArchiveSearchResultsCommandInput}
 * @returns {@link GetArchiveSearchResultsCommandOutput}
 * @see {@link GetArchiveSearchResultsCommandInput} for command's `input` shape.
 * @see {@link GetArchiveSearchResultsCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
export class GetArchiveSearchResultsCommand extends $Command
  .classBuilder<
    GetArchiveSearchResultsCommandInput,
    GetArchiveSearchResultsCommandOutput,
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
  .s("MailManagerSvc", "GetArchiveSearchResults", {})
  .n("MailManagerClient", "GetArchiveSearchResultsCommand")
  .f(void 0, GetArchiveSearchResultsResponseFilterSensitiveLog)
  .ser(se_GetArchiveSearchResultsCommand)
  .de(de_GetArchiveSearchResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveSearchResultsRequest;
      output: GetArchiveSearchResultsResponse;
    };
    sdk: {
      input: GetArchiveSearchResultsCommandInput;
      output: GetArchiveSearchResultsCommandOutput;
    };
  };
}
