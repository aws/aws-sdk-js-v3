// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQuestionSetVersionRequest, CreateQuestionSetVersionResponse } from "../models/models_0";
import { CreateQuestionSetVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQuestionSetVersionCommand}.
 */
export interface CreateQuestionSetVersionCommandInput extends CreateQuestionSetVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuestionSetVersionCommand}.
 */
export interface CreateQuestionSetVersionCommandOutput extends CreateQuestionSetVersionResponse, __MetadataBearer {}

/**
 * <p>Publishes the DRAFT version of the specified question set as a new version. The new version has the same name and questions as DRAFT, and you can't change it. DRAFT doesn't change, so you can continue to update it. </p> <p>Version numbers start at 1, and each new version has the next number. Elemental Inference never reuses a version number, even after you delete that version. </p> <p>If DRAFT hasn't changed since the latest published version, Elemental Inference doesn't create a version. Instead, it returns the latest version. A change to the name of the question set counts as a change to DRAFT. </p> <p>A question set can have a limited number of versions. If the question set already has the maximum number of versions, Elemental Inference returns ServiceQuotaExceededException. To free space for a new version, delete a version that you no longer need, or create a new question set. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, CreateQuestionSetVersionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, CreateQuestionSetVersionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // CreateQuestionSetVersionRequest
 *   id: "STRING_VALUE", // required
 *   sha256: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateQuestionSetVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuestionSetVersionResponse
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
 * @param CreateQuestionSetVersionCommandInput - {@link CreateQuestionSetVersionCommandInput}
 * @returns {@link CreateQuestionSetVersionCommandOutput}
 * @see {@link CreateQuestionSetVersionCommandInput} for command's `input` shape.
 * @see {@link CreateQuestionSetVersionCommandOutput} for command's `response` shape.
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
export class CreateQuestionSetVersionCommand extends command<CreateQuestionSetVersionCommandInput, CreateQuestionSetVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateQuestionSetVersion",
  CreateQuestionSetVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuestionSetVersionRequest;
      output: CreateQuestionSetVersionResponse;
    };
    sdk: {
      input: CreateQuestionSetVersionCommandInput;
      output: CreateQuestionSetVersionCommandOutput;
    };
  };
}
