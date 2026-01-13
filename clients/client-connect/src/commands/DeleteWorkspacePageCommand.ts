// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkspacePageRequest, DeleteWorkspacePageResponse } from "../models/models_1";
import { DeleteWorkspacePage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspacePageCommand}.
 */
export interface DeleteWorkspacePageCommandInput extends DeleteWorkspacePageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspacePageCommand}.
 */
export interface DeleteWorkspacePageCommandOutput extends DeleteWorkspacePageResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a view and a page in a workspace. The page will display the default view after
 *    deletion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteWorkspacePageCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteWorkspacePageCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteWorkspacePageRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Page: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspacePageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspacePageCommandInput - {@link DeleteWorkspacePageCommandInput}
 * @returns {@link DeleteWorkspacePageCommandOutput}
 * @see {@link DeleteWorkspacePageCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspacePageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
export class DeleteWorkspacePageCommand extends $Command
  .classBuilder<
    DeleteWorkspacePageCommandInput,
    DeleteWorkspacePageCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteWorkspacePage", {})
  .n("ConnectClient", "DeleteWorkspacePageCommand")
  .sc(DeleteWorkspacePage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspacePageRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspacePageCommandInput;
      output: DeleteWorkspacePageCommandOutput;
    };
  };
}
