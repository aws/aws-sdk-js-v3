// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusCommandInput,
  GetTelemetryEvaluationStatusCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusCommand";
import {
  GetTelemetryEvaluationStatusForOrganizationCommand,
  GetTelemetryEvaluationStatusForOrganizationCommandInput,
  GetTelemetryEvaluationStatusForOrganizationCommandOutput,
} from "./commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import {
  ListResourceTelemetryCommand,
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "./commands/ListResourceTelemetryCommand";
import {
  ListResourceTelemetryForOrganizationCommand,
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "./commands/ListResourceTelemetryForOrganizationCommand";
import {
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationCommandInput,
  StartTelemetryEvaluationCommandOutput,
} from "./commands/StartTelemetryEvaluationCommand";
import {
  StartTelemetryEvaluationForOrganizationCommand,
  StartTelemetryEvaluationForOrganizationCommandInput,
  StartTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StartTelemetryEvaluationForOrganizationCommand";
import {
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationCommandInput,
  StopTelemetryEvaluationCommandOutput,
} from "./commands/StopTelemetryEvaluationCommand";
import {
  StopTelemetryEvaluationForOrganizationCommand,
  StopTelemetryEvaluationForOrganizationCommandInput,
  StopTelemetryEvaluationForOrganizationCommandOutput,
} from "./commands/StopTelemetryEvaluationForOrganizationCommand";
import { ObservabilityAdminClient, ObservabilityAdminClientConfig } from "./ObservabilityAdminClient";

const commands = {
  GetTelemetryEvaluationStatusCommand,
  GetTelemetryEvaluationStatusForOrganizationCommand,
  ListResourceTelemetryCommand,
  ListResourceTelemetryForOrganizationCommand,
  StartTelemetryEvaluationCommand,
  StartTelemetryEvaluationForOrganizationCommand,
  StopTelemetryEvaluationCommand,
  StopTelemetryEvaluationForOrganizationCommand,
};

export interface ObservabilityAdmin {
  /**
   * @see {@link GetTelemetryEvaluationStatusCommand}
   */
  getTelemetryEvaluationStatus(): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryEvaluationStatusCommandOutput>;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatus(
    args: GetTelemetryEvaluationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTelemetryEvaluationStatusForOrganizationCommand}
   */
  getTelemetryEvaluationStatusForOrganization(): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput>;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;
  getTelemetryEvaluationStatusForOrganization(
    args: GetTelemetryEvaluationStatusForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryEvaluationStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryCommand}
   */
  listResourceTelemetry(): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTelemetryCommandOutput>;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;
  listResourceTelemetry(
    args: ListResourceTelemetryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceTelemetryForOrganizationCommand}
   */
  listResourceTelemetryForOrganization(): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTelemetryForOrganizationCommandOutput>;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;
  listResourceTelemetryForOrganization(
    args: ListResourceTelemetryForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTelemetryForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationCommand}
   */
  startTelemetryEvaluation(): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTelemetryEvaluationCommandOutput>;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;
  startTelemetryEvaluation(
    args: StartTelemetryEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTelemetryEvaluationForOrganizationCommand}
   */
  startTelemetryEvaluationForOrganization(): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTelemetryEvaluationForOrganizationCommandOutput>;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  startTelemetryEvaluationForOrganization(
    args: StartTelemetryEvaluationForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationCommand}
   */
  stopTelemetryEvaluation(): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTelemetryEvaluationCommandOutput>;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;
  stopTelemetryEvaluation(
    args: StopTelemetryEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTelemetryEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTelemetryEvaluationForOrganizationCommand}
   */
  stopTelemetryEvaluationForOrganization(): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTelemetryEvaluationForOrganizationCommandOutput>;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
  stopTelemetryEvaluationForOrganization(
    args: StopTelemetryEvaluationForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTelemetryEvaluationForOrganizationCommandOutput) => void
  ): void;
}

/**
 * <p>
 *       Amazon CloudWatch Obsersavability Admin to control temletry config for your AWS Organization or account. Telemetry config conﬁg to discover and understand the state of telemetry conﬁguration for your AWS resources from a central view in the CloudWatch console. Telemetry conﬁg simpliﬁes the process of auditing your telemetry collection conﬁgurations across multiple resource types across your AWS Organization or account.
 *       For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/telemetry-config-cloudwatch.html">Auditing CloudWatch telemetry conﬁgurations</a> in the CloudWatch User Guide.</p>
 *          <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html">Identity and access management for Amazon CloudWatch</a> in the CloudWatch User Guide.</p>
 * @public
 */
export class ObservabilityAdmin extends ObservabilityAdminClient implements ObservabilityAdmin {}
createAggregatedClient(commands, ObservabilityAdmin);
