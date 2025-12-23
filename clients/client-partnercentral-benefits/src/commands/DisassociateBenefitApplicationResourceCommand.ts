// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateBenefitApplicationResourceInput,
  DisassociateBenefitApplicationResourceOutput,
} from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { DisassociateBenefitApplicationResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateBenefitApplicationResourceCommand}.
 */
export interface DisassociateBenefitApplicationResourceCommandInput extends DisassociateBenefitApplicationResourceInput {}
/**
 * @public
 *
 * The output of {@link DisassociateBenefitApplicationResourceCommand}.
 */
export interface DisassociateBenefitApplicationResourceCommandOutput extends DisassociateBenefitApplicationResourceOutput, __MetadataBearer {}

/**
 * <p>Removes the association between an AWS resource and a benefit application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, DisassociateBenefitApplicationResourceCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, DisassociateBenefitApplicationResourceCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // DisassociateBenefitApplicationResourceInput
 *   Catalog: "STRING_VALUE", // required
 *   BenefitApplicationIdentifier: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateBenefitApplicationResourceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateBenefitApplicationResourceOutput
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Revision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateBenefitApplicationResourceCommandInput - {@link DisassociateBenefitApplicationResourceCommandInput}
 * @returns {@link DisassociateBenefitApplicationResourceCommandOutput}
 * @see {@link DisassociateBenefitApplicationResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateBenefitApplicationResourceCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralBenefitsClientResolvedConfig | config} for PartnerCentralBenefitsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Thrown when the caller does not have sufficient permissions to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Thrown when the request conflicts with the current state of the resource, such as attempting to modify a resource that has been changed by another process.</p>
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
export class DisassociateBenefitApplicationResourceCommand extends $Command
  .classBuilder<
    DisassociateBenefitApplicationResourceCommandInput,
    DisassociateBenefitApplicationResourceCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "DisassociateBenefitApplicationResource", {})
  .n("PartnerCentralBenefitsClient", "DisassociateBenefitApplicationResourceCommand")
  .sc(DisassociateBenefitApplicationResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateBenefitApplicationResourceInput;
      output: DisassociateBenefitApplicationResourceOutput;
    };
    sdk: {
      input: DisassociateBenefitApplicationResourceCommandInput;
      output: DisassociateBenefitApplicationResourceCommandOutput;
    };
  };
}
