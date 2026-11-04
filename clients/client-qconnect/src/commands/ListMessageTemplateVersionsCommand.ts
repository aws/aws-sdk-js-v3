// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMessageTemplateVersionsRequest, ListMessageTemplateVersionsResponse } from "../models/models_1";
import { ListMessageTemplateVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMessageTemplateVersionsCommand}.
 */
export interface ListMessageTemplateVersionsCommandInput extends ListMessageTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMessageTemplateVersionsCommand}.
 */
export interface ListMessageTemplateVersionsCommandOutput extends ListMessageTemplateVersionsResponse, __MetadataBearer {}

/**
 * Lists all the available versions for the specified Amazon Q in Connect message template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListMessageTemplateVersionsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListMessageTemplateVersionsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListMessageTemplateVersionsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMessageTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMessageTemplateVersionsResponse
 * //   messageTemplateVersionSummaries: [ // MessageTemplateVersionSummaryList // required
 * //     { // MessageTemplateVersionSummary
 * //       messageTemplateArn: "STRING_VALUE", // required
 * //       messageTemplateId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       channel: "STRING_VALUE",
 * //       channelSubtype: "STRING_VALUE", // required
 * //       isActive: true || false, // required
 * //       versionNumber: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMessageTemplateVersionsCommandInput - {@link ListMessageTemplateVersionsCommandInput}
 * @returns {@link ListMessageTemplateVersionsCommandOutput}
 * @see {@link ListMessageTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListMessageTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class ListMessageTemplateVersionsCommand extends command<ListMessageTemplateVersionsCommandInput, ListMessageTemplateVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListMessageTemplateVersions",
  ListMessageTemplateVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMessageTemplateVersionsRequest;
      output: ListMessageTemplateVersionsResponse;
    };
    sdk: {
      input: ListMessageTemplateVersionsCommandInput;
      output: ListMessageTemplateVersionsCommandOutput;
    };
  };
}
