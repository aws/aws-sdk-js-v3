// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListBlockingInstancesForCapacityTaskInput,
  ListBlockingInstancesForCapacityTaskOutput,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListBlockingInstancesForCapacityTask } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBlockingInstancesForCapacityTaskCommand}.
 */
export interface ListBlockingInstancesForCapacityTaskCommandInput extends ListBlockingInstancesForCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link ListBlockingInstancesForCapacityTaskCommand}.
 */
export interface ListBlockingInstancesForCapacityTaskCommandOutput
  extends ListBlockingInstancesForCapacityTaskOutput,
    __MetadataBearer {}

/**
 * <p>A list of Amazon EC2 instances running on the Outpost and belonging to the account that
 *       initiated the capacity task. Use this list to specify the instances you cannot stop to free up
 *       capacity to run the capacity task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListBlockingInstancesForCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListBlockingInstancesForCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListBlockingInstancesForCapacityTaskInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   CapacityTaskId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBlockingInstancesForCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListBlockingInstancesForCapacityTaskOutput
 * //   BlockingInstances: [ // BlockingInstancesList
 * //     { // BlockingInstance
 * //       InstanceId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       AwsServiceName: "AWS" || "EC2" || "ELASTICACHE" || "ELB" || "RDS" || "ROUTE53",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBlockingInstancesForCapacityTaskCommandInput - {@link ListBlockingInstancesForCapacityTaskCommandInput}
 * @returns {@link ListBlockingInstancesForCapacityTaskCommandOutput}
 * @see {@link ListBlockingInstancesForCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link ListBlockingInstancesForCapacityTaskCommandOutput} for command's `response` shape.
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
export class ListBlockingInstancesForCapacityTaskCommand extends $Command
  .classBuilder<
    ListBlockingInstancesForCapacityTaskCommandInput,
    ListBlockingInstancesForCapacityTaskCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "ListBlockingInstancesForCapacityTask", {})
  .n("OutpostsClient", "ListBlockingInstancesForCapacityTaskCommand")
  .sc(ListBlockingInstancesForCapacityTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBlockingInstancesForCapacityTaskInput;
      output: ListBlockingInstancesForCapacityTaskOutput;
    };
    sdk: {
      input: ListBlockingInstancesForCapacityTaskCommandInput;
      output: ListBlockingInstancesForCapacityTaskCommandOutput;
    };
  };
}
