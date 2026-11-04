// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBlueprintRequest, UpdateBlueprintResponse } from "../models/models_3";
import { UpdateBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandInput extends UpdateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandOutput extends UpdateBlueprintResponse, __MetadataBearer {}

/**
 * Updates a registered blueprint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BlueprintLocation: "STRING_VALUE", // required
 * };
 * const command = new UpdateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBlueprintCommandInput - {@link UpdateBlueprintCommandInput}
 * @returns {@link UpdateBlueprintCommandOutput}
 * @see {@link UpdateBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IllegalBlueprintStateException} (client fault)
 *
 * The blueprint is in an invalid state to perform a requested operation.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateBlueprintCommand extends command<UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBlueprint",
  UpdateBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBlueprintRequest;
      output: UpdateBlueprintResponse;
    };
    sdk: {
      input: UpdateBlueprintCommandInput;
      output: UpdateBlueprintCommandOutput;
    };
  };
}
