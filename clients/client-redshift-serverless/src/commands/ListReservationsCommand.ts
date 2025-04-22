// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReservationsRequest, ListReservationsResponse } from "../models/models_0";
import { de_ListReservationsCommand, se_ListReservationsCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandInput extends ListReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandOutput extends ListReservationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Reservation objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListReservationsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListReservationsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListReservationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListReservationsResponse
 * //   reservationsList: [ // ReservationsList // required
 * //     { // Reservation
 * //       reservationId: "STRING_VALUE",
 * //       reservationArn: "STRING_VALUE",
 * //       startDate: new Date("TIMESTAMP"),
 * //       endDate: new Date("TIMESTAMP"),
 * //       capacity: Number("int"),
 * //       offering: { // ReservationOffering
 * //         offeringId: "STRING_VALUE",
 * //         duration: Number("int"),
 * //         upfrontCharge: Number("double"),
 * //         hourlyCharge: Number("double"),
 * //         currencyCode: "STRING_VALUE",
 * //         offeringType: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReservationsCommandInput - {@link ListReservationsCommandInput}
 * @returns {@link ListReservationsCommandOutput}
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ListReservationsCommand extends $Command
  .classBuilder<
    ListReservationsCommandInput,
    ListReservationsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ListReservations", {})
  .n("RedshiftServerlessClient", "ListReservationsCommand")
  .f(void 0, void 0)
  .ser(se_ListReservationsCommand)
  .de(de_ListReservationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReservationsRequest;
      output: ListReservationsResponse;
    };
    sdk: {
      input: ListReservationsCommandInput;
      output: ListReservationsCommandOutput;
    };
  };
}
