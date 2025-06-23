// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateVolumeRequest, DisassociateVolumeResponse } from "../models/models_0";
import { de_DisassociateVolumeCommand, se_DisassociateVolumeCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link DisassociateVolumeCommand}.
 */
export interface DisassociateVolumeCommandInput extends DisassociateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVolumeCommand}.
 */
export interface DisassociateVolumeCommandOutput extends DisassociateVolumeResponse, __MetadataBearer {}

/**
 * <p>Detaches a volume from a WorkSpace Instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, DisassociateVolumeCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, DisassociateVolumeCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // DisassociateVolumeRequest
 *   WorkspaceInstanceId: "STRING_VALUE", // required
 *   VolumeId: "STRING_VALUE", // required
 *   Device: "STRING_VALUE",
 *   DisassociateMode: "FORCE" || "NO_FORCE",
 * };
 * const command = new DisassociateVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateVolumeCommandInput - {@link DisassociateVolumeCommandInput}
 * @returns {@link DisassociateVolumeCommandOutput}
 * @see {@link DisassociateVolumeCommandInput} for command's `input` shape.
 * @see {@link DisassociateVolumeCommandOutput} for command's `response` shape.
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
export class DisassociateVolumeCommand extends $Command
  .classBuilder<
    DisassociateVolumeCommandInput,
    DisassociateVolumeCommandOutput,
    WorkspacesInstancesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkspacesInstancesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EUCMIFrontendAPIService", "DisassociateVolume", {})
  .n("WorkspacesInstancesClient", "DisassociateVolumeCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateVolumeCommand)
  .de(de_DisassociateVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateVolumeRequest;
      output: {};
    };
    sdk: {
      input: DisassociateVolumeCommandInput;
      output: DisassociateVolumeCommandOutput;
    };
  };
}
