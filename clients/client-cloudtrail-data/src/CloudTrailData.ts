// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudTrailDataClient } from "./CloudTrailDataClient";
import {
  PutAuditEventsCommand,
  PutAuditEventsCommandInput,
  PutAuditEventsCommandOutput,
} from "./commands/PutAuditEventsCommand";

/**
 * <p>The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your
 * hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud,
 * virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on
 * this data without maintaining multiple log aggregators and reporting tools. After you run
 * <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged
 * from your applications.</p>
 */
export class CloudTrailData extends CloudTrailDataClient {
  /**
   * <p>Ingests your application events into CloudTrail Lake. A required parameter,
   *             <code>auditEvents</code>, accepts the JSON records (also called
   *             <i>payload</i>) of events that you want CloudTrail to ingest. You
   *          can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code>
   *          request.</p>
   */
  public putAuditEvents(
    args: PutAuditEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAuditEventsCommandOutput>;
  public putAuditEvents(
    args: PutAuditEventsCommandInput,
    cb: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): void;
  public putAuditEvents(
    args: PutAuditEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): void;
  public putAuditEvents(
    args: PutAuditEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAuditEventsCommandOutput) => void),
    cb?: (err: any, data?: PutAuditEventsCommandOutput) => void
  ): Promise<PutAuditEventsCommandOutput> | void {
    const command = new PutAuditEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
