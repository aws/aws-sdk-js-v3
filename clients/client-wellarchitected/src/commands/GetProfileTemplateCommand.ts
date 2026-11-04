// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProfileTemplateInput, GetProfileTemplateOutput } from "../models/models_0";
import { GetProfileTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProfileTemplateCommand}.
 */
export interface GetProfileTemplateCommandInput extends GetProfileTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetProfileTemplateCommand}.
 */
export interface GetProfileTemplateCommandOutput extends GetProfileTemplateOutput, __MetadataBearer {}

/**
 * Get profile template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetProfileTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetProfileTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = {};
 * const command = new GetProfileTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileTemplateOutput
 * //   ProfileTemplate: { // ProfileTemplate
 * //     TemplateName: "STRING_VALUE",
 * //     TemplateQuestions: [ // TemplateQuestions
 * //       { // ProfileTemplateQuestion
 * //         QuestionId: "STRING_VALUE",
 * //         QuestionTitle: "STRING_VALUE",
 * //         QuestionDescription: "STRING_VALUE",
 * //         QuestionChoices: [ // ProfileTemplateQuestionChoices
 * //           { // ProfileTemplateChoice
 * //             ChoiceId: "STRING_VALUE",
 * //             ChoiceTitle: "STRING_VALUE",
 * //             ChoiceDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         MinSelectedChoices: Number("int"),
 * //         MaxSelectedChoices: Number("int"),
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileTemplateCommandInput - {@link GetProfileTemplateCommandInput}
 * @returns {@link GetProfileTemplateCommandOutput}
 * @see {@link GetProfileTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileTemplateCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class GetProfileTemplateCommand extends command<GetProfileTemplateCommandInput, GetProfileTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetProfileTemplate",
  GetProfileTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetProfileTemplateOutput;
    };
    sdk: {
      input: GetProfileTemplateCommandInput;
      output: GetProfileTemplateCommandOutput;
    };
  };
}
