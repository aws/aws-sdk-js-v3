// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartCapacityTaskInput, StartCapacityTaskOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { StartCapacityTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCapacityTaskCommand}.
 */
export interface StartCapacityTaskCommandInput extends StartCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link StartCapacityTaskCommand}.
 */
export interface StartCapacityTaskCommandOutput extends StartCapacityTaskOutput, __MetadataBearer {}

/**
 * <p>Starts the specified capacity task. You can have one active capacity task for each order
 *       and each Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, StartCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, StartCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // StartCapacityTaskInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   OrderId: "STRING_VALUE",
 *   AssetId: "STRING_VALUE",
 *   InstancePools: [ // RequestedInstancePools // required
 *     { // InstanceTypeCapacity
 *       InstanceType: "STRING_VALUE", // required
 *       Count: Number("int"), // required
 *     },
 *   ],
 *   InstancesToExclude: { // InstancesToExclude
 *     Instances: [ // InstanceIdList
 *       "STRING_VALUE",
 *     ],
 *     AccountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *     Services: [ // AWSServiceNameList
 *       "AWS" || "EC2" || "ELASTICACHE" || "ELB" || "RDS" || "ROUTE53",
 *     ],
 *   },
 *   DryRun: true || false,
 *   TaskActionOnBlockingInstances: "WAIT_FOR_EVACUATION" || "FAIL_TASK",
 * };
 * const command = new StartCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartCapacityTaskOutput
 * //   CapacityTaskId: "STRING_VALUE",
 * //   OutpostId: "STRING_VALUE",
 * //   OrderId: "STRING_VALUE",
 * //   AssetId: "STRING_VALUE",
 * //   RequestedInstancePools: [ // RequestedInstancePools
 * //     { // InstanceTypeCapacity
 * //       InstanceType: "STRING_VALUE", // required
 * //       Count: Number("int"), // required
 * //     },
 * //   ],
 * //   InstancesToExclude: { // InstancesToExclude
 * //     Instances: [ // InstanceIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     AccountIds: [ // AccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     Services: [ // AWSServiceNameList
 * //       "AWS" || "EC2" || "ELASTICACHE" || "ELB" || "RDS" || "ROUTE53",
 * //     ],
 * //   },
 * //   DryRun: true || false,
 * //   CapacityTaskStatus: "REQUESTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "WAITING_FOR_EVACUATION" || "CANCELLATION_IN_PROGRESS" || "CANCELLED",
 * //   Failed: { // CapacityTaskFailure
 * //     Reason: "STRING_VALUE", // required
 * //     Type: "UNSUPPORTED_CAPACITY_CONFIGURATION" || "UNEXPECTED_ASSET_STATE" || "BLOCKING_INSTANCES_NOT_EVACUATED" || "INTERNAL_SERVER_ERROR" || "RESOURCE_NOT_FOUND",
 * //   },
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   TaskActionOnBlockingInstances: "WAIT_FOR_EVACUATION" || "FAIL_TASK",
 * // };
 *
 * ```
 *
 * @param StartCapacityTaskCommandInput - {@link StartCapacityTaskCommandInput}
 * @returns {@link StartCapacityTaskCommandOutput}
 * @see {@link StartCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link StartCapacityTaskCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class StartCapacityTaskCommand extends $Command
  .classBuilder<
    StartCapacityTaskCommandInput,
    StartCapacityTaskCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "StartCapacityTask", {})
  .n("OutpostsClient", "StartCapacityTaskCommand")
  .sc(StartCapacityTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCapacityTaskInput;
      output: StartCapacityTaskOutput;
    };
    sdk: {
      input: StartCapacityTaskCommandInput;
      output: StartCapacityTaskCommandOutput;
    };
  };
}
