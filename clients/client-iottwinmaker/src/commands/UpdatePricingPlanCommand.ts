// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { UpdatePricingPlanRequest, UpdatePricingPlanResponse } from "../models/models_0";
import { de_UpdatePricingPlanCommand, se_UpdatePricingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePricingPlanCommand}.
 */
export interface UpdatePricingPlanCommandInput extends UpdatePricingPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePricingPlanCommand}.
 */
export interface UpdatePricingPlanCommandOutput extends UpdatePricingPlanResponse, __MetadataBearer {}

/**
 * <p>Update the pricing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdatePricingPlanCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdatePricingPlanCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // UpdatePricingPlanRequest
 *   pricingMode: "STRING_VALUE", // required
 *   bundleNames: [ // PricingBundles
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdatePricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePricingPlanResponse
 * //   currentPricingPlan: { // PricingPlan
 * //     billableEntityCount: Number("long"),
 * //     bundleInformation: { // BundleInformation
 * //       bundleNames: [ // PricingBundles // required
 * //         "STRING_VALUE",
 * //       ],
 * //       pricingTier: "STRING_VALUE",
 * //     },
 * //     effectiveDateTime: new Date("TIMESTAMP"), // required
 * //     pricingMode: "STRING_VALUE", // required
 * //     updateDateTime: new Date("TIMESTAMP"), // required
 * //     updateReason: "STRING_VALUE", // required
 * //   },
 * //   pendingPricingPlan: {
 * //     billableEntityCount: Number("long"),
 * //     bundleInformation: {
 * //       bundleNames: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       pricingTier: "STRING_VALUE",
 * //     },
 * //     effectiveDateTime: new Date("TIMESTAMP"), // required
 * //     pricingMode: "STRING_VALUE", // required
 * //     updateDateTime: new Date("TIMESTAMP"), // required
 * //     updateReason: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePricingPlanCommandInput - {@link UpdatePricingPlanCommandInput}
 * @returns {@link UpdatePricingPlanCommandOutput}
 * @see {@link UpdatePricingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdatePricingPlanCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class UpdatePricingPlanCommand extends $Command
  .classBuilder<
    UpdatePricingPlanCommandInput,
    UpdatePricingPlanCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "UpdatePricingPlan", {})
  .n("IoTTwinMakerClient", "UpdatePricingPlanCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePricingPlanCommand)
  .de(de_UpdatePricingPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePricingPlanRequest;
      output: UpdatePricingPlanResponse;
    };
    sdk: {
      input: UpdatePricingPlanCommandInput;
      output: UpdatePricingPlanCommandOutput;
    };
  };
}
