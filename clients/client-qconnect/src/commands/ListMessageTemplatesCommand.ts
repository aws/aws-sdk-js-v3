// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMessageTemplatesRequest, ListMessageTemplatesResponse } from "../models/models_0";
import { de_ListMessageTemplatesCommand, se_ListMessageTemplatesCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the available Amazon Q in Connect message templates for the specified knowledge
 *       base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListMessageTemplatesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListMessageTemplatesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
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
 * //       channelSubtype: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class ListMessageTemplatesCommand extends $Command
  .classBuilder<
    ListMessageTemplatesCommandInput,
    ListMessageTemplatesCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "ListMessageTemplates", {})
  .n("QConnectClient", "ListMessageTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListMessageTemplatesCommand)
  .de(de_ListMessageTemplatesCommand)
  .build() {
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
