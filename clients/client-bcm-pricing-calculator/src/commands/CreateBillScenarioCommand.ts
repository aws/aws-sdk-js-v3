// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBillScenarioRequest, CreateBillScenarioResponse } from "../models/models_0";
import { CreateBillScenario$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBillScenarioCommand}.
 */
export interface CreateBillScenarioCommandInput extends CreateBillScenarioRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillScenarioCommand}.
 */
export interface CreateBillScenarioCommandOutput extends CreateBillScenarioResponse, __MetadataBearer {}

/**
 * Creates a new bill scenario to model potential changes to Amazon Web Services usage and costs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMPricingCalculatorClient, CreateBillScenarioCommand } from "@aws-sdk/client-bcm-pricing-calculator"; // ES Modules import
 * // const { BCMPricingCalculatorClient, CreateBillScenarioCommand } = require("@aws-sdk/client-bcm-pricing-calculator"); // CommonJS import
 * // import type { BCMPricingCalculatorClientConfig } from "@aws-sdk/client-bcm-pricing-calculator";
 * const config = {}; // type is BCMPricingCalculatorClientConfig
 * const client = new BCMPricingCalculatorClient(config);
 * const input = { // CreateBillScenarioRequest
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 *   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * };
 * const command = new CreateBillScenarioCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillScenarioResponse
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   billInterval: { // BillInterval
 * //     start: new Date("TIMESTAMP"),
 * //     end: new Date("TIMESTAMP"),
 * //   },
 * //   status: "READY" || "LOCKED" || "FAILED" || "STALE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * //   groupSharingPreference: "OPEN" || "PRIORITIZED" || "RESTRICTED",
 * //   costCategoryGroupSharingPreferenceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBillScenarioCommandInput - {@link CreateBillScenarioCommandInput}
 * @returns {@link CreateBillScenarioCommandOutput}
 * @see {@link CreateBillScenarioCommandInput} for command's `input` shape.
 * @see {@link CreateBillScenarioCommandOutput} for command's `response` shape.
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
export class CreateBillScenarioCommand extends command<CreateBillScenarioCommandInput, CreateBillScenarioCommandOutput>(
  _ep0,
  _mw0,
  "CreateBillScenario",
  CreateBillScenario$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillScenarioRequest;
      output: CreateBillScenarioResponse;
    };
    sdk: {
      input: CreateBillScenarioCommandInput;
      output: CreateBillScenarioCommandOutput;
    };
  };
}
