// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { PutFeedback } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandInput extends PutFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandOutput extends PutFeedbackResponse, __MetadataBearer {}

/**
 * <p>Provides feedback against the specified assistant for the specified target. This API only supports generative targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, PutFeedbackCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, PutFeedbackCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // PutFeedbackRequest
 *   assistantId: "STRING_VALUE", // required
 *   targetId: "STRING_VALUE", // required
 *   targetType: "STRING_VALUE", // required
 *   contentFeedback: { // ContentFeedbackData Union: only one key present
 *     generativeContentFeedbackData: { // GenerativeContentFeedbackData
 *       relevance: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // PutFeedbackResponse
 * //   assistantId: "STRING_VALUE", // required
 * //   assistantArn: "STRING_VALUE", // required
 * //   targetId: "STRING_VALUE", // required
 * //   targetType: "STRING_VALUE", // required
 * //   contentFeedback: { // ContentFeedbackData Union: only one key present
 * //     generativeContentFeedbackData: { // GenerativeContentFeedbackData
 * //       relevance: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutFeedbackCommandInput - {@link PutFeedbackCommandInput}
 * @returns {@link PutFeedbackCommandOutput}
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class PutFeedbackCommand extends $Command
  .classBuilder<
    PutFeedbackCommandInput,
    PutFeedbackCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "PutFeedback", {})
  .n("QConnectClient", "PutFeedbackCommand")
  .sc(PutFeedback)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFeedbackRequest;
      output: PutFeedbackResponse;
    };
    sdk: {
      input: PutFeedbackCommandInput;
      output: PutFeedbackCommandOutput;
    };
  };
}
