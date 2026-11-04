// smithy-typescript generated code
/* eslint-disable */
/**
 * *Amazon Web Services End User Messaging Social*, also referred to as Social messaging, is a messaging service that enables application developers to incorporate WhatsApp into their existing workflows. The *Amazon Web Services End User Messaging Social API* provides information about the *Amazon Web Services End User Messaging Social API* resources, including supported HTTP methods, parameters, and schemas.
 *
 * The *Amazon Web Services End User Messaging Social API* provides programmatic access to options that are unique to the WhatsApp Business Platform.
 *
 * If you're new to the *Amazon Web Services End User Messaging Social API*, it's also helpful to review [What is Amazon Web Services End User Messaging Social](https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html) in the *Amazon Web Services End User Messaging Social User Guide*. The *Amazon Web Services End User Messaging Social User Guide* provides tutorials, code samples, and procedures that demonstrate how to use *Amazon Web Services End User Messaging Social API* features programmatically and how to integrate functionality into applications. The guide also provides key information, such as integration with other Amazon Web Services services, and the quotas that apply to use of the service.
 *
 * **Regional availability**
 *
 * The *Amazon Web Services End User Messaging Social API* is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see [Amazon Web Services Service Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region) and [Amazon Web Services End User Messaging endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html) in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see [Managing Amazon Web Services Regions](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) in the Amazon Web Services General Reference.
 *
 * In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see [Amazon Web Services Global Infrastructure.](https://aws.amazon.com/about-aws/global-infrastructure/)
 *
 * @packageDocumentation
 */
export * from "./SocialMessagingClient";
export * from "./SocialMessaging";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SocialMessagingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SocialMessagingServiceException } from "./models/SocialMessagingServiceException";
