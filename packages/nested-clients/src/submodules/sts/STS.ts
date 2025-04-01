// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AssumeRoleCommand, AssumeRoleCommandInput, AssumeRoleCommandOutput } from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import { STSClient, STSClientConfig } from "./STSClient";

const commands = {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
};

export interface STS {
  /**
   * @see {@link AssumeRoleCommand}
   */
  assumeRole(args: AssumeRoleCommandInput, options?: __HttpHandlerOptions): Promise<AssumeRoleCommandOutput>;
  assumeRole(args: AssumeRoleCommandInput, cb: (err: any, data?: AssumeRoleCommandOutput) => void): void;
  assumeRole(
    args: AssumeRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeRoleWithWebIdentityCommand}
   */
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeRoleWithWebIdentityCommandOutput>;
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;
  assumeRoleWithWebIdentity(
    args: AssumeRoleWithWebIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleWithWebIdentityCommandOutput) => void
  ): void;
}

/**
 * <fullname>Security Token Service</fullname>
 *          <p>Security Token Service (STS) enables you to request temporary, limited-privilege
 *       credentials for users. This guide provides descriptions of the STS API. For
 *       more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>
 * @public
 */
export class STS extends STSClient implements STS {}
createAggregatedClient(commands, STS);
