// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspaceVisibilityRequest, UpdateWorkspaceVisibilityResponse } from "../models/models_3";
import { UpdateWorkspaceVisibility } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceVisibilityCommand}.
 */
export interface UpdateWorkspaceVisibilityCommandInput extends UpdateWorkspaceVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceVisibilityCommand}.
 */
export interface UpdateWorkspaceVisibilityCommandOutput extends UpdateWorkspaceVisibilityResponse, __MetadataBearer {}

/**
 * <p>Updates the visibility setting of a workspace, controlling whether it is available to all users, assigned users only, or none.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateWorkspaceVisibilityCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateWorkspaceVisibilityCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateWorkspaceVisibilityRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   Visibility: "ALL" || "ASSIGNED" || "NONE", // required
 * };
 * const command = new UpdateWorkspaceVisibilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceVisibilityCommandInput - {@link UpdateWorkspaceVisibilityCommandInput}
 * @returns {@link UpdateWorkspaceVisibilityCommandOutput}
 * @see {@link UpdateWorkspaceVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceVisibilityCommandOutput} for command's `response` shape.
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
export class UpdateWorkspaceVisibilityCommand extends $Command
  .classBuilder<
    UpdateWorkspaceVisibilityCommandInput,
    UpdateWorkspaceVisibilityCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateWorkspaceVisibility", {})
  .n("ConnectClient", "UpdateWorkspaceVisibilityCommand")
  .sc(UpdateWorkspaceVisibility)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceVisibilityRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceVisibilityCommandInput;
      output: UpdateWorkspaceVisibilityCommandOutput;
    };
  };
}
