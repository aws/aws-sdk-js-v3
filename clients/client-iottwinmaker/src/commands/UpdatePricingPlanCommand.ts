// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePricingPlanRequest, UpdatePricingPlanResponse } from "../models/models_0";
import { UpdatePricingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update the pricing plan.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class UpdatePricingPlanCommand extends command<UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePricingPlan",
  UpdatePricingPlan$
) {
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
