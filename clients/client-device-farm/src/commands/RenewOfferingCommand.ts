// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RenewOfferingRequest, RenewOfferingResult } from "../models/models_0";
import { de_RenewOfferingCommand, se_RenewOfferingCommand } from "../protocols/Aws_json1_1";

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
 * @public
 * @example To renew a device slot offering
 * ```javascript
 * // The following example renews a specific device slot offering.
 * const input = {
 *   "offeringId": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *   "quantity": 1
 * };
 * const command = new RenewOfferingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "offeringTransaction": {
 *     "cost": {
 *       "amount": 250,
 *       "currencyCode": "USD"
 *     },
 *     "createdOn": "1472648880",
 *     "offeringStatus": {
 *       "type": "RENEW",
 *       "effectiveOn": "1472688000",
 *       "offering": {
 *         "type": "RECURRING",
 *         "description": "Android Remote Access Unmetered Device Slot",
 *         "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *         "platform": "ANDROID"
 *       },
 *       "quantity": 1
 *     },
 *     "transactionId": "e90f1405-8c35-4561-be43-12345EXAMPLE"
 *   }
 * }
 * *\/
 * // example id: to-renew-a-device-slot-offering-1472648899785
 * ```
 *
 */
export class RenewOfferingCommand extends $Command
  .classBuilder<
    RenewOfferingCommandInput,
    RenewOfferingCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "RenewOffering", {})
  .n("DeviceFarmClient", "RenewOfferingCommand")
  .f(void 0, void 0)
  .ser(se_RenewOfferingCommand)
  .de(de_RenewOfferingCommand)
  .build() {}
