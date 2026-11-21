// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCapacityReservationRequest, DescribeCapacityReservationResponse } from "../models/models_2";
import { DescribeCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationCommand}.
 */
export interface DescribeCapacityReservationCommandInput extends DescribeCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationCommand}.
 */
export interface DescribeCapacityReservationCommandOutput extends DescribeCapacityReservationResponse, __MetadataBearer {}

/**
 * <p>Returns details about a SageMaker Capacity Reservation, such as its instance type, instance count, Availability Zone, and start and end times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCapacityReservationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCapacityReservationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeCapacityReservationRequest
 *   SMCapacityReservationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityReservationResponse
 * //   CapacityReservation: { // CapacityReservationDetail
 * //     SMCapacityReservationArn: "STRING_VALUE", // required
 * //     SMCapacityReservationId: "STRING_VALUE", // required
 * //     Owner: "STRING_VALUE", // required
 * //     Status: "Scheduled" || "Active" || "Expired", // required
 * //     InstanceType: "STRING_VALUE", // required
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE", // required
 * //     TotalInstanceCount: Number("int"), // required
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCapacityReservationCommandInput - {@link DescribeCapacityReservationCommandInput}
 * @returns {@link DescribeCapacityReservationCommandOutput}
 * @see {@link DescribeCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityReservationCommand extends command<DescribeCapacityReservationCommandInput, DescribeCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCapacityReservation",
  DescribeCapacityReservation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityReservationRequest;
      output: DescribeCapacityReservationResponse;
    };
    sdk: {
      input: DescribeCapacityReservationCommandInput;
      output: DescribeCapacityReservationCommandOutput;
    };
  };
}
