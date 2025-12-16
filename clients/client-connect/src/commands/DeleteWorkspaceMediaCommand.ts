// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkspaceMediaRequest, DeleteWorkspaceMediaResponse } from "../models/models_1";
import { DeleteWorkspaceMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceMediaCommand}.
 */
export interface DeleteWorkspaceMediaCommandInput extends DeleteWorkspaceMediaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceMediaCommand}.
 */
export interface DeleteWorkspaceMediaCommandOutput extends DeleteWorkspaceMediaResponse, __MetadataBearer {}

/**
 * <p>Deletes a media asset (such as a logo) from a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteWorkspaceMediaCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteWorkspaceMediaCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteWorkspaceMediaRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   MediaType: "IMAGE_LOGO_LIGHT_FAVICON" || "IMAGE_LOGO_DARK_FAVICON" || "IMAGE_LOGO_LIGHT_HORIZONTAL" || "IMAGE_LOGO_DARK_HORIZONTAL", // required
 * };
 * const command = new DeleteWorkspaceMediaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspaceMediaCommandInput - {@link DeleteWorkspaceMediaCommandInput}
 * @returns {@link DeleteWorkspaceMediaCommandOutput}
 * @see {@link DeleteWorkspaceMediaCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceMediaCommandOutput} for command's `response` shape.
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
export class DeleteWorkspaceMediaCommand extends $Command
  .classBuilder<
    DeleteWorkspaceMediaCommandInput,
    DeleteWorkspaceMediaCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteWorkspaceMedia", {})
  .n("ConnectClient", "DeleteWorkspaceMediaCommand")
  .sc(DeleteWorkspaceMedia$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceMediaRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspaceMediaCommandInput;
      output: DeleteWorkspaceMediaCommandOutput;
    };
  };
}
