// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDevEndpointRequest, DeleteDevEndpointResponse } from "../models/models_1";
import { DeleteDevEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDevEndpointCommand}.
 */
export interface DeleteDevEndpointCommandInput extends DeleteDevEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDevEndpointCommand}.
 */
export interface DeleteDevEndpointCommandOutput extends DeleteDevEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteDevEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDevEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDevEndpointCommandInput - {@link DeleteDevEndpointCommandInput}
 * @returns {@link DeleteDevEndpointCommandOutput}
 * @see {@link DeleteDevEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteDevEndpointCommand extends $Command
  .classBuilder<
    DeleteDevEndpointCommandInput,
    DeleteDevEndpointCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteDevEndpoint", {})
  .n("GlueClient", "DeleteDevEndpointCommand")
  .sc(DeleteDevEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDevEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeleteDevEndpointCommandInput;
      output: DeleteDevEndpointCommandOutput;
    };
  };
}
