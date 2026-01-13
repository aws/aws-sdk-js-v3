// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 *
 * @packageDocumentation
 */
export * from "./MediaTailorClient";
export * from "./MediaTailor";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MediaTailorExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MediaTailorServiceException } from "./models/MediaTailorServiceException";
