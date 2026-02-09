// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteConnectionTypeRequest, DeleteConnectionTypeResponse } from "../models/models_1";
import { DeleteConnectionType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionTypeCommand}.
 */
export interface DeleteConnectionTypeCommandInput extends DeleteConnectionTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionTypeCommand}.
 */
export interface DeleteConnectionTypeCommandOutput extends DeleteConnectionTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom connection type in Glue.</p>
 *          <p>The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteConnectionTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteConnectionTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteConnectionTypeRequest
 *   ConnectionType: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionTypeCommandInput - {@link DeleteConnectionTypeCommandInput}
 * @returns {@link DeleteConnectionTypeCommandOutput}
 * @see {@link DeleteConnectionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionTypeCommand extends $Command
  .classBuilder<
    DeleteConnectionTypeCommandInput,
    DeleteConnectionTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteConnectionType", {})
  .n("GlueClient", "DeleteConnectionTypeCommand")
  .sc(DeleteConnectionType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionTypeCommandInput;
      output: DeleteConnectionTypeCommandOutput;
    };
  };
}
