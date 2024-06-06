// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NotifyRecommendationsReceivedRequest, NotifyRecommendationsReceivedResponse } from "../models/models_0";
import {
  de_NotifyRecommendationsReceivedCommand,
  se_NotifyRecommendationsReceivedCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyRecommendationsReceivedCommand}.
 */
export interface NotifyRecommendationsReceivedCommandInput extends NotifyRecommendationsReceivedRequest {}
/**
 * @public
 *
 * The output of {@link NotifyRecommendationsReceivedCommand}.
 */
export interface NotifyRecommendationsReceivedCommandOutput
  extends NotifyRecommendationsReceivedResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified recommendations from the specified assistant's queue of newly
 *       available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling
 *       behavior and avoiding duplicate recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, NotifyRecommendationsReceivedCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, NotifyRecommendationsReceivedCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // NotifyRecommendationsReceivedRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   recommendationIds: [ // RecommendationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NotifyRecommendationsReceivedCommand(input);
 * const response = await client.send(command);
 * // { // NotifyRecommendationsReceivedResponse
 * //   recommendationIds: [ // RecommendationIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // NotifyRecommendationsReceivedErrorList
 * //     { // NotifyRecommendationsReceivedError
 * //       recommendationId: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param NotifyRecommendationsReceivedCommandInput - {@link NotifyRecommendationsReceivedCommandInput}
 * @returns {@link NotifyRecommendationsReceivedCommandOutput}
 * @see {@link NotifyRecommendationsReceivedCommandInput} for command's `input` shape.
 * @see {@link NotifyRecommendationsReceivedCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 * @public
 */
export class NotifyRecommendationsReceivedCommand extends $Command
  .classBuilder<
    NotifyRecommendationsReceivedCommandInput,
    NotifyRecommendationsReceivedCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "NotifyRecommendationsReceived", {})
  .n("WisdomClient", "NotifyRecommendationsReceivedCommand")
  .f(void 0, void 0)
  .ser(se_NotifyRecommendationsReceivedCommand)
  .de(de_NotifyRecommendationsReceivedCommand)
  .build() {}
