// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RenewOfferingRequest, RenewOfferingResult } from "../models/models_0";
import { RenewOffering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RenewOfferingCommand}.
 */
export interface RenewOfferingCommandInput extends RenewOfferingRequest {}
/**
 * @public
 *
 * The output of {@link RenewOfferingCommand}.
 */
export interface RenewOfferingCommandOutput extends RenewOfferingResult, __MetadataBearer {}

/**
 * <p>Explicitly sets the quantity of devices to renew for an offering, starting from the
 *                 <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the
 *             user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, RenewOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, RenewOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // RenewOfferingRequest
 *   offeringId: "STRING_VALUE", // required
 *   quantity: Number("int"), // required
 * };
 * const command = new RenewOfferingCommand(input);
 * const response = await client.send(command);
 * // { // RenewOfferingResult
 * //   offeringTransaction: { // OfferingTransaction
 * //     offeringStatus: { // OfferingStatus
 * //       type: "PURCHASE" || "RENEW" || "SYSTEM",
 * //       offering: { // Offering
 * //         id: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         type: "RECURRING",
 * //         platform: "ANDROID" || "IOS",
 * //         recurringCharges: [ // RecurringCharges
 * //           { // RecurringCharge
 * //             cost: { // MonetaryAmount
 * //               amount: Number("double"),
 * //               currencyCode: "USD",
 * //             },
 * //             frequency: "MONTHLY",
 * //           },
 * //         ],
 * //       },
 * //       quantity: Number("int"),
 * //       effectiveOn: new Date("TIMESTAMP"),
 * //     },
 * //     transactionId: "STRING_VALUE",
 * //     offeringPromotionId: "STRING_VALUE",
 * //     createdOn: new Date("TIMESTAMP"),
 * //     cost: {
 * //       amount: Number("double"),
 * //       currencyCode: "USD",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RenewOfferingCommandInput - {@link RenewOfferingCommandInput}
 * @returns {@link RenewOfferingCommandOutput}
 * @see {@link RenewOfferingCommandInput} for command's `input` shape.
 * @see {@link RenewOfferingCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotEligibleException} (client fault)
 *  <p>Exception gets thrown when a user is not eligible to perform the specified
 *             transaction.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class RenewOfferingCommand extends $Command
  .classBuilder<
    RenewOfferingCommandInput,
    RenewOfferingCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "RenewOffering", {})
  .n("DeviceFarmClient", "RenewOfferingCommand")
  .sc(RenewOffering$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenewOfferingRequest;
      output: RenewOfferingResult;
    };
    sdk: {
      input: RenewOfferingCommandInput;
      output: RenewOfferingCommandOutput;
    };
  };
}
