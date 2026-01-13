// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProfileInput, UpdateProfileOutput } from "../models/models_0";
import { UpdateProfile$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileOutput, __MetadataBearer {}

/**
 * <p>Update a profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateProfileInput
 *   ProfileArn: "STRING_VALUE", // required
 *   ProfileDescription: "STRING_VALUE",
 *   ProfileQuestions: [ // ProfileQuestionUpdates
 *     { // ProfileQuestionUpdate
 *       QuestionId: "STRING_VALUE",
 *       SelectedChoiceIds: [ // SelectedProfileChoiceIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileOutput
 * //   Profile: { // Profile
 * //     ProfileArn: "STRING_VALUE",
 * //     ProfileVersion: "STRING_VALUE",
 * //     ProfileName: "STRING_VALUE",
 * //     ProfileDescription: "STRING_VALUE",
 * //     ProfileQuestions: [ // ProfileQuestions
 * //       { // ProfileQuestion
 * //         QuestionId: "STRING_VALUE",
 * //         QuestionTitle: "STRING_VALUE",
 * //         QuestionDescription: "STRING_VALUE",
 * //         QuestionChoices: [ // ProfileQuestionChoices
 * //           { // ProfileChoice
 * //             ChoiceId: "STRING_VALUE",
 * //             ChoiceTitle: "STRING_VALUE",
 * //             ChoiceDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SelectedChoiceIds: [ // SelectedChoiceIds
 * //           "STRING_VALUE",
 * //         ],
 * //         MinSelectedChoices: Number("int"),
 * //         MaxSelectedChoices: Number("int"),
 * //       },
 * //     ],
 * //     Owner: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class UpdateProfileCommand extends $Command
  .classBuilder<
    UpdateProfileCommandInput,
    UpdateProfileCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateProfile", {})
  .n("WellArchitectedClient", "UpdateProfileCommand")
  .sc(UpdateProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileInput;
      output: UpdateProfileOutput;
    };
    sdk: {
      input: UpdateProfileCommandInput;
      output: UpdateProfileCommandOutput;
    };
  };
}
