// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the API Reference Guide for zonal shift and zonal autoshift in Amazon Route 53 Application Recovery Controller (ARC).</p>
 *          <p>You can start a zonal shift to move traffic for a load balancer resource away from an Availability Zone to
 * 			help your application recover quickly from an impairment in an Availability Zone. For example,
 * 			you can recover your application from a developer's bad code deployment or from an
 * 			Amazon Web Services infrastructure failure in a single Availability Zone.</p>
 *          <p>You can also configure zonal autoshift for supported load balancer resources. Zonal autoshift
 * 			is a capability in ARC where you authorize Amazon Web Services to shift away application resource
 * 			traffic from an Availability Zone during events, on your behalf, to help reduce your time to recovery.
 * 			Amazon Web Services starts an autoshift when internal telemetry indicates that there is an Availability
 * 			Zone impairment that could potentially impact customers.</p>
 *          <p>To help make sure that zonal autoshift is safe for your application, you must
 * 			also configure practice runs when you enable zonal autoshift for a resource. Practice runs start
 * 			weekly zonal shifts for a resource, to shift traffic for the resource away from an Availability Zone.
 * 			Practice runs help you to make sure, on a regular basis, that you have enough capacity in all the
 * 			Availability Zones in an Amazon Web Services Region for your application to continue to operate normally
 * 			when traffic for a resource is shifted away from one Availability Zone.</p>
 *          <important>
 *             <p>Before you configure practice runs or enable zonal autoshift, we strongly recommend
 * 			that you prescale your application resource capacity in all Availability Zones in the Region where
 * 			your application resources are deployed. You should not rely on scaling on demand when an
 * 			autoshift or practice run starts. Zonal autoshift, including practice runs, works independently,
 * 			and does not wait for auto scaling actions to complete. Relying on auto scaling, instead of
 * 			pre-scaling, can result in loss of availability.</p>
 *             <p>If you use auto scaling to handle regular cycles of traffic, we strongly recommend that you configure
 * 				the minimum capacity of your auto scaling to continue operating normally with the loss of an
 * 				Availability Zone. </p>
 *          </important>
 *          <p>Be aware that ARC does not inspect the health of individual resources. Amazon Web Services only starts an
 * 			autoshift when Amazon Web Services telemetry detects that there is an Availability Zone impairment that could
 * 			potentially impact customers. In some cases, resources might be shifted away that are not experiencing
 * 			impact.</p>
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
