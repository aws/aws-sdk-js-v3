// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetPricingPlanRequest, GetPricingPlanResponse } from "../models/models_0";
import { GetPricingPlan } from "../schemas/schemas_8_Pricing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPricingPlanCommand}.
 */
export interface GetPricingPlanCommandInput extends GetPricingPlanRequest {}
/**
 * @public
 *
 * The output of {@link GetPricingPlanCommand}.
 */
export interface GetPricingPlanCommandOutput extends GetPricingPlanResponse, __MetadataBearer {}

/**
 * <p>Gets the pricing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPricingPlanCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPricingPlanCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = {};
 * const command = new GetPricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetPricingPlanResponse
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
 * @param GetPricingPlanCommandInput - {@link GetPricingPlanCommandInput}
 * @returns {@link GetPricingPlanCommandOutput}
 * @see {@link GetPricingPlanCommandInput} for command's `input` shape.
 * @see {@link GetPricingPlanCommandOutput} for command's `response` shape.
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
export class GetPricingPlanCommand extends $Command
  .classBuilder<
    GetPricingPlanCommandInput,
    GetPricingPlanCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "GetPricingPlan", {})
  .n("IoTTwinMakerClient", "GetPricingPlanCommand")
  .sc(GetPricingPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPricingPlanResponse;
    };
    sdk: {
      input: GetPricingPlanCommandInput;
      output: GetPricingPlanCommandOutput;
    };
  };
}
