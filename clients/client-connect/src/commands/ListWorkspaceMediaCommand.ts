// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkspaceMediaRequest, ListWorkspaceMediaResponse } from "../models/models_2";
import { ListWorkspaceMedia } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkspaceMediaCommand}.
 */
export interface ListWorkspaceMediaCommandInput extends ListWorkspaceMediaRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspaceMediaCommand}.
 */
export interface ListWorkspaceMediaCommandOutput extends ListWorkspaceMediaResponse, __MetadataBearer {}

/**
 * <p>Lists media assets (such as logos) associated with a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListWorkspaceMediaCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListWorkspaceMediaCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListWorkspaceMediaRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkspaceMediaCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspaceMediaResponse
 * //   Media: [ // MediaList
 * //     { // MediaItem
 * //       Type: "IMAGE_LOGO_LIGHT_FAVICON" || "IMAGE_LOGO_DARK_FAVICON" || "IMAGE_LOGO_LIGHT_HORIZONTAL" || "IMAGE_LOGO_DARK_HORIZONTAL",
 * //       Source: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkspaceMediaCommandInput - {@link ListWorkspaceMediaCommandInput}
 * @returns {@link ListWorkspaceMediaCommandOutput}
 * @see {@link ListWorkspaceMediaCommandInput} for command's `input` shape.
 * @see {@link ListWorkspaceMediaCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class ListWorkspaceMediaCommand extends $Command
  .classBuilder<
    ListWorkspaceMediaCommandInput,
    ListWorkspaceMediaCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListWorkspaceMedia", {})
  .n("ConnectClient", "ListWorkspaceMediaCommand")
  .sc(ListWorkspaceMedia)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspaceMediaRequest;
      output: ListWorkspaceMediaResponse;
    };
    sdk: {
      input: ListWorkspaceMediaCommandInput;
      output: ListWorkspaceMediaCommandOutput;
    };
  };
}
