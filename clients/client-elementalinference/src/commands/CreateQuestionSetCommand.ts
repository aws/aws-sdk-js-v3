// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQuestionSetRequest, CreateQuestionSetResponse } from "../models/models_0";
import { CreateQuestionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQuestionSetCommand}.
 */
export interface CreateQuestionSetCommandInput extends CreateQuestionSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuestionSetCommand}.
 */
export interface CreateQuestionSetCommandOutput extends CreateQuestionSetResponse, __MetadataBearer {}

/**
 * <p>Creates a question set. Use a question set to get answers about content that's specific to your business, in addition to the built-in contextual metadata classifications. A question set contains your own questions. You ask Elemental Inference these questions about each shot or scene of the media in a contextual metadata output, and Elemental Inference answers each question with scores. To use a question set, reference it in the customQuestions property of the contextual metadata configuration of a feed output. </p> <p>CreateQuestionSet creates the question set with a DRAFT version that contains the questions in the request. To change DRAFT, use UpdateQuestionSet. To publish DRAFT as a numbered version, use CreateQuestionSetVersion. You can't change a published version. </p> <p>A question set can contain the following types of questions. You must specify at least one question. </p> <ul> <li> <p>yesNo – Elemental Inference answers yes or no.</p> </li> <li> <p>yesNoPerOption – Elemental Inference answers yes or no for each option.</p> </li> <li> <p>chooseOne – Elemental Inference chooses one of the options.</p> </li> </ul> <p>A version can contain up to 100 scored items, where each yesNo question, each option of a yesNoPerOption question, and each chooseOne question counts as one item. The name of each question must be unique across all three types. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, CreateQuestionSetCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, CreateQuestionSetCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // CreateQuestionSetRequest
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
 *   name: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQuestionSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuestionSetResponse
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
 * @param CreateQuestionSetCommandInput - {@link CreateQuestionSetCommandInput}
 * @returns {@link CreateQuestionSetCommandOutput}
 * @see {@link CreateQuestionSetCommandInput} for command's `input` shape.
 * @see {@link CreateQuestionSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed one or more service quotas for your account. Review your service quotas and either delete unused resources or request a quota increase. </p>
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
export class CreateQuestionSetCommand extends command<CreateQuestionSetCommandInput, CreateQuestionSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateQuestionSet",
  CreateQuestionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuestionSetRequest;
      output: CreateQuestionSetResponse;
    };
    sdk: {
      input: CreateQuestionSetCommandInput;
      output: CreateQuestionSetCommandOutput;
    };
  };
}
