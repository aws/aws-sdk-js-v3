// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssumeRoleForPodIdentityCommand,
  AssumeRoleForPodIdentityCommandInput,
  AssumeRoleForPodIdentityCommandOutput,
} from "./commands/AssumeRoleForPodIdentityCommand";
import { EKSAuthClient, EKSAuthClientConfig } from "./EKSAuthClient";

const commands = {
  AssumeRoleForPodIdentityCommand,
};

export interface EKSAuth {
  /**
   * @see {@link AssumeRoleForPodIdentityCommand}
   */
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeRoleForPodIdentityCommandOutput>;
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    cb: (err: any, data?: AssumeRoleForPodIdentityCommandOutput) => void
  ): void;
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeRoleForPodIdentityCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon EKS Auth API and the <code>AssumeRoleForPodIdentity</code> action are only
 *             used by the EKS Pod Identity Agent.</p>
 */
export class EKSAuth extends EKSAuthClient implements EKSAuth {}
createAggregatedClient(commands, EKSAuth);
