// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartRevenueAttributionAllocationsTaskInput,
  StartRevenueAttributionAllocationsTaskOutput,
} from "../models/models_0";
import { StartRevenueAttributionAllocationsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRevenueAttributionAllocationsTaskCommand}.
 */
export interface StartRevenueAttributionAllocationsTaskCommandInput extends StartRevenueAttributionAllocationsTaskInput {}
/**
 * @public
 *
 * The output of {@link StartRevenueAttributionAllocationsTaskCommand}.
 */
export interface StartRevenueAttributionAllocationsTaskCommandOutput extends StartRevenueAttributionAllocationsTaskOutput, __MetadataBearer {}

/**
 * <p>Submits a batch of up to 250 allocation changes (CREATE and/or UPDATE) for asynchronous processing. Returns a TaskId for tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, StartRevenueAttributionAllocationsTaskCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, StartRevenueAttributionAllocationsTaskCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // StartRevenueAttributionAllocationsTaskInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   RevenueAttributionIdentifier: "STRING_VALUE", // required
 *   RevenueAttributionRevision: "STRING_VALUE", // required
 *   RevenueShareAllocations: [ // RevenueShareAllocationChangeList // required
 *     { // RevenueShareAllocation
 *       Action: "CREATE" || "UPDATE", // required
 *       RevenueAttributionAllocationId: "STRING_VALUE",
 *       EntityType: "OFFER" || "OPPORTUNITY", // required
 *       EntityIdentifier: "STRING_VALUE", // required
 *       CustomerAwsAccountId: "STRING_VALUE", // required
 *       RevenueSharePercent: "STRING_VALUE", // required
 *       EffectiveFrom: "STRING_VALUE", // required
 *       EffectiveUntil: "STRING_VALUE", // required
 *       Status: "ACTIVE" || "INACTIVE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new StartRevenueAttributionAllocationsTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartRevenueAttributionAllocationsTaskOutput
 * //   TaskId: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //   Catalog: "AWS" || "Sandbox", // required
 * //   RevenueAttributionArn: "STRING_VALUE", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   TotalRevenueAttributionAllocationRecords: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param StartRevenueAttributionAllocationsTaskCommandInput - {@link StartRevenueAttributionAllocationsTaskCommandInput}
 * @returns {@link StartRevenueAttributionAllocationsTaskCommandOutput}
 * @see {@link StartRevenueAttributionAllocationsTaskCommandInput} for command's `input` shape.
 * @see {@link StartRevenueAttributionAllocationsTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralRevenueMeasurementClientResolvedConfig | config} for PartnerCentralRevenueMeasurementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Retry your request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralRevenueMeasurementServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralRevenueMeasurement service.</p>
 *
 *
 * @example Example for StartRevenueAttributionAllocationsTask
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   ClientToken: "unique-token-123",
 *   RevenueAttributionIdentifier: "ra-0a1b2c3d4e5f6",
 *   RevenueAttributionRevision: "1",
 *   RevenueShareAllocations: [
 *     {
 *       Action: "CREATE",
 *       CustomerAwsAccountId: "123456789012",
 *       EffectiveFrom: "2026-07-01",
 *       EffectiveUntil: "2026-07-31",
 *       EntityIdentifier: "offer-abc123",
 *       EntityType: "OFFER",
 *       RevenueSharePercent: "15.50"
 *     }
 *   ]
 * };
 * const command = new StartRevenueAttributionAllocationsTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Catalog: "AWS",
 *   RevenueAttributionArn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/revenue-attribution/ra-0a1b2c3d4e5f6",
 *   StartedAt: 1719792000,
 *   Status: "IN_PROGRESS",
 *   TaskId: "raatask-abc123def4567",
 *   TotalRevenueAttributionAllocationRecords: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartRevenueAttributionAllocationsTaskCommand extends command<StartRevenueAttributionAllocationsTaskCommandInput, StartRevenueAttributionAllocationsTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartRevenueAttributionAllocationsTask",
  StartRevenueAttributionAllocationsTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRevenueAttributionAllocationsTaskInput;
      output: StartRevenueAttributionAllocationsTaskOutput;
    };
    sdk: {
      input: StartRevenueAttributionAllocationsTaskCommandInput;
      output: StartRevenueAttributionAllocationsTaskCommandOutput;
    };
  };
}
