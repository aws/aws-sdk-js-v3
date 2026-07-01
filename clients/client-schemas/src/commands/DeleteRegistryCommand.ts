// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRegistryRequest } from "../models/models_0";
import { DeleteRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandInput extends DeleteRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryCommand}.
 */
export interface DeleteRegistryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DeleteRegistryRequest
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRegistryCommandInput - {@link DeleteRegistryCommandInput}
 * @returns {@link DeleteRegistryCommandOutput}
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class DeleteRegistryCommand extends command<DeleteRegistryCommandInput, DeleteRegistryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRegistry",
  DeleteRegistry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRegistryRequest;
      output: {};
    };
    sdk: {
      input: DeleteRegistryCommandInput;
      output: DeleteRegistryCommandOutput;
    };
  };
}
