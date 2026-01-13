// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConsumableResourcesRequest, ListConsumableResourcesResponse } from "../models/models_0";
import { ListConsumableResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConsumableResourcesCommand}.
 */
export interface ListConsumableResourcesCommandInput extends ListConsumableResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListConsumableResourcesCommand}.
 */
export interface ListConsumableResourcesCommandOutput extends ListConsumableResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch consumable resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListConsumableResourcesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListConsumableResourcesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // ListConsumableResourcesRequest
 *   filters: [ // ListConsumableResourcesFilterList
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
 * const command = new ListConsumableResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListConsumableResourcesResponse
 * //   consumableResources: [ // ConsumableResourceSummaryList // required
 * //     { // ConsumableResourceSummary
 * //       consumableResourceArn: "STRING_VALUE", // required
 * //       consumableResourceName: "STRING_VALUE", // required
 * //       totalQuantity: Number("long"),
 * //       inUseQuantity: Number("long"),
 * //       resourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConsumableResourcesCommandInput - {@link ListConsumableResourcesCommandInput}
 * @returns {@link ListConsumableResourcesCommandOutput}
 * @see {@link ListConsumableResourcesCommandInput} for command's `input` shape.
 * @see {@link ListConsumableResourcesCommandOutput} for command's `response` shape.
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
 * @example To get a list of a consumable resources
 * ```javascript
 * // Returns a list of the consumable resources for your account.
 * const input = {
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
 * const command = new ListConsumableResourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   consumableResources: [
 *     {
 *       consumableResourceArn: "arn:aws:batch:us-east-1:012345678910:consumable-resource/myConsumableResource",
 *       consumableResourceName: "myConsumableResource",
 *       inUseQuantity: 12,
 *       resourceType: "REPLENISHABLE",
 *       totalQuantity: 123
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConsumableResourcesCommand extends $Command
  .classBuilder<
    ListConsumableResourcesCommandInput,
    ListConsumableResourcesCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "ListConsumableResources", {})
  .n("BatchClient", "ListConsumableResourcesCommand")
  .sc(ListConsumableResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConsumableResourcesRequest;
      output: ListConsumableResourcesResponse;
    };
    sdk: {
      input: ListConsumableResourcesCommandInput;
      output: ListConsumableResourcesCommandOutput;
    };
  };
}
