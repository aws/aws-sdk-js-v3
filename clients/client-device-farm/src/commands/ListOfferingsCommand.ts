// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListOfferingsRequest, ListOfferingsResult } from "../models/models_0";
import { de_ListOfferingsCommand, se_ListOfferingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandInput extends ListOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandOutput extends ListOfferingsResult, __MetadataBearer {}

/**
 * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record
 *             indicates the recurring price per unit and the frequency for that offering. The API returns a
 *                 <code>NotEligible</code> error if the user is not permitted to invoke the operation.  If you must be
 *             able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListOfferingsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingsResult
 * //   offerings: [ // Offerings
 * //     { // Offering
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "RECURRING",
 * //       platform: "ANDROID" || "IOS",
 * //       recurringCharges: [ // RecurringCharges
 * //         { // RecurringCharge
 * //           cost: { // MonetaryAmount
 * //             amount: Number("double"),
 * //             currencyCode: "USD",
 * //           },
 * //           frequency: "MONTHLY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOfferingsCommandInput - {@link ListOfferingsCommandInput}
 * @returns {@link ListOfferingsCommandOutput}
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
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
 * @example To get information about device offerings
 * ```javascript
 * // The following example returns information about available device offerings.
 * const input = {
 *   nextToken: "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   offerings: [
 *     {
 *       description: "iOS Unmetered Device Slot",
 *       id: "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
 *       platform: "IOS",
 *       recurringCharges: [
 *         {
 *           cost: {
 *             amount: 250,
 *             currencyCode: "USD"
 *           },
 *           frequency: "MONTHLY"
 *         }
 *       ],
 *       type: "RECURRING"
 *     },
 *     {
 *       description: "Android Unmetered Device Slot",
 *       id: "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
 *       platform: "ANDROID",
 *       recurringCharges: [
 *         {
 *           cost: {
 *             amount: 250,
 *             currencyCode: "USD"
 *           },
 *           frequency: "MONTHLY"
 *         }
 *       ],
 *       type: "RECURRING"
 *     },
 *     {
 *       description: "Android Remote Access Unmetered Device Slot",
 *       id: "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *       platform: "ANDROID",
 *       recurringCharges: [
 *         {
 *           cost: {
 *             amount: 250,
 *             currencyCode: "USD"
 *           },
 *           frequency: "MONTHLY"
 *         }
 *       ],
 *       type: "RECURRING"
 *     },
 *     {
 *       description: "iOS Remote Access Unmetered Device Slot",
 *       id: "552B4DAD-A6C9-45C4-94FB-12345EXAMPLE",
 *       platform: "IOS",
 *       recurringCharges: [
 *         {
 *           cost: {
 *             amount: 250,
 *             currencyCode: "USD"
 *           },
 *           frequency: "MONTHLY"
 *         }
 *       ],
 *       type: "RECURRING"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOfferingsCommand extends $Command
  .classBuilder<
    ListOfferingsCommandInput,
    ListOfferingsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "ListOfferings", {})
  .n("DeviceFarmClient", "ListOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_ListOfferingsCommand)
  .de(de_ListOfferingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOfferingsRequest;
      output: ListOfferingsResult;
    };
    sdk: {
      input: ListOfferingsCommandInput;
      output: ListOfferingsCommandOutput;
    };
  };
}
