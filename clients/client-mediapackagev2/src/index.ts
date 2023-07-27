// smithy-typescript generated code
/* eslint-disable */
/**
 * <note>
 *             <p>This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023.
 *         To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to
 *         migrate your resources from MediaPackage v1 to MediaPackage v2. </p>
 *             <p>The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information
 *            added, like "v2", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use
 *            the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources.</p>
 *             <p>If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet,
 *            see the <a href="https://docs.aws.amazon.com/mediapackage/latest/apireference/what-is.html">MediaPackage v1 Live API Reference</a>.</p>
 *          </note>
 *          <p>This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols.</p>
 *          <p>We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide.</p>
 *
 * @packageDocumentation
 */
export * from "./MediaPackageV2Client";
export * from "./MediaPackageV2";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { MediaPackageV2ServiceException } from "./models/MediaPackageV2ServiceException";
