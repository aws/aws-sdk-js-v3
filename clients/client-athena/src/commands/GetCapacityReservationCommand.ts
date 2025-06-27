// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCapacityReservationInput, GetCapacityReservationOutput } from "../models/models_0";
import { de_GetCapacityReservationCommand, se_GetCapacityReservationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityReservationCommand}.
 */
export interface GetCapacityReservationCommandInput extends GetCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link GetCapacityReservationCommand}.
 */
export interface GetCapacityReservationCommandOutput extends GetCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Returns information about the capacity reservation with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetCapacityReservationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityReservationOutput
 * //   CapacityReservation: { // CapacityReservation
 * //     Name: "STRING_VALUE", // required
 * //     Status: "PENDING" || "ACTIVE" || "CANCELLING" || "CANCELLED" || "FAILED" || "UPDATE_PENDING", // required
 * //     TargetDpus: Number("int"), // required
 * //     AllocatedDpus: Number("int"), // required
 * //     LastAllocation: { // CapacityAllocation
 * //       Status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"), // required
 * //       RequestCompletionTime: new Date("TIMESTAMP"),
 * //     },
 * //     LastSuccessfulAllocationTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityReservationCommandInput - {@link GetCapacityReservationCommandInput}
 * @returns {@link GetCapacityReservationCommandOutput}
 * @see {@link GetCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationCommandOutput} for command's `response` shape.
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
export class GetCapacityReservationCommand extends $Command
  .classBuilder<
    GetCapacityReservationCommandInput,
    GetCapacityReservationCommandOutput,
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
  .s("AmazonAthena", "GetCapacityReservation", {})
  .n("AthenaClient", "GetCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_GetCapacityReservationCommand)
  .de(de_GetCapacityReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityReservationInput;
      output: GetCapacityReservationOutput;
    };
    sdk: {
      input: GetCapacityReservationCommandInput;
      output: GetCapacityReservationCommandOutput;
    };
  };
}
