// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBenefitsInput, ListBenefitsOutput } from "../models/models_0";
import { ListBenefits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a paginated list of available benefits based on specified filter criteria.
 *
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
 *
 * Thrown when the caller does not have sufficient permissions to perform the requested operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an unexpected error occurs on the server side during request processing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when the requested resource cannot be found or does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Thrown when the request rate exceeds the allowed limits and the request is being throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the request contains invalid parameters or fails input validation requirements.
 *
 * @throws {@link PartnerCentralBenefitsServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralBenefits service.
 *
 * @public
 */
export class ListBenefitsCommand extends command<ListBenefitsCommandInput, ListBenefitsCommandOutput>(
  _ep0,
  _mw0,
  "ListBenefits",
  ListBenefits$
) {
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
