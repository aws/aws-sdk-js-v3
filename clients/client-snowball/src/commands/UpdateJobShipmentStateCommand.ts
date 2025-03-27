// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import { de_UpdateJobShipmentStateCommand, se_UpdateJobShipmentStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {}

/**
 * <p>Updates the state when a shipment state changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // UpdateJobShipmentStateRequest
 *   JobId: "STRING_VALUE", // required
 *   ShipmentState: "RECEIVED" || "RETURNED", // required
 * };
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateJobShipmentStateCommandInput - {@link UpdateJobShipmentStateCommandInput}
 * @returns {@link UpdateJobShipmentStateCommandOutput}
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class UpdateJobShipmentStateCommand extends $Command
  .classBuilder<
    UpdateJobShipmentStateCommandInput,
    UpdateJobShipmentStateCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "UpdateJobShipmentState", {})
  .n("SnowballClient", "UpdateJobShipmentStateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateJobShipmentStateCommand)
  .de(de_UpdateJobShipmentStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobShipmentStateRequest;
      output: {};
    };
    sdk: {
      input: UpdateJobShipmentStateCommandInput;
      output: UpdateJobShipmentStateCommandOutput;
    };
  };
}
