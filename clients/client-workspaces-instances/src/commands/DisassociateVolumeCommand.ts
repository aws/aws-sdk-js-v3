// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateVolumeRequest, DisassociateVolumeResponse } from "../models/models_0";
import { DisassociateVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Detaches a volume from a WorkSpace Instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, DisassociateVolumeCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, DisassociateVolumeCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
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
 *
 * Indicates insufficient permissions to perform the requested action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Signals a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates an unexpected server-side error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates the requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates the request rate has exceeded limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates invalid input parameters in the request.
 *
 * @throws {@link WorkspacesInstancesServiceException}
 *
 * Base exception class for all service exceptions from WorkspacesInstances service.
 *
 * @public
 */
export class DisassociateVolumeCommand extends command<DisassociateVolumeCommandInput, DisassociateVolumeCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateVolume",
  DisassociateVolume$
) {
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
