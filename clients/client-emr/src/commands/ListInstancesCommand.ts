// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInstancesInput, ListInstancesOutput } from "../models/models_0";
import { ListInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesOutput, __MetadataBearer {}

/**
 * <p>Provides information for all active Amazon EC2 instances and Amazon EC2
 *          instances terminated in the last 30 days, up to a maximum of 2,000. Amazon EC2
 *          instances in any of the following states are considered active: AWAITING_FULFILLMENT,
 *          PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstancesCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstancesCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListInstancesInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceGroupId: "STRING_VALUE",
 *   InstanceGroupTypes: [ // InstanceGroupTypeList
 *     "MASTER" || "CORE" || "TASK",
 *   ],
 *   InstanceFleetId: "STRING_VALUE",
 *   InstanceFleetType: "MASTER" || "CORE" || "TASK",
 *   InstanceStates: [ // InstanceStateList
 *     "AWAITING_FULFILLMENT" || "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "TERMINATED",
 *   ],
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstancesOutput
 * //   Instances: [ // InstanceList
 * //     { // Instance
 * //       Id: "STRING_VALUE",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       PublicDnsName: "STRING_VALUE",
 * //       PublicIpAddress: "STRING_VALUE",
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       Status: { // InstanceStatus
 * //         State: "AWAITING_FULFILLMENT" || "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "TERMINATED",
 * //         StateChangeReason: { // InstanceStateChangeReason
 * //           Code: "INTERNAL_ERROR" || "VALIDATION_ERROR" || "INSTANCE_FAILURE" || "BOOTSTRAP_FAILURE" || "CLUSTER_TERMINATED",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         Timeline: { // InstanceTimeline
 * //           CreationDateTime: new Date("TIMESTAMP"),
 * //           ReadyDateTime: new Date("TIMESTAMP"),
 * //           EndDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       InstanceGroupId: "STRING_VALUE",
 * //       InstanceFleetId: "STRING_VALUE",
 * //       Market: "ON_DEMAND" || "SPOT",
 * //       InstanceType: "STRING_VALUE",
 * //       EbsVolumes: [ // EbsVolumeList
 * //         { // EbsVolume
 * //           Device: "STRING_VALUE",
 * //           VolumeId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListInstancesCommand extends $Command
  .classBuilder<
    ListInstancesCommandInput,
    ListInstancesCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListInstances", {})
  .n("EMRClient", "ListInstancesCommand")
  .sc(ListInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstancesInput;
      output: ListInstancesOutput;
    };
    sdk: {
      input: ListInstancesCommandInput;
      output: ListInstancesCommandOutput;
    };
  };
}
