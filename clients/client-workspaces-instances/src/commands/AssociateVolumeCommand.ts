// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateVolumeRequest, AssociateVolumeResponse } from "../models/models_0";
import { AssociateVolume } from "../schemas/schemas_2_Workspace";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkspacesInstancesClientResolvedConfig,
} from "../WorkspacesInstancesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateVolumeCommand}.
 */
export interface AssociateVolumeCommandInput extends AssociateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link AssociateVolumeCommand}.
 */
export interface AssociateVolumeCommandOutput extends AssociateVolumeResponse, __MetadataBearer {}

/**
 * <p>Attaches a volume to a WorkSpace Instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, AssociateVolumeCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, AssociateVolumeCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // AssociateVolumeRequest
 *   WorkspaceInstanceId: "STRING_VALUE", // required
 *   VolumeId: "STRING_VALUE", // required
 *   Device: "STRING_VALUE", // required
 * };
 * const command = new AssociateVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateVolumeCommandInput - {@link AssociateVolumeCommandInput}
 * @returns {@link AssociateVolumeCommandOutput}
 * @see {@link AssociateVolumeCommandInput} for command's `input` shape.
 * @see {@link AssociateVolumeCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Signals a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates the requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class AssociateVolumeCommand extends $Command
  .classBuilder<
    AssociateVolumeCommandInput,
    AssociateVolumeCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EUCMIFrontendAPIService", "AssociateVolume", {})
  .n("WorkspacesInstancesClient", "AssociateVolumeCommand")
  .sc(AssociateVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateVolumeRequest;
      output: {};
    };
    sdk: {
      input: AssociateVolumeCommandInput;
      output: AssociateVolumeCommandOutput;
    };
  };
}
