// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReservationOfferingRequest, GetReservationOfferingResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetReservationOffering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReservationOfferingCommand}.
 */
export interface GetReservationOfferingCommandInput extends GetReservationOfferingRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationOfferingCommand}.
 */
export interface GetReservationOfferingCommandOutput extends GetReservationOfferingResponse, __MetadataBearer {}

/**
 * <p>Returns the reservation offering. The offering determines the payment schedule for the reservation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetReservationOfferingCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetReservationOfferingCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetReservationOfferingRequest
 *   offeringId: "STRING_VALUE", // required
 * };
 * const command = new GetReservationOfferingCommand(input);
 * const response = await client.send(command);
 * // { // GetReservationOfferingResponse
 * //   reservationOffering: { // ReservationOffering
 * //     offeringId: "STRING_VALUE",
 * //     duration: Number("int"),
 * //     upfrontCharge: Number("double"),
 * //     hourlyCharge: Number("double"),
 * //     currencyCode: "STRING_VALUE",
 * //     offeringType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReservationOfferingCommandInput - {@link GetReservationOfferingCommandInput}
 * @returns {@link GetReservationOfferingCommandOutput}
 * @see {@link GetReservationOfferingCommandInput} for command's `input` shape.
 * @see {@link GetReservationOfferingCommandOutput} for command's `response` shape.
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
export class GetReservationOfferingCommand extends $Command
  .classBuilder<
    GetReservationOfferingCommandInput,
    GetReservationOfferingCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetReservationOffering", {})
  .n("RedshiftServerlessClient", "GetReservationOfferingCommand")
  .sc(GetReservationOffering$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReservationOfferingRequest;
      output: GetReservationOfferingResponse;
    };
    sdk: {
      input: GetReservationOfferingCommandInput;
      output: GetReservationOfferingCommandOutput;
    };
  };
}
