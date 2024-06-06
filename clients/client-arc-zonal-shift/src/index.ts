// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the Zonal Shift API Reference Guide for Amazon Route 53 Application Recovery Controller (Route 53 ARC).</p>
 *          <p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to
 * 			help your application recover quickly from an impairment in an Availability Zone. For example,
 * 			you can recover your application from a developer's bad code deployment or from an
 * 			Amazon Web Services infrastructure failure in a single Availability Zone.</p>
 *          <p>You can also configure zonal autoshift for a load balancer resource. Zonal autoshift
 * 			is a capability in Route 53 ARC where Amazon Web Services shifts away application resource
 * 			traffic from an Availability Zone, on your behalf, to help reduce your time to recovery during events.
 * 			Amazon Web Services shifts away traffic for resources that are enabled for zonal autoshift whenever Amazon Web Services
 * 			determines that there's an issue in the Availability Zone that could potentially affect
 * 			customers.</p>
 *          <p>To ensure that zonal autoshift is safe for your application, you must
 * 			also configure practice runs when you enable zonal autoshift for a resource. Practice runs start
 * 			weekly zonal shifts for a resource, to shift
 * 			traffic for the resource out of an Availability Zone. Practice runs make sure, on a regular basis,
 * 			that you have enough capacity in all the Availability Zones in an Amazon Web Services Region
 * 			for your application to continue to operate normally
 * 			when traffic for a resource is shifted away from one Availability Zone.</p>
 *          <important>
 *             <p>You must prescale resource capacity in all Availability Zones in the Region
 * 			where your application is deployed, before you configure practice runs or enable zonal autoshift
 * 			for a resource. You should not rely on scaling on demand when an autoshift or practice run
 * 			starts. </p>
 *          </important>
 *          <p>For more information about using zonal shift and zonal autoshift, see the
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Route 53 Application Recovery Controller
 * 				Developer Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./ARCZonalShiftClient";
export * from "./ARCZonalShift";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ARCZonalShiftExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ARCZonalShiftServiceException } from "./models/ARCZonalShiftServiceException";
