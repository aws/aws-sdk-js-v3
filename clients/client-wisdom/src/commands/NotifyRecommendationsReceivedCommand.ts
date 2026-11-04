// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { NotifyRecommendationsReceivedRequest, NotifyRecommendationsReceivedResponse } from "../models/models_0";
import { NotifyRecommendationsReceived$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface NotifyRecommendationsReceivedCommandOutput extends NotifyRecommendationsReceivedResponse, __MetadataBearer {}

/**
 * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with [GetRecommendations](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html) and a `waitTimeSeconds` input for long-polling behavior and avoiding duplicate recommendations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, NotifyRecommendationsReceivedCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, NotifyRecommendationsReceivedCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link WisdomServiceException}
 *
 * Base exception class for all service exceptions from Wisdom service.
 *
 * @public
 */
export class NotifyRecommendationsReceivedCommand extends command<NotifyRecommendationsReceivedCommandInput, NotifyRecommendationsReceivedCommandOutput>(
  _ep0,
  _mw0,
  "NotifyRecommendationsReceived",
  NotifyRecommendationsReceived$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyRecommendationsReceivedRequest;
      output: NotifyRecommendationsReceivedResponse;
    };
    sdk: {
      input: NotifyRecommendationsReceivedCommandInput;
      output: NotifyRecommendationsReceivedCommandOutput;
    };
  };
}
