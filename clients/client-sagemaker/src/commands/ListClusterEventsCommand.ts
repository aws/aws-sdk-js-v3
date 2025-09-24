// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClusterEventsRequest, ListClusterEventsResponse } from "../models/models_4";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListClusterEvents } from "../schemas/schemas_20_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterEventsCommand}.
 */
export interface ListClusterEventsCommandInput extends ListClusterEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterEventsCommand}.
 */
export interface ListClusterEventsCommandOutput extends ListClusterEventsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of event summaries for a specified HyperPod cluster. The operation supports filtering, sorting, and pagination of results. This functionality is only supported when the <code>NodeProvisioningMode</code> is set to <code>Continuous</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterEventsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterEventsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterEventsRequest
 *   ClusterName: "STRING_VALUE", // required
 *   InstanceGroupName: "STRING_VALUE",
 *   NodeId: "STRING_VALUE",
 *   EventTimeAfter: new Date("TIMESTAMP"),
 *   EventTimeBefore: new Date("TIMESTAMP"),
 *   SortBy: "EventTime",
 *   SortOrder: "Ascending" || "Descending",
 *   ResourceType: "Cluster" || "InstanceGroup" || "Instance",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Events: [ // ClusterEventSummaries
 * //     { // ClusterEventSummary
 * //       EventId: "STRING_VALUE", // required
 * //       ClusterArn: "STRING_VALUE", // required
 * //       ClusterName: "STRING_VALUE", // required
 * //       InstanceGroupName: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       ResourceType: "Cluster" || "InstanceGroup" || "Instance", // required
 * //       EventTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClusterEventsCommandInput - {@link ListClusterEventsCommandInput}
 * @returns {@link ListClusterEventsCommandOutput}
 * @see {@link ListClusterEventsCommandInput} for command's `input` shape.
 * @see {@link ListClusterEventsCommandOutput} for command's `response` shape.
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
export class ListClusterEventsCommand extends $Command
  .classBuilder<
    ListClusterEventsCommandInput,
    ListClusterEventsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListClusterEvents", {})
  .n("SageMakerClient", "ListClusterEventsCommand")
  .sc(ListClusterEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterEventsRequest;
      output: ListClusterEventsResponse;
    };
    sdk: {
      input: ListClusterEventsCommandInput;
      output: ListClusterEventsCommandOutput;
    };
  };
}
