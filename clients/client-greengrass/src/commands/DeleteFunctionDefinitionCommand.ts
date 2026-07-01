// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFunctionDefinitionRequest, DeleteFunctionDefinitionResponse } from "../models/models_0";
import { DeleteFunctionDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFunctionDefinitionCommand}.
 */
export interface DeleteFunctionDefinitionCommandInput extends DeleteFunctionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionDefinitionCommand}.
 */
export interface DeleteFunctionDefinitionCommandOutput extends DeleteFunctionDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteFunctionDefinitionRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionDefinitionCommandInput - {@link DeleteFunctionDefinitionCommandInput}
 * @returns {@link DeleteFunctionDefinitionCommandOutput}
 * @see {@link DeleteFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteFunctionDefinitionCommand extends command<DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFunctionDefinition",
  DeleteFunctionDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFunctionDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionDefinitionCommandInput;
      output: DeleteFunctionDefinitionCommandOutput;
    };
  };
}
