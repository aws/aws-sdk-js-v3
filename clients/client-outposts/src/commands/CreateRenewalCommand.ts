// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRenewalInput, CreateRenewalOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CreateRenewal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRenewalCommand}.
 */
export interface CreateRenewalCommandInput extends CreateRenewalInput {}
/**
 * @public
 *
 * The output of {@link CreateRenewalCommand}.
 */
export interface CreateRenewalCommandOutput extends CreateRenewalOutput, __MetadataBearer {}

/**
 * <p>Creates a renewal contract for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateRenewalCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateRenewalCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CreateRenewalInput
 *   PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT", // required
 *   PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS", // required
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRenewalCommand(input);
 * const response = await client.send(command);
 * // { // CreateRenewalOutput
 * //   PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //   PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //   OutpostId: "STRING_VALUE",
 * //   UpfrontPrice: Number("float"),
 * //   MonthlyRecurringPrice: Number("float"),
 * // };
 *
 * ```
 *
 * @param CreateRenewalCommandInput - {@link CreateRenewalCommandInput}
 * @returns {@link CreateRenewalCommandOutput}
 * @see {@link CreateRenewalCommandInput} for command's `input` shape.
 * @see {@link CreateRenewalCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class CreateRenewalCommand extends $Command
  .classBuilder<
    CreateRenewalCommandInput,
    CreateRenewalCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "CreateRenewal", {})
  .n("OutpostsClient", "CreateRenewalCommand")
  .sc(CreateRenewal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRenewalInput;
      output: CreateRenewalOutput;
    };
    sdk: {
      input: CreateRenewalCommandInput;
      output: CreateRenewalCommandOutput;
    };
  };
}
