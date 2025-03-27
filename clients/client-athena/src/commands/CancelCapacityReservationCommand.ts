// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelCapacityReservationInput, CancelCapacityReservationOutput } from "../models/models_0";
import { de_CancelCapacityReservationCommand, se_CancelCapacityReservationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelCapacityReservationCommand}.
 */
export interface CancelCapacityReservationCommandInput extends CancelCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link CancelCapacityReservationCommand}.
 */
export interface CancelCapacityReservationCommandOutput extends CancelCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Cancels the capacity reservation with the specified name. Cancelled reservations
 *             remain in your account and will be deleted 45 days after cancellation. During the 45
 *             days, you cannot re-purpose or reuse a reservation that has been cancelled, but you can
 *             refer to its tags and view it for historical reference. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CancelCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CancelCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // CancelCapacityReservationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CancelCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCapacityReservationCommandInput - {@link CancelCapacityReservationCommandInput}
 * @returns {@link CancelCapacityReservationCommandOutput}
 * @see {@link CancelCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CancelCapacityReservationCommand extends $Command
  .classBuilder<
    CancelCapacityReservationCommandInput,
    CancelCapacityReservationCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "CancelCapacityReservation", {})
  .n("AthenaClient", "CancelCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_CancelCapacityReservationCommand)
  .de(de_CancelCapacityReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCapacityReservationInput;
      output: {};
    };
    sdk: {
      input: CancelCapacityReservationCommandInput;
      output: CancelCapacityReservationCommandOutput;
    };
  };
}
