// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Application Recovery Controller (ARC).</p> <p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to help your application recover quickly from an impairment in an Availability Zone. For example, you can recover your application from a developer's bad code deployment or from an Amazon Web Services infrastructure failure in a single Availability Zone.</p> <p>You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift is a capability in ARC where you authorize Amazon Web Services to shift away application resource traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery. Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability Zone impairment that could potentially impact customers.</p> <p>For more information about using zonal shift and zonal autoshift, see the <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Application Recovery Controller Developer Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./ARCZonalShiftClient";
export * from "./ARCZonalShift";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ARCZonalShiftExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ARCZonalShiftServiceException } from "./models/ARCZonalShiftServiceException";
