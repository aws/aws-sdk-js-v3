// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQuickResponseRequest, GetQuickResponseResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetQuickResponse } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQuickResponseCommand}.
 */
export interface GetQuickResponseCommandInput extends GetQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link GetQuickResponseCommand}.
 */
export interface GetQuickResponseCommandOutput extends GetQuickResponseResponse, __MetadataBearer {}

/**
 * <p>Retrieves the quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetQuickResponseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetQuickResponseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetQuickResponseRequest
 *   quickResponseId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetQuickResponseCommand(input);
 * const response = await client.send(command);
 * // { // GetQuickResponseResponse
 * //   quickResponse: { // QuickResponseData
 * //     quickResponseArn: "STRING_VALUE", // required
 * //     quickResponseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     contents: { // QuickResponseContents
 * //       plainText: { // QuickResponseContentProvider Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //       markdown: {//  Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     groupingConfiguration: { // GroupingConfiguration
 * //       criteria: "STRING_VALUE",
 * //       values: [ // GroupingValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     shortcutKey: "STRING_VALUE",
 * //     lastModifiedBy: "STRING_VALUE",
 * //     isActive: true || false,
 * //     channels: [ // Channels
 * //       "STRING_VALUE",
 * //     ],
 * //     language: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQuickResponseCommandInput - {@link GetQuickResponseCommandInput}
 * @returns {@link GetQuickResponseCommandOutput}
 * @see {@link GetQuickResponseCommandInput} for command's `input` shape.
 * @see {@link GetQuickResponseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
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
export class GetQuickResponseCommand extends $Command
  .classBuilder<
    GetQuickResponseCommandInput,
    GetQuickResponseCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetQuickResponse", {})
  .n("QConnectClient", "GetQuickResponseCommand")
  .sc(GetQuickResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQuickResponseRequest;
      output: GetQuickResponseResponse;
    };
    sdk: {
      input: GetQuickResponseCommandInput;
      output: GetQuickResponseCommandOutput;
    };
  };
}
