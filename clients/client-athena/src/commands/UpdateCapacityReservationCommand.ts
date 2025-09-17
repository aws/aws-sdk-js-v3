// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCapacityReservationInput, UpdateCapacityReservationOutput } from "../models/models_0";
import { de_UpdateCapacityReservationCommand, se_UpdateCapacityReservationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapacityReservationCommand}.
 */
export interface UpdateCapacityReservationCommandInput extends UpdateCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link UpdateCapacityReservationCommand}.
 */
export interface UpdateCapacityReservationCommandOutput extends UpdateCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Updates the number of requested data processing units for the capacity reservation
 *             with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // UpdateCapacityReservationInput
 *   TargetDpus: Number("int"), // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new UpdateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCapacityReservationCommandInput - {@link UpdateCapacityReservationCommandInput}
 * @returns {@link UpdateCapacityReservationCommandOutput}
 * @see {@link UpdateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityReservationCommandOutput} for command's `response` shape.
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
export class UpdateCapacityReservationCommand extends $Command
  .classBuilder<
    UpdateCapacityReservationCommandInput,
    UpdateCapacityReservationCommandOutput,
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
  .s("AmazonAthena", "UpdateCapacityReservation", {})
  .n("AthenaClient", "UpdateCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCapacityReservationCommand)
  .de(de_UpdateCapacityReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCapacityReservationInput;
      output: {};
    };
    sdk: {
      input: UpdateCapacityReservationCommandInput;
      output: UpdateCapacityReservationCommandOutput;
    };
  };
}
