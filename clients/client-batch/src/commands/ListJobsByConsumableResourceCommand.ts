// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListJobsByConsumableResourceRequest, ListJobsByConsumableResourceResponse } from "../models/models_0";
import { ListJobsByConsumableResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsByConsumableResourceCommand}.
 */
export interface ListJobsByConsumableResourceCommandInput extends ListJobsByConsumableResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsByConsumableResourceCommand}.
 */
export interface ListJobsByConsumableResourceCommandOutput
  extends ListJobsByConsumableResourceResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of Batch jobs that require a specific consumable resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListJobsByConsumableResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListJobsByConsumableResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListJobsByConsumableResourceRequest
 *   consumableResource: "STRING_VALUE", // required
 *   filters: [ // ListJobsByConsumableResourceFilterList
 *     { // KeyValuesPair
 *       name: "STRING_VALUE",
 *       values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobsByConsumableResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsByConsumableResourceResponse
 * //   jobs: [ // ListJobsByConsumableResourceSummaryList // required
 * //     { // ListJobsByConsumableResourceSummary
 * //       jobArn: "STRING_VALUE", // required
 * //       jobQueueArn: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       jobDefinitionArn: "STRING_VALUE",
 * //       shareIdentifier: "STRING_VALUE",
 * //       jobStatus: "STRING_VALUE", // required
 * //       quantity: Number("long"), // required
 * //       statusReason: "STRING_VALUE",
 * //       startedAt: Number("long"),
 * //       createdAt: Number("long"), // required
 * //       consumableResourceProperties: { // ConsumableResourceProperties
 * //         consumableResourceList: [ // ConsumableResourceList
 * //           { // ConsumableResourceRequirement
 * //             consumableResource: "STRING_VALUE",
 * //             quantity: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsByConsumableResourceCommandInput - {@link ListJobsByConsumableResourceCommandInput}
 * @returns {@link ListJobsByConsumableResourceCommandOutput}
 * @see {@link ListJobsByConsumableResourceCommandInput} for command's `input` shape.
 * @see {@link ListJobsByConsumableResourceCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To get a list of Batch jobs by consumable resource
 * ```javascript
 * // Returns a list of Batch jobs that require a specific consumable resource.
 * const input = {
 *   consumableResource: "myConsumableResource",
 *   filters: [
 *     {
 *       name: "CONSUMABLE_RESOURCE_NAME",
 *       values: [
 *         "my*"
 *       ]
 *     }
 *   ],
 *   maxResults: 123
 * };
 * const command = new ListJobsByConsumableResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobs: [
 *     {
 *       consumableResourceProperties: {
 *         consumableResourceList: [
 *           {
 *             consumableResource: "myConsumableResource",
 *             quantity: 123
 *           }
 *         ]
 *       },
 *       createdAt: 1480460782010,
 *       jobArn: "arn:aws:batch:us-east-1:012345678910:job/myJob",
 *       jobDefinitionArn: "arn:aws:batch:us-east-1:012345678910:job-definition/myJobDef",
 *       jobName: "myJob",
 *       jobQueueArn: "arn:aws:batch:us-east-1:012345678910:job-queue/myJobQueue",
 *       jobStatus: "PENDING",
 *       quantity: 123
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListJobsByConsumableResourceCommand extends $Command
  .classBuilder<
    ListJobsByConsumableResourceCommandInput,
    ListJobsByConsumableResourceCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "ListJobsByConsumableResource", {})
  .n("BatchClient", "ListJobsByConsumableResourceCommand")
  .sc(ListJobsByConsumableResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsByConsumableResourceRequest;
      output: ListJobsByConsumableResourceResponse;
    };
    sdk: {
      input: ListJobsByConsumableResourceCommandInput;
      output: ListJobsByConsumableResourceCommandOutput;
    };
  };
}
