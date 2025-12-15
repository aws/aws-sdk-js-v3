// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportWorkspaceMediaRequest, ImportWorkspaceMediaResponse } from "../models/models_1";
import { ImportWorkspaceMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportWorkspaceMediaCommand}.
 */
export interface ImportWorkspaceMediaCommandInput extends ImportWorkspaceMediaRequest {}
/**
 * @public
 *
 * The output of {@link ImportWorkspaceMediaCommand}.
 */
export interface ImportWorkspaceMediaCommandOutput extends ImportWorkspaceMediaResponse, __MetadataBearer {}

/**
 * <p>Imports a media asset (such as a logo) for use in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ImportWorkspaceMediaCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ImportWorkspaceMediaCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ImportWorkspaceMediaRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   MediaType: "IMAGE_LOGO_LIGHT_FAVICON" || "IMAGE_LOGO_DARK_FAVICON" || "IMAGE_LOGO_LIGHT_HORIZONTAL" || "IMAGE_LOGO_DARK_HORIZONTAL", // required
 *   MediaSource: "STRING_VALUE", // required
 * };
 * const command = new ImportWorkspaceMediaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportWorkspaceMediaCommandInput - {@link ImportWorkspaceMediaCommandInput}
 * @returns {@link ImportWorkspaceMediaCommandOutput}
 * @see {@link ImportWorkspaceMediaCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceMediaCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ImportWorkspaceMediaCommand extends $Command
  .classBuilder<
    ImportWorkspaceMediaCommandInput,
    ImportWorkspaceMediaCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ImportWorkspaceMedia", {})
  .n("ConnectClient", "ImportWorkspaceMediaCommand")
  .sc(ImportWorkspaceMedia$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportWorkspaceMediaRequest;
      output: {};
    };
    sdk: {
      input: ImportWorkspaceMediaCommandInput;
      output: ImportWorkspaceMediaCommandOutput;
    };
  };
}
