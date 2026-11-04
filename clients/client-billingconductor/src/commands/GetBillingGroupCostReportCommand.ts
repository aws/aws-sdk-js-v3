// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillingGroupCostReportInput, GetBillingGroupCostReportOutput } from "../models/models_0";
import { GetBillingGroupCostReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Services service for a specific billing group.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't match with the constraints specified by Amazon Web Services services.
 *
 * @throws {@link BillingconductorServiceException}
 *
 * Base exception class for all service exceptions from Billingconductor service.
 *
 * @public
 */
export class GetBillingGroupCostReportCommand extends command<GetBillingGroupCostReportCommandInput, GetBillingGroupCostReportCommandOutput>(
  _ep0,
  _mw0,
  "GetBillingGroupCostReport",
  GetBillingGroupCostReport$
) {
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
