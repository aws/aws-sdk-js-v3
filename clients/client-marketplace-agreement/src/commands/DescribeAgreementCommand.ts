// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import { DescribeAgreementInput, DescribeAgreementOutput } from "../models/models_0";
import { DescribeAgreement } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandInput extends DescribeAgreementInput {}
/**
 * @public
 *
 * The output of {@link DescribeAgreementCommand}.
 */
export interface DescribeAgreementCommandOutput extends DescribeAgreementOutput, __MetadataBearer {}

/**
 * <p>Provides details about an agreement, such as the proposer, acceptor, start date, and end date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, DescribeAgreementCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, DescribeAgreementCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // DescribeAgreementInput
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAgreementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgreementOutput
 * //   agreementId: "STRING_VALUE",
 * //   acceptor: { // Acceptor
 * //     accountId: "STRING_VALUE",
 * //   },
 * //   proposer: { // Proposer
 * //     accountId: "STRING_VALUE",
 * //   },
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   acceptanceTime: new Date("TIMESTAMP"),
 * //   agreementType: "STRING_VALUE",
 * //   estimatedCharges: { // EstimatedCharges
 * //     currencyCode: "STRING_VALUE",
 * //     agreementValue: "STRING_VALUE",
 * //   },
 * //   proposalSummary: { // ProposalSummary
 * //     resources: [ // Resources
 * //       { // Resource
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     offerId: "STRING_VALUE",
 * //     offerSetId: "STRING_VALUE",
 * //   },
 * //   status: "ACTIVE" || "ARCHIVED" || "CANCELLED" || "EXPIRED" || "RENEWED" || "REPLACED" || "ROLLED_BACK" || "SUPERSEDED" || "TERMINATED",
 * // };
 *
 * ```
 *
 * @param DescribeAgreementCommandInput - {@link DescribeAgreementCommandInput}
 * @returns {@link DescribeAgreementCommandOutput}
 * @see {@link DescribeAgreementCommandInput} for command's `input` shape.
 * @see {@link DescribeAgreementCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @public
 */
export class DescribeAgreementCommand extends $Command
  .classBuilder<
    DescribeAgreementCommandInput,
    DescribeAgreementCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "DescribeAgreement", {})
  .n("MarketplaceAgreementClient", "DescribeAgreementCommand")
  .sc(DescribeAgreement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgreementInput;
      output: DescribeAgreementOutput;
    };
    sdk: {
      input: DescribeAgreementCommandInput;
      output: DescribeAgreementCommandOutput;
    };
  };
}
