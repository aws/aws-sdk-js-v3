// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRegistryInput, CreateRegistryResponse } from "../models/models_1";
import { CreateRegistry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRegistryCommand}.
 */
export interface CreateRegistryCommandInput extends CreateRegistryInput {}
/**
 * @public
 *
 * The output of {@link CreateRegistryCommand}.
 */
export interface CreateRegistryCommandOutput extends CreateRegistryResponse, __MetadataBearer {}

/**
 * Creates a new registry which may be used to hold a collection of schemas.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateRegistryInput
 *   RegistryName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRegistryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRegistryResponse
 * //   RegistryArn: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRegistryCommandInput - {@link CreateRegistryCommandInput}
 * @returns {@link CreateRegistryCommandOutput}
 * @see {@link CreateRegistryCommandInput} for command's `input` shape.
 * @see {@link CreateRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateRegistryCommand extends command<CreateRegistryCommandInput, CreateRegistryCommandOutput>(
  _ep0,
  _mw0,
  "CreateRegistry",
  CreateRegistry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRegistryInput;
      output: CreateRegistryResponse;
    };
    sdk: {
      input: CreateRegistryCommandInput;
      output: CreateRegistryCommandOutput;
    };
  };
}
