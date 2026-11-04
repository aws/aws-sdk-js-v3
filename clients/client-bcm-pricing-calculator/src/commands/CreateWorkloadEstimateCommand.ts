// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkloadEstimateRequest, CreateWorkloadEstimateResponse } from "../models/models_0";
import { CreateWorkloadEstimate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkloadEstimateCommand}.
 */
export interface CreateWorkloadEstimateCommandInput extends CreateWorkloadEstimateRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkloadEstimateCommand}.
 */
export interface CreateWorkloadEstimateCommandOutput extends CreateWorkloadEstimateResponse, __MetadataBearer {}

/**
 * Creates a new workload estimate to model costs for a specific workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, CreateWorkloadEstimateCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, CreateWorkloadEstimateCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // CreateWorkloadEstimateRequest
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkloadEstimateCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkloadEstimateResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   rateType: "BEFORE_DISCOUNTS" || "AFTER_DISCOUNTS" || "AFTER_DISCOUNTS_AND_COMMITMENTS",
 * //   rateTimestamp: new Date("TIMESTAMP"),
 * //   status: "UPDATING" || "VALID" || "INVALID" || "ACTION_NEEDED",
 * //   totalCost: Number("double"),
 * //   costCurrency: "USD",
 * //   failureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkloadEstimateCommandInput - {@link CreateWorkloadEstimateCommandInput}
 * @returns {@link CreateWorkloadEstimateCommandOutput}
 * @see {@link CreateWorkloadEstimateCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadEstimateCommandOutput} for command's `response` shape.
 * @see {@link BCMPricingCalculatorClientResolvedConfig | config} for BCMPricingCalculatorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *
 * The requested data is currently unavailable.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause you to exceed your service quota.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BCMPricingCalculatorServiceException}
 *
 * Base exception class for all service exceptions from BCMPricingCalculator service.
 *
 * @public
 */
export class CreateWorkloadEstimateCommand extends command<CreateWorkloadEstimateCommandInput, CreateWorkloadEstimateCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkloadEstimate",
  CreateWorkloadEstimate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkloadEstimateRequest;
      output: CreateWorkloadEstimateResponse;
    };
    sdk: {
      input: CreateWorkloadEstimateCommandInput;
      output: CreateWorkloadEstimateCommandOutput;
    };
  };
}
