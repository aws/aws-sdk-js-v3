// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCapacityReservationsInput, ListCapacityReservationsOutput } from "../models/models_0";
import { de_ListCapacityReservationsCommand, se_ListCapacityReservationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandInput extends ListCapacityReservationsInput {}
/**
 * @public
 *
 * The output of {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandOutput extends ListCapacityReservationsOutput, __MetadataBearer {}

/**
 * <p>Lists the capacity reservations for the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListCapacityReservationsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListCapacityReservationsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListCapacityReservationsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityReservationsOutput
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservations: [ // CapacityReservationsList // required
 * //     { // CapacityReservation
 * //       Name: "STRING_VALUE", // required
 * //       Status: "PENDING" || "ACTIVE" || "CANCELLING" || "CANCELLED" || "FAILED" || "UPDATE_PENDING", // required
 * //       TargetDpus: Number("int"), // required
 * //       AllocatedDpus: Number("int"), // required
 * //       LastAllocation: { // CapacityAllocation
 * //         Status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //         StatusMessage: "STRING_VALUE",
 * //         RequestTime: new Date("TIMESTAMP"), // required
 * //         RequestCompletionTime: new Date("TIMESTAMP"),
 * //       },
 * //       LastSuccessfulAllocationTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCapacityReservationsCommandInput - {@link ListCapacityReservationsCommandInput}
 * @returns {@link ListCapacityReservationsCommandOutput}
 * @see {@link ListCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link ListCapacityReservationsCommandOutput} for command's `response` shape.
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
export class ListCapacityReservationsCommand extends $Command
  .classBuilder<
    ListCapacityReservationsCommandInput,
    ListCapacityReservationsCommandOutput,
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
  .s("AmazonAthena", "ListCapacityReservations", {})
  .n("AthenaClient", "ListCapacityReservationsCommand")
  .f(void 0, void 0)
  .ser(se_ListCapacityReservationsCommand)
  .de(de_ListCapacityReservationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapacityReservationsInput;
      output: ListCapacityReservationsOutput;
    };
    sdk: {
      input: ListCapacityReservationsCommandInput;
      output: ListCapacityReservationsCommandOutput;
    };
  };
}
