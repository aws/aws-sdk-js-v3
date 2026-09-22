// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { CloudTrailDataClient } from "./CloudTrailDataClient";
import {
  type PutAuditEventsCommandInput,
  type PutAuditEventsCommandOutput,
  PutAuditEventsCommand,
} from "./commands/PutAuditEventsCommand";

const commands = {
  PutAuditEventsCommand,
};

/**
 * @public
 */
export interface CloudTrailDataRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudTrailData {
  /**
   * @see {@link PutAuditEventsCommand}
   */
  putAuditEvents(
    args: PutAuditEventsCommandInput,
    options?: CloudTrailDataRequestOptions
  ): Promise<PutAuditEventsCommandOutput>;
  putAuditEvents(
    args: PutAuditEventsCommandInput,
    cb: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): void;
  putAuditEvents(
    args: PutAuditEventsCommandInput,
    options: CloudTrailDataRequestOptions,
    cb: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): void;
}

/**
 * <p>The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your
 * hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud,
 * virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on
 * this data without maintaining multiple log aggregators and reporting tools. After you run
 * <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged
 * from your applications.</p>
 * @public
 */
export class CloudTrailData extends CloudTrailDataClient implements CloudTrailData {}
createAggregatedClient(commands, CloudTrailData);
