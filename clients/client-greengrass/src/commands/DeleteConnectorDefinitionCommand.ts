// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectorDefinitionRequest, DeleteConnectorDefinitionResponse } from "../models/models_0";
import { DeleteConnectorDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectorDefinitionCommand}.
 */
export interface DeleteConnectorDefinitionCommandInput extends DeleteConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorDefinitionCommand}.
 */
export interface DeleteConnectorDefinitionCommandOutput extends DeleteConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteConnectorDefinitionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectorDefinitionCommandInput - {@link DeleteConnectorDefinitionCommandInput}
 * @returns {@link DeleteConnectorDefinitionCommandOutput}
 * @see {@link DeleteConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class DeleteConnectorDefinitionCommand extends command<DeleteConnectorDefinitionCommandInput, DeleteConnectorDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectorDefinition",
  DeleteConnectorDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectorDefinitionCommandInput;
      output: DeleteConnectorDefinitionCommandOutput;
    };
  };
}
