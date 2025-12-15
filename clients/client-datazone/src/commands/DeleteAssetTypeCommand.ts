// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAssetTypeInput, DeleteAssetTypeOutput } from "../models/models_0";
import { DeleteAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an asset type in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>The asset type must exist in the domain. </p> </li> <li> <p>You must have DeleteAssetType permission.</p> </li> <li> <p>The asset type must not be in use (e.g., assigned to any asset). If used, deletion will fail.</p> </li> <li> <p>You should retrieve the asset type using get-asset-type to confirm its presence before deletion.</p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class DeleteAssetTypeCommand extends $Command
  .classBuilder<
    DeleteAssetTypeCommandInput,
    DeleteAssetTypeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteAssetType", {})
  .n("DataZoneClient", "DeleteAssetTypeCommand")
  .sc(DeleteAssetType$)
  .build() {
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
