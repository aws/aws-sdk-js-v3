// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCapacityReservationInput, DeleteCapacityReservationOutput } from "../models/models_0";
import { DeleteCapacityReservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapacityReservationCommand}.
 */
export interface DeleteCapacityReservationCommandInput extends DeleteCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityReservationCommand}.
 */
export interface DeleteCapacityReservationCommandOutput extends DeleteCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Deletes a cancelled capacity reservation. A reservation must be cancelled before it
 *             can be deleted. A deleted reservation is immediately removed from your account and can
 *             no longer be referenced, including by its ARN. A deleted reservation cannot be called by
 *                 <code>GetCapacityReservation</code>, and deleted reservations do not appear in the
 *             output of <code>ListCapacityReservations</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // DeleteCapacityReservationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCapacityReservationCommandInput - {@link DeleteCapacityReservationCommandInput}
 * @returns {@link DeleteCapacityReservationCommandOutput}
 * @see {@link DeleteCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityReservationCommandOutput} for command's `response` shape.
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
export class DeleteCapacityReservationCommand extends $Command
  .classBuilder<
    DeleteCapacityReservationCommandInput,
    DeleteCapacityReservationCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "DeleteCapacityReservation", {})
  .n("AthenaClient", "DeleteCapacityReservationCommand")
  .sc(DeleteCapacityReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapacityReservationInput;
      output: {};
    };
    sdk: {
      input: DeleteCapacityReservationCommandInput;
      output: DeleteCapacityReservationCommandOutput;
    };
  };
}
