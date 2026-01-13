// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBenefitAllocationsInput, ListBenefitAllocationsOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { ListBenefitAllocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBenefitAllocationsCommand}.
 */
export interface ListBenefitAllocationsCommandInput extends ListBenefitAllocationsInput {}
/**
 * @public
 *
 * The output of {@link ListBenefitAllocationsCommand}.
 */
export interface ListBenefitAllocationsCommandOutput extends ListBenefitAllocationsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of benefit allocations based on specified filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, ListBenefitAllocationsCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, ListBenefitAllocationsCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // ListBenefitAllocationsInput
 *   Catalog: "STRING_VALUE", // required
 *   FulfillmentTypes: [ // FulfillmentTypes
 *     "CREDITS" || "CASH" || "ACCESS",
 *   ],
 *   BenefitIdentifiers: [ // BenefitIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   BenefitApplicationIdentifiers: [ // BenefitApplicationIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   Status: [ // BenefitAllocationStatusList
 *     "ACTIVE" || "INACTIVE" || "FULFILLED",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBenefitAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBenefitAllocationsOutput
 * //   BenefitAllocationSummaries: [ // BenefitAllocationSummaries
 * //     { // BenefitAllocationSummary
 * //       Id: "STRING_VALUE",
 * //       Catalog: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE" || "FULFILLED",
 * //       StatusReason: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       BenefitId: "STRING_VALUE",
 * //       BenefitApplicationId: "STRING_VALUE",
 * //       FulfillmentTypes: [ // FulfillmentTypes
 * //         "CREDITS" || "CASH" || "ACCESS",
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       ApplicableBenefitIds: [ // BenefitIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBenefitAllocationsCommandInput - {@link ListBenefitAllocationsCommandInput}
 * @returns {@link ListBenefitAllocationsCommandOutput}
 * @see {@link ListBenefitAllocationsCommandInput} for command's `input` shape.
 * @see {@link ListBenefitAllocationsCommandOutput} for command's `response` shape.
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
export class ListBenefitAllocationsCommand extends $Command
  .classBuilder<
    ListBenefitAllocationsCommandInput,
    ListBenefitAllocationsCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "ListBenefitAllocations", {})
  .n("PartnerCentralBenefitsClient", "ListBenefitAllocationsCommand")
  .sc(ListBenefitAllocations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBenefitAllocationsInput;
      output: ListBenefitAllocationsOutput;
    };
    sdk: {
      input: ListBenefitAllocationsCommandInput;
      output: ListBenefitAllocationsCommandOutput;
    };
  };
}
