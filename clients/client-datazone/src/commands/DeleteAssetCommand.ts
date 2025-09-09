// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssetInput, DeleteAssetOutput } from "../models/models_0";
import { de_DeleteAssetCommand, se_DeleteAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandInput extends DeleteAssetInput {}
/**
 * @public
 *
 * The output of {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandOutput extends DeleteAssetOutput, __MetadataBearer {}

/**
 * <p>Deletes an asset in Amazon DataZone.</p> <ul> <li> <p>--domain-identifier must refer to a valid and existing domain. </p> </li> <li> <p>--identifier must refer to an existing asset in the specified domain.</p> </li> <li> <p>Asset must not be referenced in any existing asset filters.</p> </li> <li> <p>Asset must not be linked to any draft or published data product.</p> </li> <li> <p>User must have delete permissions for the domain and project.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteAssetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteAssetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // DeleteAssetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetCommandInput - {@link DeleteAssetCommandInput}
 * @returns {@link DeleteAssetCommandOutput}
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
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
export class DeleteAssetCommand extends $Command
  .classBuilder<
    DeleteAssetCommandInput,
    DeleteAssetCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "DeleteAsset", {})
  .n("DataZoneClient", "DeleteAssetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssetCommand)
  .de(de_DeleteAssetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetInput;
      output: {};
    };
    sdk: {
      input: DeleteAssetCommandInput;
      output: DeleteAssetCommandOutput;
    };
  };
}
