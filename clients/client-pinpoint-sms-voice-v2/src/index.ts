// smithy-typescript generated code
/* eslint-disable */
/**
 * Welcome to the *End User Messaging SMS, version 2 API Reference*. This guide provides information about End User Messaging SMS, version 2 API resources, including supported HTTP methods, parameters, and schemas.
 *
 * Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The End User Messaging SMS, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. End User Messaging SMS, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.
 *
 * If you're new to End User Messaging SMS, it's also helpful to review the [End User Messaging SMS User Guide](https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html), where you'll find tutorials, code samples, and procedures that demonstrate how to use End User Messaging SMS features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as End User Messaging SMS integration with other Amazon Web Services services, and the quotas that apply to use of the service.
 *
 * **Regional availability**
 *
 * The *End User Messaging SMS version 2 API Reference* is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see [Amazon Web Services Service Endpoints](https://docs.aws.amazon.com/hgeneral/latest/gr/rande.html#pinpoint_region) and [Amazon Pinpoint endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/pinpoint.html) in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see [Managing Amazon Web Services Regions](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) in the Amazon Web Services General Reference.
 *
 * In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see [Amazon Web Services Global Infrastructure.](http://aws.amazon.com/about-aws/global-infrastructure/)
 *
 * @packageDocumentation
 */
export * from "./PinpointSMSVoiceV2Client";
export * from "./PinpointSMSVoiceV2";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PinpointSMSVoiceV2ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { PinpointSMSVoiceV2ServiceException } from "./models/PinpointSMSVoiceV2ServiceException";
