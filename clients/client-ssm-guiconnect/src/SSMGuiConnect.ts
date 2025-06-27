// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteConnectionRecordingPreferencesCommand,
  DeleteConnectionRecordingPreferencesCommandInput,
  DeleteConnectionRecordingPreferencesCommandOutput,
} from "./commands/DeleteConnectionRecordingPreferencesCommand";
import {
  GetConnectionRecordingPreferencesCommand,
  GetConnectionRecordingPreferencesCommandInput,
  GetConnectionRecordingPreferencesCommandOutput,
} from "./commands/GetConnectionRecordingPreferencesCommand";
import {
  UpdateConnectionRecordingPreferencesCommand,
  UpdateConnectionRecordingPreferencesCommandInput,
  UpdateConnectionRecordingPreferencesCommandOutput,
} from "./commands/UpdateConnectionRecordingPreferencesCommand";
import { SSMGuiConnectClient, SSMGuiConnectClientConfig } from "./SSMGuiConnectClient";

const commands = {
  DeleteConnectionRecordingPreferencesCommand,
  GetConnectionRecordingPreferencesCommand,
  UpdateConnectionRecordingPreferencesCommand,
};

export interface SSMGuiConnect {
  /**
   * @see {@link DeleteConnectionRecordingPreferencesCommand}
   */
  deleteConnectionRecordingPreferences(): Promise<DeleteConnectionRecordingPreferencesCommandOutput>;
  deleteConnectionRecordingPreferences(
    args: DeleteConnectionRecordingPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionRecordingPreferencesCommandOutput>;
  deleteConnectionRecordingPreferences(
    args: DeleteConnectionRecordingPreferencesCommandInput,
    cb: (err: any, data?: DeleteConnectionRecordingPreferencesCommandOutput) => void
  ): void;
  deleteConnectionRecordingPreferences(
    args: DeleteConnectionRecordingPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionRecordingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionRecordingPreferencesCommand}
   */
  getConnectionRecordingPreferences(): Promise<GetConnectionRecordingPreferencesCommandOutput>;
  getConnectionRecordingPreferences(
    args: GetConnectionRecordingPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionRecordingPreferencesCommandOutput>;
  getConnectionRecordingPreferences(
    args: GetConnectionRecordingPreferencesCommandInput,
    cb: (err: any, data?: GetConnectionRecordingPreferencesCommandOutput) => void
  ): void;
  getConnectionRecordingPreferences(
    args: GetConnectionRecordingPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionRecordingPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionRecordingPreferencesCommand}
   */
  updateConnectionRecordingPreferences(
    args: UpdateConnectionRecordingPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionRecordingPreferencesCommandOutput>;
  updateConnectionRecordingPreferences(
    args: UpdateConnectionRecordingPreferencesCommandInput,
    cb: (err: any, data?: UpdateConnectionRecordingPreferencesCommandOutput) => void
  ): void;
  updateConnectionRecordingPreferences(
    args: UpdateConnectionRecordingPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionRecordingPreferencesCommandOutput) => void
  ): void;
}

/**
 * <fullname>AWS Systems Manager GUI Connect</fullname>
 *          <p>Systems Manager GUI Connect, a component of Fleet Manager, lets you connect to your Window
 *          Server-type Amazon Elastic Compute Cloud (Amazon EC2) instances using the Remote Desktop Protocol (RDP). GUI
 *          Connect, which is powered by <a href="https://docs.aws.amazon.com/dcv/latest/adminguide/what-is-dcv.html">Amazon DCV</a>, provides you
 *          with secure connectivity to your Windows Server instances directly from the Systems Manager console.
 *          You can have up to four simultaneous connections in a single browser window. In the
 *          console, GUI Connect is also referred to as Fleet Manager Remote Desktop.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">
 *                <i>Amazon Web Services Systems Manager User
 *             Guide</i>
 *             </a>. To get started, see the following user guide topics:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
 *                      Amazon Web Services Systems Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html">Connect to a Windows Server managed instance using Remote Desktop</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class SSMGuiConnect extends SSMGuiConnectClient implements SSMGuiConnect {}
createAggregatedClient(commands, SSMGuiConnect);
