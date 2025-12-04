// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePrivacyBudgetTemplateInput, CreatePrivacyBudgetTemplateOutput } from "../models/models_1";
import { CreatePrivacyBudgetTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a privacy budget template for a specified collaboration. Each collaboration can have only one privacy budget template. If you need to change the privacy budget template, use the <a>UpdatePrivacyBudgetTemplate</a> operation.</p>
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
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class CreatePrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    CreatePrivacyBudgetTemplateCommandInput,
    CreatePrivacyBudgetTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreatePrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "CreatePrivacyBudgetTemplateCommand")
  .sc(CreatePrivacyBudgetTemplate)
  .build() {
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
