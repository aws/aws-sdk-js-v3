// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudTrailDataClient, CloudTrailDataClientConfig } from "./CloudTrailDataClient";
import {
  PutAuditEventsCommand,
  PutAuditEventsCommandInput,
  PutAuditEventsCommandOutput,
} from "./commands/PutAuditEventsCommand";

const commands = {
  PutAuditEventsCommand,
};

export interface CloudTrailData {
  /**
   * @see {@link PutAuditEventsCommand}
   */
  putAuditEvents(
    args: PutAuditEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAuditEventsCommandOutput>;
  putAuditEvents(args: PutAuditEventsCommandInput, cb: (err: any, data?: PutAuditEventsCommandOutput) => void): void;
  putAuditEvents(
    args: PutAuditEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your
 * hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud,
 * virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on
 * this data without maintaining multiple log aggregators and reporting tools. After you run
 * <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged
 * from your applications.</p>
 */
export class CloudTrailData extends CloudTrailDataClient implements CloudTrailData {}
createAggregatedClient(commands, CloudTrailData);
