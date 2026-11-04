// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCollaborationPrivacyBudgetTemplateInput,
  GetCollaborationPrivacyBudgetTemplateOutput,
} from "../models/models_0";
import { GetCollaborationPrivacyBudgetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandInput extends GetCollaborationPrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandOutput extends GetCollaborationPrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * Returns details about a specified privacy budget template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationPrivacyBudgetTemplateInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationPrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationPrivacyBudgetTemplateOutput
 * //   collaborationPrivacyBudgetTemplate: { // CollaborationPrivacyBudgetTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     privacyBudgetType: "DIFFERENTIAL_PRIVACY" || "ACCESS_BUDGET", // required
 * //     autoRefresh: "CALENDAR_MONTH" || "NONE", // required
 * //     parameters: { // PrivacyBudgetTemplateParametersOutput Union: only one key present
 * //       differentialPrivacy: { // DifferentialPrivacyTemplateParametersOutput
 * //         epsilon: Number("int"), // required
 * //         usersNoisePerQuery: Number("int"), // required
 * //       },
 * //       accessBudget: { // AccessBudgetsPrivacyTemplateParametersOutput
 * //         budgetParameters: [ // BudgetParameters // required
 * //           { // BudgetParameter
 * //             type: "CALENDAR_DAY" || "CALENDAR_MONTH" || "CALENDAR_WEEK" || "LIFETIME", // required
 * //             budget: Number("int"), // required
 * //             autoRefresh: "ENABLED" || "DISABLED",
 * //           },
 * //         ],
 * //         resourceArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationPrivacyBudgetTemplateCommandInput - {@link GetCollaborationPrivacyBudgetTemplateCommandInput}
 * @returns {@link GetCollaborationPrivacyBudgetTemplateCommandOutput}
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class GetCollaborationPrivacyBudgetTemplateCommand extends command<GetCollaborationPrivacyBudgetTemplateCommandInput, GetCollaborationPrivacyBudgetTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetCollaborationPrivacyBudgetTemplate",
  GetCollaborationPrivacyBudgetTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationPrivacyBudgetTemplateInput;
      output: GetCollaborationPrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: GetCollaborationPrivacyBudgetTemplateCommandInput;
      output: GetCollaborationPrivacyBudgetTemplateCommandOutput;
    };
  };
}
