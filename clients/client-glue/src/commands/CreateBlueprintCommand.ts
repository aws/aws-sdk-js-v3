// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBlueprintRequest, CreateBlueprintResponse } from "../models/models_0";
import { CreateBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandInput extends CreateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandOutput extends CreateBlueprintResponse, __MetadataBearer {}

/**
 * Registers a blueprint with Glue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BlueprintLocation: "STRING_VALUE", // required
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBlueprintCommandInput - {@link CreateBlueprintCommandInput}
 * @returns {@link CreateBlueprintCommandOutput}
 * @see {@link CreateBlueprintCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
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
export class CreateBlueprintCommand extends command<CreateBlueprintCommandInput, CreateBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "CreateBlueprint",
  CreateBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueprintRequest;
      output: CreateBlueprintResponse;
    };
    sdk: {
      input: CreateBlueprintCommandInput;
      output: CreateBlueprintCommandOutput;
    };
  };
}
