// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReservationRequest, CreateReservationResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { CreateReservation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReservationCommand}.
 */
export interface CreateReservationCommandInput extends CreateReservationRequest {}
/**
 * @public
 *
 * The output of {@link CreateReservationCommand}.
 */
export interface CreateReservationCommandOutput extends CreateReservationResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift Serverless reservation, which gives you the option to commit to a specified number of Redshift Processing Units (RPUs)
 *          for a year at a discount from Serverless on-demand (OD) rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateReservationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateReservationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateReservationRequest
 *   capacity: Number("int"), // required
 *   offeringId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateReservationCommand(input);
 * const response = await client.send(command);
 * // { // CreateReservationResponse
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
 * @param CreateReservationCommandInput - {@link CreateReservationCommandInput}
 * @returns {@link CreateReservationCommandOutput}
 * @see {@link CreateReservationCommandInput} for command's `input` shape.
 * @see {@link CreateReservationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request exceeded the number of tags allowed for a resource.</p>
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
export class CreateReservationCommand extends $Command
  .classBuilder<
    CreateReservationCommandInput,
    CreateReservationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "CreateReservation", {})
  .n("RedshiftServerlessClient", "CreateReservationCommand")
  .sc(CreateReservation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReservationRequest;
      output: CreateReservationResponse;
    };
    sdk: {
      input: CreateReservationCommandInput;
      output: CreateReservationCommandOutput;
    };
  };
}
