// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AbuseSignalClient } from "./AbuseSignalClient";
import {
  type CreateAbuseReportCommandInput,
  type CreateAbuseReportCommandOutput,
  CreateAbuseReportCommand,
} from "./commands/CreateAbuseReportCommand";
import {
  type GetAbuseReportStatusCommandInput,
  type GetAbuseReportStatusCommandOutput,
  GetAbuseReportStatusCommand,
} from "./commands/GetAbuseReportStatusCommand";
import {
  type ListAbuseReportStatusesCommandInput,
  type ListAbuseReportStatusesCommandOutput,
  ListAbuseReportStatusesCommand,
} from "./commands/ListAbuseReportStatusesCommand";
import type { AbuseSignalServiceException } from "./models/AbuseSignalServiceException";
import { paginateListAbuseReportStatuses } from "./pagination/ListAbuseReportStatusesPaginator";
import { waitUntilReportProcessing } from "./waiters/waitForReportProcessing";

const commands = {
  CreateAbuseReportCommand,
  GetAbuseReportStatusCommand,
  ListAbuseReportStatusesCommand,
};
const paginators = {
  paginateListAbuseReportStatuses,
};
const waiters = {
  waitUntilReportProcessing,
};

/**
 * @public
 */
export interface AbuseSignalRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AbuseSignal {
  /**
   * @see {@link CreateAbuseReportCommand}
   */
  createAbuseReport(
    args: CreateAbuseReportCommandInput,
    options?: AbuseSignalRequestOptions
  ): Promise<CreateAbuseReportCommandOutput>;
  createAbuseReport(
    args: CreateAbuseReportCommandInput,
    cb: (err: any, data?: CreateAbuseReportCommandOutput) => void
  ): void;
  createAbuseReport(
    args: CreateAbuseReportCommandInput,
    options: AbuseSignalRequestOptions,
    cb: (err: any, data?: CreateAbuseReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAbuseReportStatusCommand}
   */
  getAbuseReportStatus(
    args: GetAbuseReportStatusCommandInput,
    options?: AbuseSignalRequestOptions
  ): Promise<GetAbuseReportStatusCommandOutput>;
  getAbuseReportStatus(
    args: GetAbuseReportStatusCommandInput,
    cb: (err: any, data?: GetAbuseReportStatusCommandOutput) => void
  ): void;
  getAbuseReportStatus(
    args: GetAbuseReportStatusCommandInput,
    options: AbuseSignalRequestOptions,
    cb: (err: any, data?: GetAbuseReportStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAbuseReportStatusesCommand}
   */
  listAbuseReportStatuses(): Promise<ListAbuseReportStatusesCommandOutput>;
  listAbuseReportStatuses(
    args: ListAbuseReportStatusesCommandInput,
    options?: AbuseSignalRequestOptions
  ): Promise<ListAbuseReportStatusesCommandOutput>;
  listAbuseReportStatuses(
    args: ListAbuseReportStatusesCommandInput,
    cb: (err: any, data?: ListAbuseReportStatusesCommandOutput) => void
  ): void;
  listAbuseReportStatuses(
    args: ListAbuseReportStatusesCommandInput,
    options: AbuseSignalRequestOptions,
    cb: (err: any, data?: ListAbuseReportStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAbuseReportStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAbuseReportStatusesCommandOutput}.
   */
  paginateListAbuseReportStatuses(
    args?: ListAbuseReportStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAbuseReportStatusesCommandOutput>;

  /**
   * @see {@link GetAbuseReportStatusCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilReportProcessing(
    args: GetAbuseReportStatusCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AbuseSignal>, "client">
  ): Promise<WaiterResult<GetAbuseReportStatusCommandOutput>>;
}

/**
 * <fullname>Amazon Web Services Abuse Signal</fullname> <p>Amazon Web Services Abuse Signal API provides programmatic means to report suspected abuse of Amazon Web Services resources. You can use the API to submit abuse reports about Amazon Web Services resources and to track the status of your reports. Amazon Web Services Trust &amp; Safety uses the information that you provide to investigate and try to resolve the incident that you reported.</p> <p>You submit reports in the eXtended Abuse Reporting Format (XARF), an open standard for structured abuse reporting. For more information, see <a href="https://xarf.org/docs/introduction/">XARF on the XARF website</a>. Reports can cover a wide range of abuse categories, including spam, phishing, distributed denial of service (DDoS), malware distribution, and copyright infringement.</p> <p>With the Amazon Web Services Abuse Signal API, you can:</p> <ul> <li> <p> <b>Submit abuse reports</b> – Create structured abuse reports by using the XARF format, with full support for all XARF v4 report types.</p> </li> <li> <p> <b>Track report status</b> – Monitor the processing status of submitted reports, from submission through resolution.</p> </li> <li> <p> <b>List and filter reports</b> – Retrieve the status of all reports, with optional filtering by correlation ID.</p> </li> <li> <p> <b>Retry submissions safely</b> – Safely retry report submissions without creating duplicates by using client tokens.</p> </li> </ul> <important> <p> <b>Cross-Region data residency:</b> By submitting a report, you instruct Amazon Web Services to store it in all supported Regions (<code>us-east-1</code>, <code>us-west-2</code>, and <code>eu-west-2</code>), including across the United States and Europe. If data must remain in a single Region, do not include it in the report.</p> </important>
 * @public
 */
export class AbuseSignal extends AbuseSignalClient implements AbuseSignal {}
createAggregatedClient(commands, AbuseSignal, { paginators, waiters });
