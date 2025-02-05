// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBudgetsRequest, ListBudgetsResponse, ListBudgetsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListBudgetsCommand, se_ListBudgetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBudgetsCommand}.
 */
export interface ListBudgetsCommandInput extends ListBudgetsRequest {}
/**
 * @public
 *
 * The output of {@link ListBudgetsCommand}.
 */
export interface ListBudgetsCommandOutput extends ListBudgetsResponse, __MetadataBearer {}

/**
 * <p>A list of budgets in a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListBudgetsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListBudgetsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // ListBudgetsRequest
 *   nextToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   status: "ACTIVE" || "INACTIVE",
 * };
 * const command = new ListBudgetsCommand(input);
 * const response = await client.send(command);
 * // { // ListBudgetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   budgets: [ // BudgetSummaries // required
 * //     { // BudgetSummary
 * //       budgetId: "STRING_VALUE", // required
 * //       usageTrackingResource: { // UsageTrackingResource Union: only one key present
 * //         queueId: "STRING_VALUE",
 * //       },
 * //       status: "ACTIVE" || "INACTIVE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       approximateDollarLimit: Number("float"), // required
 * //       usages: { // ConsumedUsages
 * //         approximateDollarUsage: Number("float"), // required
 * //       },
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBudgetsCommandInput - {@link ListBudgetsCommandInput}
 * @returns {@link ListBudgetsCommandOutput}
 * @see {@link ListBudgetsCommandInput} for command's `input` shape.
 * @see {@link ListBudgetsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class ListBudgetsCommand extends $Command
  .classBuilder<
    ListBudgetsCommandInput,
    ListBudgetsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListBudgets", {})
  .n("DeadlineClient", "ListBudgetsCommand")
  .f(void 0, ListBudgetsResponseFilterSensitiveLog)
  .ser(se_ListBudgetsCommand)
  .de(de_ListBudgetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBudgetsRequest;
      output: ListBudgetsResponse;
    };
    sdk: {
      input: ListBudgetsCommandInput;
      output: ListBudgetsCommandOutput;
    };
  };
}
