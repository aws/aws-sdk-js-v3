// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPrivacyBudgetTemplateInput, GetPrivacyBudgetTemplateOutput } from "../models/models_1";
import { GetPrivacyBudgetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPrivacyBudgetTemplateCommand}.
 */
export interface GetPrivacyBudgetTemplateCommandInput extends GetPrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetPrivacyBudgetTemplateCommand}.
 */
export interface GetPrivacyBudgetTemplateCommandOutput extends GetPrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * Returns details for a specified privacy budget template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetPrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetPrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetPrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetPrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetPrivacyBudgetTemplateOutput
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
 * @param GetPrivacyBudgetTemplateCommandInput - {@link GetPrivacyBudgetTemplateCommandInput}
 * @returns {@link GetPrivacyBudgetTemplateCommandOutput}
 * @see {@link GetPrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPrivacyBudgetTemplateCommandOutput} for command's `response` shape.
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
export class GetPrivacyBudgetTemplateCommand extends command<GetPrivacyBudgetTemplateCommandInput, GetPrivacyBudgetTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetPrivacyBudgetTemplate",
  GetPrivacyBudgetTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrivacyBudgetTemplateInput;
      output: GetPrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: GetPrivacyBudgetTemplateCommandInput;
      output: GetPrivacyBudgetTemplateCommandOutput;
    };
  };
}
