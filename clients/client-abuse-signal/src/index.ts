// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Abuse Signal</fullname> <p>Amazon Web Services Abuse Signal API provides programmatic means to report suspected abuse of Amazon Web Services resources. You can use the API to submit abuse reports about Amazon Web Services resources and to track the status of your reports. Amazon Web Services Trust &amp; Safety uses the information that you provide to investigate and try to resolve the incident that you reported.</p> <p>You submit reports in the eXtended Abuse Reporting Format (XARF), an open standard for structured abuse reporting. For more information, see <a href="https://xarf.org/docs/introduction/">XARF on the XARF website</a>. Reports can cover a wide range of abuse categories, including spam, phishing, distributed denial of service (DDoS), malware distribution, and copyright infringement.</p> <p>With the Amazon Web Services Abuse Signal API, you can:</p> <ul> <li> <p> <b>Submit abuse reports</b> – Create structured abuse reports by using the XARF format, with full support for all XARF v4 report types.</p> </li> <li> <p> <b>Track report status</b> – Monitor the processing status of submitted reports, from submission through resolution.</p> </li> <li> <p> <b>List and filter reports</b> – Retrieve the status of all reports, with optional filtering by correlation ID.</p> </li> <li> <p> <b>Retry submissions safely</b> – Safely retry report submissions without creating duplicates by using client tokens.</p> </li> </ul> <important> <p> <b>Cross-Region data residency:</b> By submitting a report, you instruct Amazon Web Services to store it in all supported Regions (<code>us-east-1</code>, <code>us-west-2</code>, and <code>eu-west-2</code>), including across the United States and Europe. If data must remain in a single Region, do not include it in the report.</p> </important>
 *
 * @packageDocumentation
 */
export * from "./AbuseSignalClient";
export * from "./AbuseSignal";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AbuseSignalExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AbuseSignalServiceException } from "./models/AbuseSignalServiceException";
