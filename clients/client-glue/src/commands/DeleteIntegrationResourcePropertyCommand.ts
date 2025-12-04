// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  DeleteIntegrationResourcePropertyRequest,
  DeleteIntegrationResourcePropertyResponse,
} from "../models/models_1";
import { DeleteIntegrationResourceProperty } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationResourcePropertyCommand}.
 */
export interface DeleteIntegrationResourcePropertyCommandInput extends DeleteIntegrationResourcePropertyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationResourcePropertyCommand}.
 */
export interface DeleteIntegrationResourcePropertyCommandOutput
  extends DeleteIntegrationResourcePropertyResponse,
    __MetadataBearer {}

/**
 * <p>This API is used for deleting the <code>ResourceProperty</code> of the Glue connection (for the source) or Glue database ARN (for the target).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteIntegrationResourcePropertyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteIntegrationResourcePropertyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteIntegrationResourcePropertyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationResourcePropertyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationResourcePropertyCommandInput - {@link DeleteIntegrationResourcePropertyCommandInput}
 * @returns {@link DeleteIntegrationResourcePropertyCommandOutput}
 * @see {@link DeleteIntegrationResourcePropertyCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationResourcePropertyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
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
export class DeleteIntegrationResourcePropertyCommand extends $Command
  .classBuilder<
    DeleteIntegrationResourcePropertyCommandInput,
    DeleteIntegrationResourcePropertyCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteIntegrationResourceProperty", {})
  .n("GlueClient", "DeleteIntegrationResourcePropertyCommand")
  .sc(DeleteIntegrationResourceProperty)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationResourcePropertyRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationResourcePropertyCommandInput;
      output: DeleteIntegrationResourcePropertyCommandOutput;
    };
  };
}
