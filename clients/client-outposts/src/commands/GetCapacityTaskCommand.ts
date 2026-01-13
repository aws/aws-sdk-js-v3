// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCapacityTaskInput, GetCapacityTaskOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetCapacityTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityTaskCommand}.
 */
export interface GetCapacityTaskCommandInput extends GetCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link GetCapacityTaskCommand}.
 */
export interface GetCapacityTaskCommandOutput extends GetCapacityTaskOutput, __MetadataBearer {}

/**
 * <p>Gets details of the specified capacity task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetCapacityTaskInput
 *   CapacityTaskId: "STRING_VALUE", // required
 *   OutpostIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityTaskOutput
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
 * @param GetCapacityTaskCommandInput - {@link GetCapacityTaskCommandInput}
 * @returns {@link GetCapacityTaskCommandOutput}
 * @see {@link GetCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link GetCapacityTaskCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
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
export class GetCapacityTaskCommand extends $Command
  .classBuilder<
    GetCapacityTaskCommandInput,
    GetCapacityTaskCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "GetCapacityTask", {})
  .n("OutpostsClient", "GetCapacityTaskCommand")
  .sc(GetCapacityTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityTaskInput;
      output: GetCapacityTaskOutput;
    };
    sdk: {
      input: GetCapacityTaskCommandInput;
      output: GetCapacityTaskCommandOutput;
    };
  };
}
