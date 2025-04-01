// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBillingGroupCostReportsInput, ListBillingGroupCostReportsOutput } from "../models/models_0";
import {
  de_ListBillingGroupCostReportsCommand,
  se_ListBillingGroupCostReportsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBillingGroupCostReportsCommand}.
 */
export interface ListBillingGroupCostReportsCommandInput extends ListBillingGroupCostReportsInput {}
/**
 * @public
 *
 * The output of {@link ListBillingGroupCostReportsCommand}.
 */
export interface ListBillingGroupCostReportsCommandOutput extends ListBillingGroupCostReportsOutput, __MetadataBearer {}

/**
 * <p>A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated
 *       Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupCostReportsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupCostReportsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListBillingGroupCostReportsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListBillingGroupCostReportsFilter
 *     BillingGroupArns: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListBillingGroupCostReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingGroupCostReportsOutput
 * //   BillingGroupCostReports: [ // BillingGroupCostReportList
 * //     { // BillingGroupCostReportElement
 * //       Arn: "STRING_VALUE",
 * //       AWSCost: "STRING_VALUE",
 * //       ProformaCost: "STRING_VALUE",
 * //       Margin: "STRING_VALUE",
 * //       MarginPercentage: "STRING_VALUE",
 * //       Currency: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingGroupCostReportsCommandInput - {@link ListBillingGroupCostReportsCommandInput}
 * @returns {@link ListBillingGroupCostReportsCommandOutput}
 * @see {@link ListBillingGroupCostReportsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupCostReportsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class ListBillingGroupCostReportsCommand extends $Command
  .classBuilder<
    ListBillingGroupCostReportsCommandInput,
    ListBillingGroupCostReportsCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "ListBillingGroupCostReports", {})
  .n("BillingconductorClient", "ListBillingGroupCostReportsCommand")
  .f(void 0, void 0)
  .ser(se_ListBillingGroupCostReportsCommand)
  .de(de_ListBillingGroupCostReportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingGroupCostReportsInput;
      output: ListBillingGroupCostReportsOutput;
    };
    sdk: {
      input: ListBillingGroupCostReportsCommandInput;
      output: ListBillingGroupCostReportsCommandOutput;
    };
  };
}
