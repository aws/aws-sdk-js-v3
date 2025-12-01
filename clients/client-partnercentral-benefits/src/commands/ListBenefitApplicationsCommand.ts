// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBenefitApplicationsInput, ListBenefitApplicationsOutput } from "../models/models_0";
import {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { ListBenefitApplications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBenefitApplicationsCommand}.
 */
export interface ListBenefitApplicationsCommandInput extends ListBenefitApplicationsInput {}
/**
 * @public
 *
 * The output of {@link ListBenefitApplicationsCommand}.
 */
export interface ListBenefitApplicationsCommandOutput extends ListBenefitApplicationsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of benefit applications based on specified filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, ListBenefitApplicationsCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, ListBenefitApplicationsCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // ListBenefitApplicationsInput
 *   Catalog: "STRING_VALUE", // required
 *   Programs: [ // Programs
 *     "STRING_VALUE",
 *   ],
 *   FulfillmentTypes: [ // FulfillmentTypes
 *     "CREDITS" || "CASH" || "ACCESS",
 *   ],
 *   BenefitIdentifiers: [ // BenefitIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   Status: [ // Statuses
 *     "PENDING_SUBMISSION" || "IN_REVIEW" || "ACTION_REQUIRED" || "APPROVED" || "REJECTED" || "CANCELED",
 *   ],
 *   Stages: [ // Stages
 *     "STRING_VALUE",
 *   ],
 *   AssociatedResources: [ // AssociatedResources
 *     { // AssociatedResource
 *       ResourceType: "OPPORTUNITY" || "BENEFIT_ALLOCATION",
 *       ResourceIdentifier: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   AssociatedResourceArns: [ // Arns
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBenefitApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBenefitApplicationsOutput
 * //   BenefitApplicationSummaries: [ // BenefitApplicationSummaries
 * //     { // BenefitApplicationSummary
 * //       Catalog: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       BenefitId: "STRING_VALUE",
 * //       Programs: [ // Programs
 * //         "STRING_VALUE",
 * //       ],
 * //       FulfillmentTypes: [ // FulfillmentTypes
 * //         "CREDITS" || "CASH" || "ACCESS",
 * //       ],
 * //       Status: "PENDING_SUBMISSION" || "IN_REVIEW" || "ACTION_REQUIRED" || "APPROVED" || "REJECTED" || "CANCELED",
 * //       Stage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       BenefitApplicationDetails: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       AssociatedResources: [ // Arns
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBenefitApplicationsCommandInput - {@link ListBenefitApplicationsCommandInput}
 * @returns {@link ListBenefitApplicationsCommandOutput}
 * @see {@link ListBenefitApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListBenefitApplicationsCommandOutput} for command's `response` shape.
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
export class ListBenefitApplicationsCommand extends $Command
  .classBuilder<
    ListBenefitApplicationsCommandInput,
    ListBenefitApplicationsCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "ListBenefitApplications", {})
  .n("PartnerCentralBenefitsClient", "ListBenefitApplicationsCommand")
  .sc(ListBenefitApplications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBenefitApplicationsInput;
      output: ListBenefitApplicationsOutput;
    };
    sdk: {
      input: ListBenefitApplicationsCommandInput;
      output: ListBenefitApplicationsCommandOutput;
    };
  };
}
