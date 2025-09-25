// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyEndpointEncryptionModeRequest, ModifyEndpointEncryptionModeResponse } from "../models/models_0";
import { ModifyEndpointEncryptionMode } from "../schemas/schemas_17_";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyEndpointEncryptionModeCommand}.
 */
export interface ModifyEndpointEncryptionModeCommandInput extends ModifyEndpointEncryptionModeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyEndpointEncryptionModeCommand}.
 */
export interface ModifyEndpointEncryptionModeCommandOutput
  extends ModifyEndpointEncryptionModeResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the endpoint encryption mode that allows you to configure the specified
 *          directory between Standard TLS and FIPS 140-2 validated mode. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyEndpointEncryptionModeCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyEndpointEncryptionModeCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyEndpointEncryptionModeRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   EndpointEncryptionMode: "STANDARD_TLS" || "FIPS_VALIDATED", // required
 * };
 * const command = new ModifyEndpointEncryptionModeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyEndpointEncryptionModeCommandInput - {@link ModifyEndpointEncryptionModeCommandInput}
 * @returns {@link ModifyEndpointEncryptionModeCommandOutput}
 * @see {@link ModifyEndpointEncryptionModeCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointEncryptionModeCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class ModifyEndpointEncryptionModeCommand extends $Command
  .classBuilder<
    ModifyEndpointEncryptionModeCommandInput,
    ModifyEndpointEncryptionModeCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "ModifyEndpointEncryptionMode", {})
  .n("WorkSpacesClient", "ModifyEndpointEncryptionModeCommand")
  .sc(ModifyEndpointEncryptionMode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyEndpointEncryptionModeRequest;
      output: {};
    };
    sdk: {
      input: ModifyEndpointEncryptionModeCommandInput;
      output: ModifyEndpointEncryptionModeCommandOutput;
    };
  };
}
