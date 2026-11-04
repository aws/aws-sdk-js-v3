// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/models_0";
import { PurchaseOffering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResult, __MetadataBearer {}

/**
 * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a `NotEligible` error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact [aws-devicefarm-support@amazon.com](mailto:aws-devicefarm-support@amazon.com).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, PurchaseOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, PurchaseOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // PurchaseOfferingRequest
 *   offeringId: "STRING_VALUE", // required
 *   quantity: Number("int"), // required
 *   offeringPromotionId: "STRING_VALUE",
 * };
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseOfferingResult
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
 * @param PurchaseOfferingCommandInput - {@link PurchaseOfferingCommandInput}
 * @returns {@link PurchaseOfferingCommandOutput}
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
 *
 * @throws {@link NotEligibleException} (client fault)
 *
 * Exception gets thrown when a user is not eligible to perform the specified transaction.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class PurchaseOfferingCommand extends command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>(
  _ep0,
  _mw0,
  "PurchaseOffering",
  PurchaseOffering$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseOfferingRequest;
      output: PurchaseOfferingResult;
    };
    sdk: {
      input: PurchaseOfferingCommandInput;
      output: PurchaseOfferingCommandOutput;
    };
  };
}
