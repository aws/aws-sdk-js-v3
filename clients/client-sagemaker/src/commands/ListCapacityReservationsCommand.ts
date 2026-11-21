// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCapacityReservationsRequest, ListCapacityReservationsResponse } from "../models/models_4";
import { ListCapacityReservations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandInput extends ListCapacityReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCapacityReservationsCommand}.
 */
export interface ListCapacityReservationsCommandOutput extends ListCapacityReservationsResponse, __MetadataBearer {}

/**
 * <p>Lists the SageMaker Capacity Reservations in your account.</p> <p>An empty list is a valid response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCapacityReservationsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCapacityReservationsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListCapacityReservationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // CapacityReservationFilters
 *     { // CapacityReservationFilter
 *       Name: "Status", // required
 *       Values: [ // CapacityReservationFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityReservationsResponse
 * //   CapacityReservationSummaries: [ // CapacityReservationSummaries // required
 * //     { // CapacityReservationSummary
 * //       SMCapacityReservationArn: "STRING_VALUE", // required
 * //       SMCapacityReservationId: "STRING_VALUE", // required
 * //       Owner: "STRING_VALUE", // required
 * //       Status: "Scheduled" || "Active" || "Expired", // required
 * //       InstanceType: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE", // required
 * //       TotalInstanceCount: Number("int"), // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapacityReservationsCommandInput - {@link ListCapacityReservationsCommandInput}
 * @returns {@link ListCapacityReservationsCommandOutput}
 * @see {@link ListCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link ListCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListCapacityReservationsCommand extends command<ListCapacityReservationsCommandInput, ListCapacityReservationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCapacityReservations",
  ListCapacityReservations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapacityReservationsRequest;
      output: ListCapacityReservationsResponse;
    };
    sdk: {
      input: ListCapacityReservationsCommandInput;
      output: ListCapacityReservationsCommandOutput;
    };
  };
}
