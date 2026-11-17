// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQuestionSetRequest, UpdateQuestionSetResponse } from "../models/models_0";
import { UpdateQuestionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQuestionSetCommand}.
 */
export interface UpdateQuestionSetCommandInput extends UpdateQuestionSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuestionSetCommand}.
 */
export interface UpdateQuestionSetCommandOutput extends UpdateQuestionSetResponse, __MetadataBearer {}

/**
 * <p>Updates the DRAFT version of the specified question set. UpdateQuestionSet doesn't create a version and doesn't change published versions. To publish the updated DRAFT as a new version, use CreateQuestionSetVersion. </p> <p>UpdateQuestionSet replaces questions one type at a time. For each of yesNo, yesNoPerOption, and chooseOne: if you omit the array, DRAFT keeps its questions of that type. If you include the array, it replaces all the questions of that type in DRAFT. If you include an empty array, DRAFT no longer has questions of that type. The updated DRAFT must follow the same rules as in CreateQuestionSet, and Elemental Inference applies those rules to the questions that DRAFT keeps as well as to the questions in the request. </p> <p>Feeds that reference the DRAFT version use the updated questions. To make sure that the questions for a feed don't change, reference a published version instead. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, UpdateQuestionSetCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, UpdateQuestionSetCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // UpdateQuestionSetRequest
 *   id: "STRING_VALUE", // required
 *   yesNo: [ // YesNoQuestionList
 *     { // YesNoQuestion
 *       name: "STRING_VALUE", // required
 *       question: "STRING_VALUE", // required
 *     },
 *   ],
 *   yesNoPerOption: [ // YesNoPerOptionQuestionList
 *     { // YesNoPerOptionQuestion
 *       name: "STRING_VALUE", // required
 *       question: "STRING_VALUE", // required
 *       options: [ // YesNoPerOptionOptionList // required
 *         { // QuestionOption
 *           name: "STRING_VALUE", // required
 *           text: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   chooseOne: [ // ChooseOneQuestionList
 *     { // ChooseOneQuestion
 *       name: "STRING_VALUE", // required
 *       question: "STRING_VALUE", // required
 *       options: [ // ChooseOneOptionList // required
 *         {
 *           name: "STRING_VALUE", // required
 *           text: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   name: "STRING_VALUE",
 * };
 * const command = new UpdateQuestionSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQuestionSetResponse
 * //   yesNo: [ // YesNoQuestionList
 * //     { // YesNoQuestion
 * //       name: "STRING_VALUE", // required
 * //       question: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   yesNoPerOption: [ // YesNoPerOptionQuestionList
 * //     { // YesNoPerOptionQuestion
 * //       name: "STRING_VALUE", // required
 * //       question: "STRING_VALUE", // required
 * //       options: [ // YesNoPerOptionOptionList // required
 * //         { // QuestionOption
 * //           name: "STRING_VALUE", // required
 * //           text: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   chooseOne: [ // ChooseOneQuestionList
 * //     { // ChooseOneQuestion
 * //       name: "STRING_VALUE", // required
 * //       question: "STRING_VALUE", // required
 * //       options: [ // ChooseOneOptionList // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           text: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   latestVersion: "STRING_VALUE",
 * //   sha256: "STRING_VALUE", // required
 * //   references: [ // FeedReferences
 * //     "STRING_VALUE",
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQuestionSetCommandInput - {@link UpdateQuestionSetCommandInput}
 * @returns {@link UpdateQuestionSetCommandOutput}
 * @see {@link UpdateQuestionSetCommandInput} for command's `input` shape.
 * @see {@link UpdateQuestionSetCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class UpdateQuestionSetCommand extends command<UpdateQuestionSetCommandInput, UpdateQuestionSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQuestionSet",
  UpdateQuestionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuestionSetRequest;
      output: UpdateQuestionSetResponse;
    };
    sdk: {
      input: UpdateQuestionSetCommandInput;
      output: UpdateQuestionSetCommandOutput;
    };
  };
}
