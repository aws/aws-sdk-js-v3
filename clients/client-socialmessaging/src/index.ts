// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>
 *             <i>Amazon Web Services End User Messaging Social</i>, also referred to as Social messaging, is a messaging service that enables
 *          application developers to incorporate WhatsApp into their existing workflows. The <i>Amazon Web Services End User Messaging Social API</i> provides information about the
 *          <i>Amazon Web Services End User Messaging Social API</i> resources, including supported HTTP methods, parameters, and schemas.</p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> provides programmatic access to options that are unique to the WhatsApp Business Platform.</p>
 *          <p>If you're new to the <i>Amazon Web Services End User Messaging Social API</i>, it's also helpful to review <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">What is
 *                Amazon Web Services End User Messaging Social</a> in the <i>Amazon Web Services End User Messaging Social User Guide</i>. The
 *          <i>Amazon Web Services End User Messaging Social User Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use
 *          <i>Amazon Web Services End User Messaging Social API</i> features programmatically and how to integrate functionality into applications.
 *          The guide also provides key information, such as integration with other Amazon Web Services
 *          services, and the quotas that apply to use of the service.</p>
 *          <p>
 *             <b>Regional availability</b>
 *          </p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of
 *          all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">Amazon Web Services End User Messaging endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
 *                Amazon Web Services Regions</a> in the Amazon Web Services General
 *          Reference.</p>
 *          <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
 *          Availability Zones are physically isolated from each other, but are united by private,
 *          low-latency, high-throughput, and highly redundant network connections. These Availability
 *          Zones enable us to provide very high levels of availability and redundancy, while also
 *          minimizing latency. To learn more about the number of Availability Zones that are available
 *          in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a>
 *          </p>
 *
 * @packageDocumentation
 */
export * from "./SocialMessagingClient";
export * from "./SocialMessaging";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SocialMessagingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { SocialMessagingServiceException } from "./models/SocialMessagingServiceException";
