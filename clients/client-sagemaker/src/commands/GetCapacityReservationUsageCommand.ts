// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResponse } from "../models/models_3";
import { GetCapacityReservationUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandInput extends GetCapacityReservationUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandOutput extends GetCapacityReservationUsageResponse, __MetadataBearer {}

/**
 * <p>Returns the number of instances in use from a SageMaker Capacity Reservation, for each account that uses them.</p> <p>SageMaker AI refreshes the usage counts periodically. The <code>LastRefreshTime</code> value shows when the counts were last refreshed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetCapacityReservationUsageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // GetCapacityReservationUsageRequest
 *   SMCapacityReservationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityReservationUsageResponse
 * //   SMCapacityReservationId: "STRING_VALUE", // required
 * //   TotalInstanceCount: Number("int"), // required
 * //   AvailableInstanceCount: Number("int"), // required
 * //   LastRefreshTime: new Date("TIMESTAMP"), // required
 * //   InstanceUsageSet: [ // CapacityReservationInstanceUsageSet // required
 * //     { // CapacityReservationInstanceUsage
 * //       AccountId: "STRING_VALUE", // required
 * //       InUseInstanceCount: Number("int"), // required
 * //       ResourcesUsage: [ // CapacityReservationResourceUsageSet // required
 * //         { // CapacityReservationResourceUsage
 * //           ResourceType: "HyperPodClusters" || "Endpoints", // required
 * //           InUseInstanceCount: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCapacityReservationUsageCommandInput - {@link GetCapacityReservationUsageCommandInput}
 * @returns {@link GetCapacityReservationUsageCommandOutput}
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
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
export class GetCapacityReservationUsageCommand extends command<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput>(
  _ep0,
  _mw0,
  "GetCapacityReservationUsage",
  GetCapacityReservationUsage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityReservationUsageRequest;
      output: GetCapacityReservationUsageResponse;
    };
    sdk: {
      input: GetCapacityReservationUsageCommandInput;
      output: GetCapacityReservationUsageCommandOutput;
    };
  };
}
