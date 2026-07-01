// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourceDefinitionRequest, DeleteResourceDefinitionResponse } from "../models/models_0";
import { DeleteResourceDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourceDefinitionCommand}.
 */
export interface DeleteResourceDefinitionCommandInput extends DeleteResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceDefinitionCommand}.
 */
export interface DeleteResourceDefinitionCommandOutput extends DeleteResourceDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteResourceDefinitionRequest
 *   ResourceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceDefinitionCommandInput - {@link DeleteResourceDefinitionCommandInput}
 * @returns {@link DeleteResourceDefinitionCommandOutput}
 * @see {@link DeleteResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteResourceDefinitionCommand extends command<DeleteResourceDefinitionCommandInput, DeleteResourceDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourceDefinition",
  DeleteResourceDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceDefinitionCommandInput;
      output: DeleteResourceDefinitionCommandOutput;
    };
  };
}
