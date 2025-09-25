// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkspaceRequest } from "../models/models_0";
import { DeleteWorkspace } from "../schemas/schemas_7_DeleteWorkspace";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandInput extends DeleteWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an existing workspace. </p> <note> <p>When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteWorkspaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkspaceCommandInput - {@link DeleteWorkspaceCommandInput}
 * @returns {@link DeleteWorkspaceCommandOutput}
 * @see {@link DeleteWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DeleteWorkspaceCommand extends $Command
  .classBuilder<
    DeleteWorkspaceCommandInput,
    DeleteWorkspaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DeleteWorkspace", {})
  .n("AmpClient", "DeleteWorkspaceCommand")
  .sc(DeleteWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkspaceCommandInput;
      output: DeleteWorkspaceCommandOutput;
    };
  };
}
