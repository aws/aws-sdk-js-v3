// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPersonalizedRankingRequest,
  GetPersonalizedRankingRequestFilterSensitiveLog,
  GetPersonalizedRankingResponse,
  GetPersonalizedRankingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetPersonalizedRankingCommand, se_GetPersonalizedRankingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPersonalizedRankingCommand}.
 */
export interface GetPersonalizedRankingCommandInput extends GetPersonalizedRankingRequest {}
/**
 * @public
 *
 * The output of {@link GetPersonalizedRankingCommand}.
 */
export interface GetPersonalizedRankingCommandOutput extends GetPersonalizedRankingResponse, __MetadataBearer {}

/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetPersonalizedRankingRequest
 *   campaignArn: "STRING_VALUE", // required
 *   inputList: [ // InputList // required
 *     "STRING_VALUE",
 *   ],
 *   userId: "STRING_VALUE", // required
 *   context: { // Context
 *     "<keys>": "STRING_VALUE",
 *   },
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 *   metadataColumns: { // MetadataColumns
 *     "<keys>": [ // ColumnNamesList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * // { // GetPersonalizedRankingResponse
 * //   personalizedRanking: [ // ItemList
 * //     { // PredictedItem
 * //       itemId: "STRING_VALUE",
 * //       score: Number("double"),
 * //       promotionName: "STRING_VALUE",
 * //       metadata: { // Metadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       reason: [ // ReasonList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPersonalizedRankingCommandInput - {@link GetPersonalizedRankingCommandInput}
 * @returns {@link GetPersonalizedRankingCommandOutput}
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for PersonalizeRuntimeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link PersonalizeRuntimeServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeRuntime service.</p>
 *
 *
 * @public
 */
export class GetPersonalizedRankingCommand extends $Command
  .classBuilder<
    GetPersonalizedRankingCommandInput,
    GetPersonalizedRankingCommandOutput,
    PersonalizeRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalizeRuntime", "GetPersonalizedRanking", {})
  .n("PersonalizeRuntimeClient", "GetPersonalizedRankingCommand")
  .f(GetPersonalizedRankingRequestFilterSensitiveLog, GetPersonalizedRankingResponseFilterSensitiveLog)
  .ser(se_GetPersonalizedRankingCommand)
  .de(de_GetPersonalizedRankingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPersonalizedRankingRequest;
      output: GetPersonalizedRankingResponse;
    };
    sdk: {
      input: GetPersonalizedRankingCommandInput;
      output: GetPersonalizedRankingCommandOutput;
    };
  };
}
