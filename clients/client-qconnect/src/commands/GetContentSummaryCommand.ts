// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContentSummaryRequest, GetContentSummaryResponse } from "../models/models_0";
import { de_GetContentSummaryCommand, se_GetContentSummaryCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandInput extends GetContentSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetContentSummaryCommand}.
 */
export interface GetContentSummaryCommandOutput extends GetContentSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves summary information about the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetContentSummaryCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetContentSummaryCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // GetContentSummaryRequest
 *   contentId: "STRING_VALUE", // required
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new GetContentSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetContentSummaryResponse
 * //   contentSummary: { // ContentSummary
 * //     contentArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     metadata: { // ContentMetadata // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContentSummaryCommandInput - {@link GetContentSummaryCommandInput}
 * @returns {@link GetContentSummaryCommandOutput}
 * @see {@link GetContentSummaryCommandInput} for command's `input` shape.
 * @see {@link GetContentSummaryCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class GetContentSummaryCommand extends $Command
  .classBuilder<
    GetContentSummaryCommandInput,
    GetContentSummaryCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "GetContentSummary", {})
  .n("QConnectClient", "GetContentSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetContentSummaryCommand)
  .de(de_GetContentSummaryCommand)
  .build() {}
