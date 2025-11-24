// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the <i>End User MessagingSMS, version 2 API Reference</i>. This guide provides information about End User MessagingSMS, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The End User MessagingSMS, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. End User MessagingSMS, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.</p> <p>If you're new to End User MessagingSMS, it's also helpful to review the <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html"> End User MessagingSMS User Guide</a>, where you'll find tutorials, code samples, and procedures that demonstrate how to use End User MessagingSMS features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as End User MessagingSMS integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p> <p> <b>Regional availability</b> </p> <p>The <i>End User MessagingSMS version 2 API Reference</i> is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/hgeneral/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/pinpoint.html">Amazon Pinpoint endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the Amazon Web Services General Reference.</p> <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a> </p>
 *
 * @packageDocumentation
 */
export * from "./PinpointSMSVoiceV2Client";
export * from "./PinpointSMSVoiceV2";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PinpointSMSVoiceV2ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { PinpointSMSVoiceV2ServiceException } from "./models/PinpointSMSVoiceV2ServiceException";
