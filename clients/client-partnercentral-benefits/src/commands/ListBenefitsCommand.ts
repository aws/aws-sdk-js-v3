// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBenefitsInput, ListBenefitsOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { ListBenefits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBenefitsCommand}.
 */
export interface ListBenefitsCommandInput extends ListBenefitsInput {}
/**
 * @public
 *
 * The output of {@link ListBenefitsCommand}.
 */
export interface ListBenefitsCommandOutput extends ListBenefitsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of available benefits based on specified filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, ListBenefitsCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, ListBenefitsCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // ListBenefitsInput
 *   Catalog: "STRING_VALUE", // required
 *   Programs: [ // Programs
 *     "STRING_VALUE",
 *   ],
 *   FulfillmentTypes: [ // FulfillmentTypes
 *     "CREDITS" || "CASH" || "ACCESS",
 *   ],
 *   Status: [ // BenefitStatuses
 *     "ACTIVE" || "INACTIVE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBenefitsCommand(input);
 * const response = await client.send(command);
 * // { // ListBenefitsOutput
 * //   BenefitSummaries: [ // BenefitSummaries
 * //     { // BenefitSummary
 * //       Id: "STRING_VALUE",
 * //       Catalog: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Programs: [ // Programs
 * //         "STRING_VALUE",
 * //       ],
 * //       FulfillmentTypes: [ // FulfillmentTypes
 * //         "CREDITS" || "CASH" || "ACCESS",
 * //       ],
 * //       Status: "ACTIVE" || "INACTIVE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBenefitsCommandInput - {@link ListBenefitsCommandInput}
 * @returns {@link ListBenefitsCommandOutput}
 * @see {@link ListBenefitsCommandInput} for command's `input` shape.
 * @see {@link ListBenefitsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralBenefitsClientResolvedConfig | config} for PartnerCentralBenefitsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Thrown when the caller does not have sufficient permissions to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an unexpected error occurs on the server side during request processing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource cannot be found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Thrown when the request rate exceeds the allowed limits and the request is being throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the request contains invalid parameters or fails input validation requirements.</p>
 *
 * @throws {@link PartnerCentralBenefitsServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralBenefits service.</p>
 *
 *
 * @public
 */
export class ListBenefitsCommand extends $Command
  .classBuilder<
    ListBenefitsCommandInput,
    ListBenefitsCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "ListBenefits", {})
  .n("PartnerCentralBenefitsClient", "ListBenefitsCommand")
  .sc(ListBenefits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBenefitsInput;
      output: ListBenefitsOutput;
    };
    sdk: {
      input: ListBenefitsCommandInput;
      output: ListBenefitsCommandOutput;
    };
  };
}
