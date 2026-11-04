// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePrivacyBudgetTemplateInput, CreatePrivacyBudgetTemplateOutput } from "../models/models_1";
import { CreatePrivacyBudgetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePrivacyBudgetTemplateCommand}.
 */
export interface CreatePrivacyBudgetTemplateCommandInput extends CreatePrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivacyBudgetTemplateCommand}.
 */
export interface CreatePrivacyBudgetTemplateCommandOutput extends CreatePrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * Creates a privacy budget template for a specified collaboration. Each collaboration can have only one privacy budget template. If you need to change the privacy budget template, use the UpdatePrivacyBudgetTemplate operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreatePrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreatePrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreatePrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   autoRefresh: "CALENDAR_MONTH" || "NONE",
 *   privacyBudgetType: "DIFFERENTIAL_PRIVACY" || "ACCESS_BUDGET", // required
 *   parameters: { // PrivacyBudgetTemplateParametersInput Union: only one key present
 *     differentialPrivacy: { // DifferentialPrivacyTemplateParametersInput
 *       epsilon: Number("int"), // required
 *       usersNoisePerQuery: Number("int"), // required
 *     },
 *     accessBudget: { // AccessBudgetsPrivacyTemplateParametersInput
 *       budgetParameters: [ // BudgetParameters // required
 *         { // BudgetParameter
 *           type: "CALENDAR_DAY" || "CALENDAR_MONTH" || "CALENDAR_WEEK" || "LIFETIME", // required
 *           budget: Number("int"), // required
 *           autoRefresh: "ENABLED" || "DISABLED",
 *         },
 *       ],
 *       resourceArn: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivacyBudgetTemplateOutput
 * //   privacyBudgetTemplate: { // PrivacyBudgetTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
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
 * @param CreatePrivacyBudgetTemplateCommandInput - {@link CreatePrivacyBudgetTemplateCommandInput}
 * @returns {@link CreatePrivacyBudgetTemplateCommandOutput}
 * @see {@link CreatePrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePrivacyBudgetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
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
export class CreatePrivacyBudgetTemplateCommand extends command<CreatePrivacyBudgetTemplateCommandInput, CreatePrivacyBudgetTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreatePrivacyBudgetTemplate",
  CreatePrivacyBudgetTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivacyBudgetTemplateInput;
      output: CreatePrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: CreatePrivacyBudgetTemplateCommandInput;
      output: CreatePrivacyBudgetTemplateCommandOutput;
    };
  };
}
