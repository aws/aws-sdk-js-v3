// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RecallBenefitApplicationInput, RecallBenefitApplicationOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { RecallBenefitApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecallBenefitApplicationCommand}.
 */
export interface RecallBenefitApplicationCommandInput extends RecallBenefitApplicationInput {}
/**
 * @public
 *
 * The output of {@link RecallBenefitApplicationCommand}.
 */
export interface RecallBenefitApplicationCommandOutput extends RecallBenefitApplicationOutput, __MetadataBearer {}

/**
 * <p>Recalls a submitted benefit application, returning it to draft status for further modifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, RecallBenefitApplicationCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, RecallBenefitApplicationCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // RecallBenefitApplicationInput
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 *   Reason: "STRING_VALUE", // required
 * };
 * const command = new RecallBenefitApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RecallBenefitApplicationCommandInput - {@link RecallBenefitApplicationCommandInput}
 * @returns {@link RecallBenefitApplicationCommandOutput}
 * @see {@link RecallBenefitApplicationCommandInput} for command's `input` shape.
 * @see {@link RecallBenefitApplicationCommandOutput} for command's `response` shape.
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
export class RecallBenefitApplicationCommand extends $Command
  .classBuilder<
    RecallBenefitApplicationCommandInput,
    RecallBenefitApplicationCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "RecallBenefitApplication", {})
  .n("PartnerCentralBenefitsClient", "RecallBenefitApplicationCommand")
  .sc(RecallBenefitApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecallBenefitApplicationInput;
      output: {};
    };
    sdk: {
      input: RecallBenefitApplicationCommandInput;
      output: RecallBenefitApplicationCommandOutput;
    };
  };
}
