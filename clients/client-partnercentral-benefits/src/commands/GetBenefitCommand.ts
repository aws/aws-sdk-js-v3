// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBenefitInput, GetBenefitOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { GetBenefit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBenefitCommand}.
 */
export interface GetBenefitCommandInput extends GetBenefitInput {}
/**
 * @public
 *
 * The output of {@link GetBenefitCommand}.
 */
export interface GetBenefitCommandOutput extends GetBenefitOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific benefit available in the partner catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, GetBenefitCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, GetBenefitCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // GetBenefitInput
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetBenefitCommand(input);
 * const response = await client.send(command);
 * // { // GetBenefitOutput
 * //   Id: "STRING_VALUE",
 * //   Catalog: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Programs: [ // Programs
 * //     "STRING_VALUE",
 * //   ],
 * //   FulfillmentTypes: [ // FulfillmentTypes
 * //     "CREDITS" || "CASH" || "ACCESS",
 * //   ],
 * //   BenefitRequestSchema: "DOCUMENT_VALUE",
 * //   Status: "ACTIVE" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param GetBenefitCommandInput - {@link GetBenefitCommandInput}
 * @returns {@link GetBenefitCommandOutput}
 * @see {@link GetBenefitCommandInput} for command's `input` shape.
 * @see {@link GetBenefitCommandOutput} for command's `response` shape.
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
export class GetBenefitCommand extends $Command
  .classBuilder<
    GetBenefitCommandInput,
    GetBenefitCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "GetBenefit", {})
  .n("PartnerCentralBenefitsClient", "GetBenefitCommand")
  .sc(GetBenefit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBenefitInput;
      output: GetBenefitOutput;
    };
    sdk: {
      input: GetBenefitCommandInput;
      output: GetBenefitCommandOutput;
    };
  };
}
