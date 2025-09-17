// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConsumableResourceRequest, DescribeConsumableResourceResponse } from "../models/models_0";
import { de_DescribeConsumableResourceCommand, se_DescribeConsumableResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConsumableResourceCommand}.
 */
export interface DescribeConsumableResourceCommandInput extends DescribeConsumableResourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConsumableResourceCommand}.
 */
export interface DescribeConsumableResourceCommandOutput extends DescribeConsumableResourceResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the specified consumable resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeConsumableResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeConsumableResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DescribeConsumableResourceRequest
 *   consumableResource: "STRING_VALUE", // required
 * };
 * const command = new DescribeConsumableResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConsumableResourceResponse
 * //   consumableResourceName: "STRING_VALUE", // required
 * //   consumableResourceArn: "STRING_VALUE", // required
 * //   totalQuantity: Number("long"),
 * //   inUseQuantity: Number("long"),
 * //   availableQuantity: Number("long"),
 * //   resourceType: "STRING_VALUE",
 * //   createdAt: Number("long"),
 * //   tags: { // TagrisTagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConsumableResourceCommandInput - {@link DescribeConsumableResourceCommandInput}
 * @returns {@link DescribeConsumableResourceCommandOutput}
 * @see {@link DescribeConsumableResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeConsumableResourceCommandOutput} for command's `response` shape.
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
 * @example To get a description of a consumable resource
 * ```javascript
 * // Returns a description of the specified consumable resource.
 * const input = {
 *   consumableResource: "myConsumableResource"
 * };
 * const command = new DescribeConsumableResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   availableQuantity: 123,
 *   consumableResourceArn: "arn:aws:batch:us-east-1:012345678910:consumable-resource/myConsumableResource",
 *   consumableResourceName: "myConsumableResource",
 *   createdAt: 123,
 *   inUseQuantity: 123,
 *   resourceType: "REPLENISHABLE",
 *   tags: {
 *     Department: "Engineering",
 *     User: "JaneDoe"
 *   },
 *   totalQuantity: 123
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeConsumableResourceCommand extends $Command
  .classBuilder<
    DescribeConsumableResourceCommandInput,
    DescribeConsumableResourceCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DescribeConsumableResource", {})
  .n("BatchClient", "DescribeConsumableResourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConsumableResourceCommand)
  .de(de_DescribeConsumableResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConsumableResourceRequest;
      output: DescribeConsumableResourceResponse;
    };
    sdk: {
      input: DescribeConsumableResourceCommandInput;
      output: DescribeConsumableResourceCommandOutput;
    };
  };
}
