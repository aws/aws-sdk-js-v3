// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityReservationInput, CreateCapacityReservationOutput } from "../models/models_0";
import { de_CreateCapacityReservationCommand, se_CreateCapacityReservationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandInput extends CreateCapacityReservationInput {}
/**
 * @public
 *
 * The output of {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandOutput extends CreateCapacityReservationOutput, __MetadataBearer {}

/**
 * <p>Creates a capacity reservation with the specified name and number of requested data
 *             processing units.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateCapacityReservationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateCapacityReservationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // CreateCapacityReservationInput
 *   TargetDpus: Number("int"), // required
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCapacityReservationCommandInput - {@link CreateCapacityReservationCommandInput}
 * @returns {@link CreateCapacityReservationCommandOutput}
 * @see {@link CreateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationCommandOutput} for command's `response` shape.
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
export class CreateCapacityReservationCommand extends $Command
  .classBuilder<
    CreateCapacityReservationCommandInput,
    CreateCapacityReservationCommandOutput,
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
  .s("AmazonAthena", "CreateCapacityReservation", {})
  .n("AthenaClient", "CreateCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCapacityReservationCommand)
  .de(de_CreateCapacityReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityReservationInput;
      output: {};
    };
    sdk: {
      input: CreateCapacityReservationCommandInput;
      output: CreateCapacityReservationCommandOutput;
    };
  };
}
