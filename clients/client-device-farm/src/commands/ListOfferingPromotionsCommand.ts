// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/models_0";
import { de_ListOfferingPromotionsCommand, se_ListOfferingPromotionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingPromotionsCommand}.
 */
export interface ListOfferingPromotionsCommandInput extends ListOfferingPromotionsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingPromotionsCommand}.
 */
export interface ListOfferingPromotionsCommandOutput extends ListOfferingPromotionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
 *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
 *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingPromotionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingPromotionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListOfferingPromotionsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOfferingPromotionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingPromotionsResult
 * //   offeringPromotions: [ // OfferingPromotions
 * //     { // OfferingPromotion
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOfferingPromotionsCommandInput - {@link ListOfferingPromotionsCommandInput}
 * @returns {@link ListOfferingPromotionsCommandOutput}
 * @see {@link ListOfferingPromotionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingPromotionsCommandOutput} for command's `response` shape.
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
export class ListOfferingPromotionsCommand extends $Command
  .classBuilder<
    ListOfferingPromotionsCommandInput,
    ListOfferingPromotionsCommandOutput,
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
  .s("DeviceFarm_20150623", "ListOfferingPromotions", {})
  .n("DeviceFarmClient", "ListOfferingPromotionsCommand")
  .f(void 0, void 0)
  .ser(se_ListOfferingPromotionsCommand)
  .de(de_ListOfferingPromotionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOfferingPromotionsRequest;
      output: ListOfferingPromotionsResult;
    };
    sdk: {
      input: ListOfferingPromotionsCommandInput;
      output: ListOfferingPromotionsCommandOutput;
    };
  };
}
