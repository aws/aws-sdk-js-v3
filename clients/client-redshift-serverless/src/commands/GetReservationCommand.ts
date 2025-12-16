// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReservationRequest, GetReservationResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservationCommand}.
 */
export interface GetReservationCommandInput extends GetReservationRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationCommand}.
 */
export interface GetReservationCommandOutput extends GetReservationResponse, __MetadataBearer {}

/**
 * <p>Gets an Amazon Redshift Serverless reservation. A reservation gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetReservationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetReservationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetReservationRequest
 *   reservationId: "STRING_VALUE", // required
 * };
 * const command = new GetReservationCommand(input);
 * const response = await client.send(command);
 * // { // GetReservationResponse
 * //   reservation: { // Reservation
 * //     reservationId: "STRING_VALUE",
 * //     reservationArn: "STRING_VALUE",
 * //     startDate: new Date("TIMESTAMP"),
 * //     endDate: new Date("TIMESTAMP"),
 * //     capacity: Number("int"),
 * //     offering: { // ReservationOffering
 * //       offeringId: "STRING_VALUE",
 * //       duration: Number("int"),
 * //       upfrontCharge: Number("double"),
 * //       hourlyCharge: Number("double"),
 * //       currencyCode: "STRING_VALUE",
 * //       offeringType: "STRING_VALUE",
 * //     },
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReservationCommandInput - {@link GetReservationCommandInput}
 * @returns {@link GetReservationCommandOutput}
 * @see {@link GetReservationCommandInput} for command's `input` shape.
 * @see {@link GetReservationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetReservationCommand extends $Command
  .classBuilder<
    GetReservationCommandInput,
    GetReservationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetReservation", {})
  .n("RedshiftServerlessClient", "GetReservationCommand")
  .sc(GetReservation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservationRequest;
      output: GetReservationResponse;
    };
    sdk: {
      input: GetReservationCommandInput;
      output: GetReservationCommandOutput;
    };
  };
}
