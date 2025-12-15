// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWorkspacePageRequest, UpdateWorkspacePageResponse } from "../models/models_3";
import { UpdateWorkspacePage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspacePageCommand}.
 */
export interface UpdateWorkspacePageCommandInput extends UpdateWorkspacePageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspacePageCommand}.
 */
export interface UpdateWorkspacePageCommandOutput extends UpdateWorkspacePageResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a page in a workspace, including the associated view and input data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateWorkspacePageCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateWorkspacePageCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateWorkspacePageRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Page: "STRING_VALUE", // required
 *   NewPage: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 *   Slug: "STRING_VALUE",
 *   InputData: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspacePageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspacePageCommandInput - {@link UpdateWorkspacePageCommandInput}
 * @returns {@link UpdateWorkspacePageCommandOutput}
 * @see {@link UpdateWorkspacePageCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspacePageCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
export class UpdateWorkspacePageCommand extends $Command
  .classBuilder<
    UpdateWorkspacePageCommandInput,
    UpdateWorkspacePageCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateWorkspacePage", {})
  .n("ConnectClient", "UpdateWorkspacePageCommand")
  .sc(UpdateWorkspacePage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspacePageRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspacePageCommandInput;
      output: UpdateWorkspacePageCommandOutput;
    };
  };
}
