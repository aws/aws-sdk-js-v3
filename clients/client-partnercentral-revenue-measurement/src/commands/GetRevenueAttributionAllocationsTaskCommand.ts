// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetRevenueAttributionAllocationsTaskInput,
  GetRevenueAttributionAllocationsTaskOutput,
} from "../models/models_0";
import { GetRevenueAttributionAllocationsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevenueAttributionAllocationsTaskCommand}.
 */
export interface GetRevenueAttributionAllocationsTaskCommandInput extends GetRevenueAttributionAllocationsTaskInput {}
/**
 * @public
 *
 * The output of {@link GetRevenueAttributionAllocationsTaskCommand}.
 */
export interface GetRevenueAttributionAllocationsTaskCommandOutput extends GetRevenueAttributionAllocationsTaskOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current status of a previously submitted allocations task. When COMPLETE, includes the latest revision. When FAILED, includes error details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionAllocationsTaskCommand } from "@aws-sdk/client-partnercentral-revenue-measurement"; // ES Modules import
 * // const { PartnerCentralRevenueMeasurementClient, GetRevenueAttributionAllocationsTaskCommand } = require("@aws-sdk/client-partnercentral-revenue-measurement"); // CommonJS import
 * // import type { PartnerCentralRevenueMeasurementClientConfig } from "@aws-sdk/client-partnercentral-revenue-measurement";
 * const config = {}; // type is PartnerCentralRevenueMeasurementClientConfig
 * const client = new PartnerCentralRevenueMeasurementClient(config);
 * const input = { // GetRevenueAttributionAllocationsTaskInput
 *   Catalog: "AWS" || "Sandbox", // required
 *   RevenueAttributionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetRevenueAttributionAllocationsTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetRevenueAttributionAllocationsTaskOutput
 * //   TaskId: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "FAILED", // required
 * //   Catalog: "AWS" || "Sandbox", // required
 * //   RevenueAttributionArn: "STRING_VALUE", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   TotalRevenueAttributionAllocationRecords: Number("int"), // required
 * //   Description: "STRING_VALUE",
 * //   RevenueAttributionLatestRevision: "STRING_VALUE",
 * //   ErrorDetailList: [ // RevenueAttributionAllocationErrorDetailList
 * //     { // RevenueAttributionAllocationErrorDetail
 * //       RevenueAttributionAllocationId: "STRING_VALUE",
 * //       EntityType: "OFFER" || "OPPORTUNITY", // required
 * //       EntityId: "STRING_VALUE", // required
 * //       CustomerAwsAccountId: "STRING_VALUE", // required
 * //       EffectiveFrom: "STRING_VALUE", // required
 * //       EffectiveUntil: "STRING_VALUE", // required
 * //       Action: "CREATE" || "UPDATE", // required
 * //       ErrorCode: "ALLOCATION_CAP_EXCEEDED" || "RESOURCE_NOT_FOUND" || "IMMUTABLE_ALLOCATION" || "ACCESS_DENIED" || "INVALID_VALUE" || "CONCURRENT_MODIFICATION" || "INTERNAL_ERROR", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRevenueAttributionAllocationsTaskCommandInput - {@link GetRevenueAttributionAllocationsTaskCommandInput}
 * @returns {@link GetRevenueAttributionAllocationsTaskCommandOutput}
 * @see {@link GetRevenueAttributionAllocationsTaskCommandInput} for command's `input` shape.
 * @see {@link GetRevenueAttributionAllocationsTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralRevenueMeasurementClientResolvedConfig | config} for PartnerCentralRevenueMeasurementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
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
 * @example Example for GetRevenueAttributionAllocationsTask
 * ```javascript
 * //
 * const input = {
 *   Catalog: "AWS",
 *   RevenueAttributionIdentifier: "ra-0a1b2c3d4e5f6"
 * };
 * const command = new GetRevenueAttributionAllocationsTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Catalog: "AWS",
 *   RevenueAttributionArn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/revenue-attribution/ra-0a1b2c3d4e5f6",
 *   StartedAt: 1719792000,
 *   Status: "COMPLETE",
 *   TaskId: "raatask-abc123def4567",
 *   TotalRevenueAttributionAllocationRecords: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRevenueAttributionAllocationsTaskCommand extends command<GetRevenueAttributionAllocationsTaskCommandInput, GetRevenueAttributionAllocationsTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetRevenueAttributionAllocationsTask",
  GetRevenueAttributionAllocationsTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRevenueAttributionAllocationsTaskInput;
      output: GetRevenueAttributionAllocationsTaskOutput;
    };
    sdk: {
      input: GetRevenueAttributionAllocationsTaskCommandInput;
      output: GetRevenueAttributionAllocationsTaskCommandOutput;
    };
  };
}
