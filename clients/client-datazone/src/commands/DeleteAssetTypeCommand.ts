// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssetTypeInput, DeleteAssetTypeOutput } from "../models/models_0";
import { DeleteAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssetTypeCommand}.
 */
export interface DeleteAssetTypeCommandInput extends DeleteAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteAssetTypeCommand}.
 */
export interface DeleteAssetTypeCommandOutput extends DeleteAssetTypeOutput, __MetadataBearer {}

/**
 * Deletes an asset type in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The asset type must exist in the domain.
 * - You must have DeleteAssetType permission.
 * - The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail.
 * - You should retrieve the asset type using get-asset-type to confirm its presence before deletion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetTypeCommandInput - {@link DeleteAssetTypeCommandInput}
 * @returns {@link DeleteAssetTypeCommandOutput}
 * @see {@link DeleteAssetTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteAssetTypeCommand extends command<DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssetType",
  DeleteAssetType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetTypeInput;
      output: {};
    };
    sdk: {
      input: DeleteAssetTypeCommandInput;
      output: DeleteAssetTypeCommandOutput;
    };
  };
}
