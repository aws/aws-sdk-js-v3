// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeResourceAssociationsRequest, DescribeResourceAssociationsResponse } from "../models/models_3";
import { DescribeResourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeResourceAssociationsCommand}.
 */
export interface DescribeResourceAssociationsCommandInput extends DescribeResourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceAssociationsCommand}.
 */
export interface DescribeResourceAssociationsCommandOutput extends DescribeResourceAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns the resources in your account that are associated with a SageMaker Capacity Reservation and the status of each association. Resources include SageMaker AI HyperPod clusters and SageMaker AI endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeResourceAssociationsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeResourceAssociationsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeResourceAssociationsRequest
 *   SMCapacityReservationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceAssociationsResponse
 * //   SMCapacityReservationArn: "STRING_VALUE", // required
 * //   SMCapacityReservationId: "STRING_VALUE", // required
 * //   ResourceAssociations: [ // CapacityReservationResourceAssociations // required
 * //     { // CapacityReservationResourceAssociation Union: only one key present
 * //       HyperPodClusters: { // CapacityReservationHyperPodClustersAssociation
 * //         Status: "Pending" || "Active" || "Inactive", // required
 * //         FailureReason: "STRING_VALUE",
 * //         AssociatedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       Endpoints: { // CapacityReservationEndpointsAssociation
 * //         MlReservationId: "STRING_VALUE",
 * //         Status: "Pending" || "Active" || "Inactive", // required
 * //         MatchCriteria: "Open" || "Targeted",
 * //         EndpointSharing: "SingleEndpoint" || "MultipleEndpoints",
 * //         MlReservationArn: "STRING_VALUE",
 * //         FailureReason: "STRING_VALUE",
 * //         AssociatedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourceAssociationsCommandInput - {@link DescribeResourceAssociationsCommandInput}
 * @returns {@link DescribeResourceAssociationsCommandOutput}
 * @see {@link DescribeResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeResourceAssociationsCommand extends command<DescribeResourceAssociationsCommandInput, DescribeResourceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeResourceAssociations",
  DescribeResourceAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceAssociationsRequest;
      output: DescribeResourceAssociationsResponse;
    };
    sdk: {
      input: DescribeResourceAssociationsCommandInput;
      output: DescribeResourceAssociationsCommandOutput;
    };
  };
}
