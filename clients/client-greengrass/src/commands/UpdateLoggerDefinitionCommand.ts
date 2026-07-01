// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLoggerDefinitionRequest, UpdateLoggerDefinitionResponse } from "../models/models_0";
import { UpdateLoggerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLoggerDefinitionCommand}.
 */
export interface UpdateLoggerDefinitionCommandInput extends UpdateLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoggerDefinitionCommand}.
 */
export interface UpdateLoggerDefinitionCommandOutput extends UpdateLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Updates a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateLoggerDefinitionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLoggerDefinitionCommandInput - {@link UpdateLoggerDefinitionCommandInput}
 * @returns {@link UpdateLoggerDefinitionCommandOutput}
 * @see {@link UpdateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class UpdateLoggerDefinitionCommand extends command<UpdateLoggerDefinitionCommandInput, UpdateLoggerDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLoggerDefinition",
  UpdateLoggerDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLoggerDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateLoggerDefinitionCommandInput;
      output: UpdateLoggerDefinitionCommandOutput;
    };
  };
}
