// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type AssumeRoleForPodIdentityCommandInput,
  type AssumeRoleForPodIdentityCommandOutput,
  AssumeRoleForPodIdentityCommand,
} from "./commands/AssumeRoleForPodIdentityCommand";
import { EKSAuthClient } from "./EKSAuthClient";

const commands = {
  AssumeRoleForPodIdentityCommand,
};

/**
 * @public
 */
export interface EKSAuthRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EKSAuth {
  /**
   * @see {@link AssumeRoleForPodIdentityCommand}
   */
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    options?: EKSAuthRequestOptions
  ): Promise<AssumeRoleForPodIdentityCommandOutput>;
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    cb: (err: any, data?: AssumeRoleForPodIdentityCommandOutput) => void
  ): void;
  assumeRoleForPodIdentity(
    args: AssumeRoleForPodIdentityCommandInput,
    options: EKSAuthRequestOptions,
    cb: (err: any, data?: AssumeRoleForPodIdentityCommandOutput) => void
  ): void;
}

/**
 * <p>The Amazon EKS Auth API and the <code>AssumeRoleForPodIdentity</code> action are only used by the EKS Pod Identity Agent.</p>
 * @public
 */
export class EKSAuth extends EKSAuthClient implements EKSAuth {}
createAggregatedClient(commands, EKSAuth);
