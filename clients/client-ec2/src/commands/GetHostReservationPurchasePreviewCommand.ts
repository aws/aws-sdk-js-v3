// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/models_6";
import {
  de_GetHostReservationPurchasePreviewCommand,
  se_GetHostReservationPurchasePreviewCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostReservationPurchasePreviewCommand}.
 */
export interface GetHostReservationPurchasePreviewCommandInput extends GetHostReservationPurchasePreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetHostReservationPurchasePreviewCommand}.
 */
export interface GetHostReservationPurchasePreviewCommandOutput
  extends GetHostReservationPurchasePreviewResult,
    __MetadataBearer {}

/**
 * <p>Preview a reservation purchase with configurations that match those of your Dedicated
 *             Host. You must have active Dedicated Hosts in your account before you purchase a
 *             reservation.</p>
 *          <p>This is a preview of the <a>PurchaseHostReservation</a> action and does not
 *             result in the offering being purchased.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetHostReservationPurchasePreviewCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetHostReservationPurchasePreviewCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetHostReservationPurchasePreviewRequest
 *   HostIdSet: [ // RequestHostIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   OfferingId: "STRING_VALUE", // required
 * };
 * const command = new GetHostReservationPurchasePreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetHostReservationPurchasePreviewResult
 * //   CurrencyCode: "USD",
 * //   Purchase: [ // PurchaseSet
 * //     { // Purchase
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       HostIdSet: [ // ResponseHostIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       HostReservationId: "STRING_VALUE",
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       UpfrontPrice: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalHourlyPrice: "STRING_VALUE",
 * //   TotalUpfrontPrice: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHostReservationPurchasePreviewCommandInput - {@link GetHostReservationPurchasePreviewCommandInput}
 * @returns {@link GetHostReservationPurchasePreviewCommandOutput}
 * @see {@link GetHostReservationPurchasePreviewCommandInput} for command's `input` shape.
 * @see {@link GetHostReservationPurchasePreviewCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetHostReservationPurchasePreviewCommand extends $Command
  .classBuilder<
    GetHostReservationPurchasePreviewCommandInput,
    GetHostReservationPurchasePreviewCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetHostReservationPurchasePreview", {})
  .n("EC2Client", "GetHostReservationPurchasePreviewCommand")
  .f(void 0, void 0)
  .ser(se_GetHostReservationPurchasePreviewCommand)
  .de(de_GetHostReservationPurchasePreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostReservationPurchasePreviewRequest;
      output: GetHostReservationPurchasePreviewResult;
    };
    sdk: {
      input: GetHostReservationPurchasePreviewCommandInput;
      output: GetHostReservationPurchasePreviewCommandOutput;
    };
  };
}
