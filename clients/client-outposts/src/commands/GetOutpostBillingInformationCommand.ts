// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOutpostBillingInformationInput, GetOutpostBillingInformationOutput } from "../models/models_0";
import { GetOutpostBillingInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOutpostBillingInformationCommand}.
 */
export interface GetOutpostBillingInformationCommandInput extends GetOutpostBillingInformationInput {}
/**
 * @public
 *
 * The output of {@link GetOutpostBillingInformationCommand}.
 */
export interface GetOutpostBillingInformationCommandOutput extends GetOutpostBillingInformationOutput, __MetadataBearer {}

/**
 * Gets current and historical billing information about the specified Outpost.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostBillingInformationCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostBillingInformationCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetOutpostBillingInformationInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OutpostIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetOutpostBillingInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetOutpostBillingInformationOutput
 * //   NextToken: "STRING_VALUE",
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       SubscriptionId: "STRING_VALUE",
 * //       SubscriptionType: "ORIGINAL" || "RENEWAL" || "CAPACITY_INCREASE",
 * //       SubscriptionStatus: "ACTIVE" || "PENDING" || "INACTIVE" || "CANCELLED",
 * //       OrderIds: [ // OrderIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       BeginDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       Currency: "USD",
 * //       MonthlyRecurringPrice: Number("double"),
 * //       UpfrontPrice: Number("double"),
 * //     },
 * //   ],
 * //   ContractEndDate: "STRING_VALUE",
 * //   PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //   PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * // };
 *
 * ```
 *
 * @param GetOutpostBillingInformationCommandInput - {@link GetOutpostBillingInformationCommandInput}
 * @returns {@link GetOutpostBillingInformationCommandOutput}
 * @see {@link GetOutpostBillingInformationCommandInput} for command's `input` shape.
 * @see {@link GetOutpostBillingInformationCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class GetOutpostBillingInformationCommand extends command<GetOutpostBillingInformationCommandInput, GetOutpostBillingInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetOutpostBillingInformation",
  GetOutpostBillingInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOutpostBillingInformationInput;
      output: GetOutpostBillingInformationOutput;
    };
    sdk: {
      input: GetOutpostBillingInformationCommandInput;
      output: GetOutpostBillingInformationCommandOutput;
    };
  };
}
