// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReservationOfferingsRequest, ListReservationOfferingsResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListReservationOfferings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReservationOfferingsCommand}.
 */
export interface ListReservationOfferingsCommandInput extends ListReservationOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link ListReservationOfferingsCommand}.
 */
export interface ListReservationOfferingsCommandOutput extends ListReservationOfferingsResponse, __MetadataBearer {}

/**
 * <p>Returns the current reservation offerings in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListReservationOfferingsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListReservationOfferingsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListReservationOfferingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReservationOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ListReservationOfferingsResponse
 * //   reservationOfferingsList: [ // ReservationOfferingsList // required
 * //     { // ReservationOffering
 * //       offeringId: "STRING_VALUE",
 * //       duration: Number("int"),
 * //       upfrontCharge: Number("double"),
 * //       hourlyCharge: Number("double"),
 * //       currencyCode: "STRING_VALUE",
 * //       offeringType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReservationOfferingsCommandInput - {@link ListReservationOfferingsCommandInput}
 * @returns {@link ListReservationOfferingsCommandOutput}
 * @see {@link ListReservationOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListReservationOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
export class ListReservationOfferingsCommand extends $Command
  .classBuilder<
    ListReservationOfferingsCommandInput,
    ListReservationOfferingsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListReservationOfferings", {})
  .n("RedshiftServerlessClient", "ListReservationOfferingsCommand")
  .sc(ListReservationOfferings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReservationOfferingsRequest;
      output: ListReservationOfferingsResponse;
    };
    sdk: {
      input: ListReservationOfferingsCommandInput;
      output: ListReservationOfferingsCommandOutput;
    };
  };
}
