// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConsumableResourceRequest, UpdateConsumableResourceResponse } from "../models/models_0";
import { de_UpdateConsumableResourceCommand, se_UpdateConsumableResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConsumableResourceCommand}.
 */
export interface UpdateConsumableResourceCommandInput extends UpdateConsumableResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConsumableResourceCommand}.
 */
export interface UpdateConsumableResourceCommandOutput extends UpdateConsumableResourceResponse, __MetadataBearer {}

/**
 * <p>Updates a consumable resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateConsumableResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateConsumableResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // UpdateConsumableResourceRequest
 *   consumableResource: "STRING_VALUE", // required
 *   operation: "STRING_VALUE",
 *   quantity: Number("long"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateConsumableResourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConsumableResourceResponse
 * //   consumableResourceName: "STRING_VALUE", // required
 * //   consumableResourceArn: "STRING_VALUE", // required
 * //   totalQuantity: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateConsumableResourceCommandInput - {@link UpdateConsumableResourceCommandInput}
 * @returns {@link UpdateConsumableResourceCommandOutput}
 * @see {@link UpdateConsumableResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateConsumableResourceCommandOutput} for command's `response` shape.
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
 * @example To update a consumable resource
 * ```javascript
 * // Updates a consumable resource.
 * const input = {
 *   consumableResource: "myConsumableResource",
 *   operation: "ADD",
 *   quantity: 12
 * };
 * const command = new UpdateConsumableResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   consumableResourceArn: "arn:aws:batch:us-east-1:012345678910:consumable-resource/myConsumableResource",
 *   consumableResourceName: "myConsumableResource",
 *   totalQuantity: 135
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConsumableResourceCommand extends $Command
  .classBuilder<
    UpdateConsumableResourceCommandInput,
    UpdateConsumableResourceCommandOutput,
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
  .s("AWSBatchV20160810", "UpdateConsumableResource", {})
  .n("BatchClient", "UpdateConsumableResourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConsumableResourceCommand)
  .de(de_UpdateConsumableResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConsumableResourceRequest;
      output: UpdateConsumableResourceResponse;
    };
    sdk: {
      input: UpdateConsumableResourceCommandInput;
      output: UpdateConsumableResourceCommandOutput;
    };
  };
}
