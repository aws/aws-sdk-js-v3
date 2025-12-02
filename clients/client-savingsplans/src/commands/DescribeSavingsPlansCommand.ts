// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSavingsPlansRequest, DescribeSavingsPlansResponse } from "../models/models_0";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DescribeSavingsPlans } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansCommand}.
 */
export interface DescribeSavingsPlansCommandInput extends DescribeSavingsPlansRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansCommand}.
 */
export interface DescribeSavingsPlansCommandOutput extends DescribeSavingsPlansResponse, __MetadataBearer {}

/**
 * <p>Describes the specified Savings Plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * // import type { SavingsplansClientConfig } from "@aws-sdk/client-savingsplans";
 * const config = {}; // type is SavingsplansClientConfig
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansRequest
 *   savingsPlanArns: [ // SavingsPlanArnList
 *     "STRING_VALUE",
 *   ],
 *   savingsPlanIds: [ // SavingsPlanIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   states: [ // SavingsPlanStateList
 *     "payment-pending" || "payment-failed" || "active" || "retired" || "queued" || "queued-deleted" || "pending-return" || "returned",
 *   ],
 *   filters: [ // SavingsPlanFilterList
 *     { // SavingsPlanFilter
 *       name: "region" || "ec2-instance-family" || "commitment" || "upfront" || "term" || "savings-plan-type" || "payment-option" || "start" || "end" || "instance-family",
 *       values: [ // ListOfStrings
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSavingsPlansCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansResponse
 * //   savingsPlans: [ // SavingsPlanList
 * //     { // SavingsPlan
 * //       offeringId: "STRING_VALUE",
 * //       savingsPlanId: "STRING_VALUE",
 * //       savingsPlanArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       start: "STRING_VALUE",
 * //       end: "STRING_VALUE",
 * //       state: "payment-pending" || "payment-failed" || "active" || "retired" || "queued" || "queued-deleted" || "pending-return" || "returned",
 * //       region: "STRING_VALUE",
 * //       ec2InstanceFamily: "STRING_VALUE",
 * //       savingsPlanType: "Compute" || "EC2Instance" || "SageMaker" || "Database",
 * //       paymentOption: "All Upfront" || "Partial Upfront" || "No Upfront",
 * //       productTypes: [ // SavingsPlanProductTypeList
 * //         "EC2" || "Fargate" || "Lambda" || "SageMaker" || "RDS" || "DSQL" || "DynamoDB" || "ElastiCache" || "DocDB" || "Neptune" || "Timestream" || "Keyspaces" || "DMS",
 * //       ],
 * //       currency: "CNY" || "USD" || "EUR",
 * //       commitment: "STRING_VALUE",
 * //       upfrontPaymentAmount: "STRING_VALUE",
 * //       recurringPaymentAmount: "STRING_VALUE",
 * //       termDurationInSeconds: Number("long"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       returnableUntil: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSavingsPlansCommandInput - {@link DescribeSavingsPlansCommandInput}
 * @returns {@link DescribeSavingsPlansCommandOutput}
 * @see {@link DescribeSavingsPlansCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 *
 * @public
 */
export class DescribeSavingsPlansCommand extends $Command
  .classBuilder<
    DescribeSavingsPlansCommandInput,
    DescribeSavingsPlansCommandOutput,
    SavingsplansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SavingsplansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSavingsPlan", "DescribeSavingsPlans", {})
  .n("SavingsplansClient", "DescribeSavingsPlansCommand")
  .sc(DescribeSavingsPlans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSavingsPlansRequest;
      output: DescribeSavingsPlansResponse;
    };
    sdk: {
      input: DescribeSavingsPlansCommandInput;
      output: DescribeSavingsPlansCommandOutput;
    };
  };
}
