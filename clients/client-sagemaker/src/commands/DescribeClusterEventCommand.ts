// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClusterEventRequest, DescribeClusterEventResponse } from "../models/models_2";
import { de_DescribeClusterEventCommand, se_DescribeClusterEventCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterEventCommand}.
 */
export interface DescribeClusterEventCommandInput extends DescribeClusterEventRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterEventCommand}.
 */
export interface DescribeClusterEventCommandOutput extends DescribeClusterEventResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific event for a given HyperPod cluster. This functionality is only supported when the <code>NodeProvisioningMode</code> is set to <code>Continuous</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeClusterEventCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeClusterEventCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeClusterEventRequest
 *   EventId: "STRING_VALUE", // required
 *   ClusterName: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterEventCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterEventResponse
 * //   EventDetails: { // ClusterEventDetail
 * //     EventId: "STRING_VALUE", // required
 * //     ClusterArn: "STRING_VALUE", // required
 * //     ClusterName: "STRING_VALUE", // required
 * //     InstanceGroupName: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     ResourceType: "Cluster" || "InstanceGroup" || "Instance", // required
 * //     EventTime: new Date("TIMESTAMP"), // required
 * //     EventDetails: { // EventDetails
 * //       EventMetadata: { // EventMetadata Union: only one key present
 * //         Cluster: { // ClusterMetadata
 * //           FailureMessage: "STRING_VALUE",
 * //           EksRoleAccessEntries: [ // EksRoleAccessEntries
 * //             "STRING_VALUE",
 * //           ],
 * //           SlrAccessEntry: "STRING_VALUE",
 * //         },
 * //         InstanceGroup: { // InstanceGroupMetadata
 * //           FailureMessage: "STRING_VALUE",
 * //           AvailabilityZoneId: "STRING_VALUE",
 * //           CapacityReservation: { // CapacityReservation
 * //             Arn: "STRING_VALUE",
 * //             Type: "ODCR" || "CRG",
 * //           },
 * //           SubnetId: "STRING_VALUE",
 * //           SecurityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           AmiOverride: "STRING_VALUE",
 * //         },
 * //         InstanceGroupScaling: { // InstanceGroupScalingMetadata
 * //           InstanceCount: Number("int"),
 * //           TargetCount: Number("int"),
 * //           FailureMessage: "STRING_VALUE",
 * //         },
 * //         Instance: { // InstanceMetadata
 * //           CustomerEni: "STRING_VALUE",
 * //           AdditionalEnis: { // AdditionalEnis
 * //             EfaEnis: [ // EfaEnis
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           CapacityReservation: {
 * //             Arn: "STRING_VALUE",
 * //             Type: "ODCR" || "CRG",
 * //           },
 * //           FailureMessage: "STRING_VALUE",
 * //           LcsExecutionState: "STRING_VALUE",
 * //           NodeLogicalId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterEventCommandInput - {@link DescribeClusterEventCommandInput}
 * @returns {@link DescribeClusterEventCommandOutput}
 * @see {@link DescribeClusterEventCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterEventCommandOutput} for command's `response` shape.
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
export class DescribeClusterEventCommand extends $Command
  .classBuilder<
    DescribeClusterEventCommandInput,
    DescribeClusterEventCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeClusterEvent", {})
  .n("SageMakerClient", "DescribeClusterEventCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterEventCommand)
  .de(de_DescribeClusterEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterEventRequest;
      output: DescribeClusterEventResponse;
    };
    sdk: {
      input: DescribeClusterEventCommandInput;
      output: DescribeClusterEventCommandOutput;
    };
  };
}
