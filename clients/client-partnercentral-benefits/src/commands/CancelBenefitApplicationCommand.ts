// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelBenefitApplicationInput, CancelBenefitApplicationOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { CancelBenefitApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelBenefitApplicationCommand}.
 */
export interface CancelBenefitApplicationCommandInput extends CancelBenefitApplicationInput {}
/**
 * @public
 *
 * The output of {@link CancelBenefitApplicationCommand}.
 */
export interface CancelBenefitApplicationCommandOutput extends CancelBenefitApplicationOutput, __MetadataBearer {}

/**
 * <p>Cancels a benefit application that is currently in progress, preventing further processing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, CancelBenefitApplicationCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, CancelBenefitApplicationCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // CancelBenefitApplicationInput
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE",
 * };
 * const command = new CancelBenefitApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelBenefitApplicationCommandInput - {@link CancelBenefitApplicationCommandInput}
 * @returns {@link CancelBenefitApplicationCommandOutput}
 * @see {@link CancelBenefitApplicationCommandInput} for command's `input` shape.
 * @see {@link CancelBenefitApplicationCommandOutput} for command's `response` shape.
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
export class CancelBenefitApplicationCommand extends $Command
  .classBuilder<
    CancelBenefitApplicationCommandInput,
    CancelBenefitApplicationCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "CancelBenefitApplication", {})
  .n("PartnerCentralBenefitsClient", "CancelBenefitApplicationCommand")
  .sc(CancelBenefitApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelBenefitApplicationInput;
      output: {};
    };
    sdk: {
      input: CancelBenefitApplicationCommandInput;
      output: CancelBenefitApplicationCommandOutput;
    };
  };
}
