// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConsumableResourceRequest, DeleteConsumableResourceResponse } from "../models/models_0";
import { DeleteConsumableResource } from "../schemas/schemas_18_DeleteConsumableResource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConsumableResourceCommand}.
 */
export interface DeleteConsumableResourceCommandInput extends DeleteConsumableResourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConsumableResourceCommand}.
 */
export interface DeleteConsumableResourceCommandOutput extends DeleteConsumableResourceResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified consumable resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteConsumableResourceCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteConsumableResourceCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // DeleteConsumableResourceRequest
 *   consumableResource: "STRING_VALUE", // required
 * };
 * const command = new DeleteConsumableResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConsumableResourceCommandInput - {@link DeleteConsumableResourceCommandInput}
 * @returns {@link DeleteConsumableResourceCommandOutput}
 * @see {@link DeleteConsumableResourceCommandInput} for command's `input` shape.
 * @see {@link DeleteConsumableResourceCommandOutput} for command's `response` shape.
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
 * @example To delete a consumable resource
 * ```javascript
 * // Deletes the specified consumable resource.
 * const input = {
 *   consumableResource: "myConsumableResource"
 * };
 * const command = new DeleteConsumableResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConsumableResourceCommand extends $Command
  .classBuilder<
    DeleteConsumableResourceCommandInput,
    DeleteConsumableResourceCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "DeleteConsumableResource", {})
  .n("BatchClient", "DeleteConsumableResourceCommand")
  .sc(DeleteConsumableResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConsumableResourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteConsumableResourceCommandInput;
      output: DeleteConsumableResourceCommandOutput;
    };
  };
}
