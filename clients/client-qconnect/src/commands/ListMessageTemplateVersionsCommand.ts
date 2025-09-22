// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMessageTemplateVersionsRequest, ListMessageTemplateVersionsResponse } from "../models/models_1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { ListMessageTemplateVersions } from "../schemas/schemas_1_Quick";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListMessageTemplateVersionsCommandOutput
  extends ListMessageTemplateVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the available versions for the specified Amazon Q in Connect message template.</p>
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
 *
 * @public
 */
export class ListMessageTemplateVersionsCommand extends $Command
  .classBuilder<
    ListMessageTemplateVersionsCommandInput,
    ListMessageTemplateVersionsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "ListMessageTemplateVersions", {})
  .n("QConnectClient", "ListMessageTemplateVersionsCommand")
  .sc(ListMessageTemplateVersions)
  .build() {
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
