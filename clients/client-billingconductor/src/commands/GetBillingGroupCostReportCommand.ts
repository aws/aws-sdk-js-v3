// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BillingconductorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput } from "../models/models_0";
import { GetBillingGroupCostReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBillingGroupCostReportCommand}.
 */
export interface GetBillingGroupCostReportCommandInput extends GetBillingGroupCostReportInput {}
/**
 * @public
 *
 * The output of {@link GetBillingGroupCostReportCommand}.
 */
export interface GetBillingGroupCostReportCommandOutput extends GetBillingGroupCostReportOutput, __MetadataBearer {}

/**
 * <p>Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Services service for a specific billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, GetBillingGroupCostReportCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, GetBillingGroupCostReportCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // GetBillingGroupCostReportInput
 *   Arn: "STRING_VALUE", // required
 *   BillingPeriodRange: { // BillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE", // required
 *   },
 *   GroupBy: [ // GroupByAttributesList
 *     "PRODUCT_NAME" || "BILLING_PERIOD",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetBillingGroupCostReportCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingGroupCostReportOutput
 * //   BillingGroupCostReportResults: [ // BillingGroupCostReportResultsList
 * //     { // BillingGroupCostReportResultElement
 * //       Arn: "STRING_VALUE",
 * //       AWSCost: "STRING_VALUE",
 * //       ProformaCost: "STRING_VALUE",
 * //       Margin: "STRING_VALUE",
 * //       MarginPercentage: "STRING_VALUE",
 * //       Currency: "STRING_VALUE",
 * //       Attributes: [ // AttributesList
 * //         { // Attribute
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBillingGroupCostReportCommandInput - {@link GetBillingGroupCostReportCommandInput}
 * @returns {@link GetBillingGroupCostReportCommandOutput}
 * @see {@link GetBillingGroupCostReportCommandInput} for command's `input` shape.
 * @see {@link GetBillingGroupCostReportCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class GetBillingGroupCostReportCommand extends $Command
  .classBuilder<
    GetBillingGroupCostReportCommandInput,
    GetBillingGroupCostReportCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "GetBillingGroupCostReport", {})
  .n("BillingconductorClient", "GetBillingGroupCostReportCommand")
  .sc(GetBillingGroupCostReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingGroupCostReportInput;
      output: GetBillingGroupCostReportOutput;
    };
    sdk: {
      input: GetBillingGroupCostReportCommandInput;
      output: GetBillingGroupCostReportCommandOutput;
    };
  };
}
