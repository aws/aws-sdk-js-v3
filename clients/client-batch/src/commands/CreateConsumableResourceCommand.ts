// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConsumableResourceRequest, CreateConsumableResourceResponse } from "../models/models_0";
import { CreateConsumableResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConsumableResourceCommand}.
 */
export interface CreateConsumableResourceCommandInput extends CreateConsumableResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateConsumableResourceCommand}.
 */
export interface CreateConsumableResourceCommandOutput extends CreateConsumableResourceResponse, __MetadataBearer {}

/**
 * <p>Creates an Batch consumable resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateConsumableResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateConsumableResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // CreateConsumableResourceRequest
 *   consumableResourceName: "STRING_VALUE", // required
 *   totalQuantity: Number("long"),
 *   resourceType: "STRING_VALUE",
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConsumableResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateConsumableResourceResponse
 * //   consumableResourceName: "STRING_VALUE", // required
 * //   consumableResourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConsumableResourceCommandInput - {@link CreateConsumableResourceCommandInput}
 * @returns {@link CreateConsumableResourceCommandOutput}
 * @see {@link CreateConsumableResourceCommandInput} for command's `input` shape.
 * @see {@link CreateConsumableResourceCommandOutput} for command's `response` shape.
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
 * @example To create a consumable resource
 * ```javascript
 * // Creates a Batch consumable resource.
 * const input = {
 *   consumableResourceName: "myConsumableResource",
 *   resourceType: "REPLENISHABLE",
 *   tags: {
 *     Department: "Engineering",
 *     User: "JaneDoe"
 *   },
 *   totalQuantity: 123
 * };
 * const command = new CreateConsumableResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   consumableResourceArn: "arn:aws:batch:us-east-1:012345678910:consumable-resource/myConsumableResource",
 *   consumableResourceName: "myConsumableResource"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateConsumableResourceCommand extends $Command
  .classBuilder<
    CreateConsumableResourceCommandInput,
    CreateConsumableResourceCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "CreateConsumableResource", {})
  .n("BatchClient", "CreateConsumableResourceCommand")
  .sc(CreateConsumableResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConsumableResourceRequest;
      output: CreateConsumableResourceResponse;
    };
    sdk: {
      input: CreateConsumableResourceCommandInput;
      output: CreateConsumableResourceCommandOutput;
    };
  };
}
