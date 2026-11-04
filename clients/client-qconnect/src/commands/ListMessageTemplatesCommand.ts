// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMessageTemplatesRequest, ListMessageTemplatesResponse } from "../models/models_1";
import { ListMessageTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMessageTemplatesCommand}.
 */
export interface ListMessageTemplatesCommandInput extends ListMessageTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListMessageTemplatesCommand}.
 */
export interface ListMessageTemplatesCommandOutput extends ListMessageTemplatesResponse, __MetadataBearer {}

/**
 * Lists all the available Amazon Q in Connect message templates for the specified knowledge base.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListMessageTemplatesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListMessageTemplatesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // ListMessageTemplatesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new ListMessageTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListMessageTemplatesResponse
 * //   messageTemplateSummaries: [ // MessageTemplateSummaryList // required
 * //     { // MessageTemplateSummary
 * //       messageTemplateArn: "STRING_VALUE", // required
 * //       messageTemplateId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       channel: "STRING_VALUE",
 * //       channelSubtype: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE", // required
 * //       sourceConfiguration: { // MessageTemplateSourceConfiguration Union: only one key present
 * //         whatsApp: { // WhatsAppMessageTemplateSourceConfiguration
 * //           businessAccountId: "STRING_VALUE", // required
 * //           templateId: "STRING_VALUE", // required
 * //           components: [ // WhatsAppMessageTemplateComponents
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       activeVersionNumber: Number("long"),
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMessageTemplatesCommandInput - {@link ListMessageTemplatesCommandInput}
 * @returns {@link ListMessageTemplatesCommandOutput}
 * @see {@link ListMessageTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListMessageTemplatesCommandOutput} for command's `response` shape.
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
export class ListMessageTemplatesCommand extends command<ListMessageTemplatesCommandInput, ListMessageTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListMessageTemplates",
  ListMessageTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMessageTemplatesRequest;
      output: ListMessageTemplatesResponse;
    };
    sdk: {
      input: ListMessageTemplatesCommandInput;
      output: ListMessageTemplatesCommandOutput;
    };
  };
}
