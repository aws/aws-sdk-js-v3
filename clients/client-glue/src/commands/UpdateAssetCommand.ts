// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssetRequest, UpdateAssetResponse } from "../models/models_3";
import { UpdateAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssetCommand}.
 */
export interface UpdateAssetCommandInput extends UpdateAssetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssetCommand}.
 */
export interface UpdateAssetCommandOutput extends UpdateAssetResponse, __MetadataBearer {}

/**
 * <p>Updates the name and description of an existing asset in Glue Data Catalog. Only the fields that you provide are updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateAssetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateAssetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateAssetRequest
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateAssetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetResponse
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateAssetCommandInput - {@link UpdateAssetCommandInput}
 * @returns {@link UpdateAssetCommandOutput}
 * @see {@link UpdateAssetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateAssetCommand extends command<UpdateAssetCommandInput, UpdateAssetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAsset",
  UpdateAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetRequest;
      output: UpdateAssetResponse;
    };
    sdk: {
      input: UpdateAssetCommandInput;
      output: UpdateAssetCommandOutput;
    };
  };
}
