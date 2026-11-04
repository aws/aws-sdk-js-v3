// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProfileInput, CreateProfileOutput } from "../models/models_0";
import { CreateProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandInput extends CreateProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandOutput extends CreateProfileOutput, __MetadataBearer {}

/**
 * Create a profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateProfileInput
 *   ProfileName: "STRING_VALUE", // required
 *   ProfileDescription: "STRING_VALUE", // required
 *   ProfileQuestions: [ // ProfileQuestionUpdates // required
 *     { // ProfileQuestionUpdate
 *       QuestionId: "STRING_VALUE",
 *       SelectedChoiceIds: [ // SelectedProfileChoiceIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileOutput
 * //   ProfileArn: "STRING_VALUE",
 * //   ProfileVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
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
export class CreateProfileCommand extends command<CreateProfileCommandInput, CreateProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateProfile",
  CreateProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfileInput;
      output: CreateProfileOutput;
    };
    sdk: {
      input: CreateProfileCommandInput;
      output: CreateProfileCommandOutput;
    };
  };
}
