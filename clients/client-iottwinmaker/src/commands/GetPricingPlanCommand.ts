// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPricingPlanRequest, GetPricingPlanResponse } from "../models/models_0";
import { GetPricingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the pricing plan.
 *
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
export class GetPricingPlanCommand extends command<GetPricingPlanCommandInput, GetPricingPlanCommandOutput>(
  _ep0,
  _mw0,
  "GetPricingPlan",
  GetPricingPlan$
) {
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
