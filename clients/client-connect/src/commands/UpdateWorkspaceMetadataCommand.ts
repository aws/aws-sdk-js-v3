// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspaceMetadataRequest, UpdateWorkspaceMetadataResponse } from "../models/models_3";
import { UpdateWorkspaceMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceMetadataCommand}.
 */
export interface UpdateWorkspaceMetadataCommandInput extends UpdateWorkspaceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceMetadataCommand}.
 */
export interface UpdateWorkspaceMetadataCommandOutput extends UpdateWorkspaceMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates the metadata of a workspace, such as its name and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateWorkspaceMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateWorkspaceMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateWorkspaceMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Title: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceMetadataCommandInput - {@link UpdateWorkspaceMetadataCommandInput}
 * @returns {@link UpdateWorkspaceMetadataCommandOutput}
 * @see {@link UpdateWorkspaceMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceMetadataCommandOutput} for command's `response` shape.
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
export class UpdateWorkspaceMetadataCommand extends $Command
  .classBuilder<
    UpdateWorkspaceMetadataCommandInput,
    UpdateWorkspaceMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateWorkspaceMetadata", {})
  .n("ConnectClient", "UpdateWorkspaceMetadataCommand")
  .sc(UpdateWorkspaceMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceMetadataCommandInput;
      output: UpdateWorkspaceMetadataCommandOutput;
    };
  };
}
