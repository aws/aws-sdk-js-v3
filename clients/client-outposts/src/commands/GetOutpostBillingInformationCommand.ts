// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOutpostBillingInformationInput, GetOutpostBillingInformationOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  de_GetOutpostBillingInformationCommand,
  se_GetOutpostBillingInformationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetOutpostBillingInformationCommandOutput
  extends GetOutpostBillingInformationOutput,
    __MetadataBearer {}

/**
 * <p>Gets current and historical billing information about the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostBillingInformationCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostBillingInformationCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
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
 * //       SubscriptionStatus: "ACTIVE" || "INACTIVE" || "CANCELLED",
 * //       OrderIds: [ // OrderIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       BeginDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       MonthlyRecurringPrice: Number("double"),
 * //       UpfrontPrice: Number("double"),
 * //     },
 * //   ],
 * //   ContractEndDate: "STRING_VALUE",
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
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class GetOutpostBillingInformationCommand extends $Command
  .classBuilder<
    GetOutpostBillingInformationCommandInput,
    GetOutpostBillingInformationCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "GetOutpostBillingInformation", {})
  .n("OutpostsClient", "GetOutpostBillingInformationCommand")
  .f(void 0, void 0)
  .ser(se_GetOutpostBillingInformationCommand)
  .de(de_GetOutpostBillingInformationCommand)
  .build() {
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
