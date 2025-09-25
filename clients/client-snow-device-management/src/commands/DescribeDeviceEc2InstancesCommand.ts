// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeviceEc2Input, DescribeDeviceEc2Output } from "../models/models_0";
import { DescribeDeviceEc2Instances } from "../schemas/schemas_1_Describe";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceEc2InstancesCommand}.
 */
export interface DescribeDeviceEc2InstancesCommandInput extends DescribeDeviceEc2Input {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceEc2InstancesCommand}.
 */
export interface DescribeDeviceEc2InstancesCommandOutput extends DescribeDeviceEc2Output, __MetadataBearer {}

/**
 * <p>Checks the current state of the Amazon EC2 instances. The output is similar to
 *         <code>describeDevice</code>, but the results are sourced from the device cache in the
 *       Amazon Web Services Cloud and include a subset of the available fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * // import type { SnowDeviceManagementClientConfig } from "@aws-sdk/client-snow-device-management";
 * const config = {}; // type is SnowDeviceManagementClientConfig
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // DescribeDeviceEc2Input
 *   managedDeviceId: "STRING_VALUE", // required
 *   instanceIds: [ // InstanceIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeviceEc2InstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceEc2Output
 * //   instances: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       instance: { // Instance
 * //         imageId: "STRING_VALUE",
 * //         amiLaunchIndex: Number("int"),
 * //         instanceId: "STRING_VALUE",
 * //         state: { // InstanceState
 * //           code: Number("int"),
 * //           name: "STRING_VALUE",
 * //         },
 * //         instanceType: "STRING_VALUE",
 * //         privateIpAddress: "STRING_VALUE",
 * //         publicIpAddress: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         blockDeviceMappings: [ // InstanceBlockDeviceMappingList
 * //           { // InstanceBlockDeviceMapping
 * //             deviceName: "STRING_VALUE",
 * //             ebs: { // EbsInstanceBlockDevice
 * //               attachTime: new Date("TIMESTAMP"),
 * //               deleteOnTermination: true || false,
 * //               status: "STRING_VALUE",
 * //               volumeId: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         securityGroups: [ // SecurityGroupIdentifierList
 * //           { // SecurityGroupIdentifier
 * //             groupId: "STRING_VALUE",
 * //             groupName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cpuOptions: { // CpuOptions
 * //           coreCount: Number("int"),
 * //           threadsPerCore: Number("int"),
 * //         },
 * //         rootDeviceName: "STRING_VALUE",
 * //       },
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeviceEc2InstancesCommandInput - {@link DescribeDeviceEc2InstancesCommandInput}
 * @returns {@link DescribeDeviceEc2InstancesCommandOutput}
 * @see {@link DescribeDeviceEc2InstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceEc2InstancesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 *
 * @public
 */
export class DescribeDeviceEc2InstancesCommand extends $Command
  .classBuilder<
    DescribeDeviceEc2InstancesCommandInput,
    DescribeDeviceEc2InstancesCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SnowDeviceManagement", "DescribeDeviceEc2Instances", {})
  .n("SnowDeviceManagementClient", "DescribeDeviceEc2InstancesCommand")
  .sc(DescribeDeviceEc2Instances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeviceEc2Input;
      output: DescribeDeviceEc2Output;
    };
    sdk: {
      input: DescribeDeviceEc2InstancesCommandInput;
      output: DescribeDeviceEc2InstancesCommandOutput;
    };
  };
}
