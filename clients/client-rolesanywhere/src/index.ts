// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Identity and Access Management Roles Anywhere provides a secure way for your workloads such as
 *          servers, containers, and applications that run outside of Amazon Web Services to obtain
 *          temporary Amazon Web Services credentials. Your workloads can use the same IAM policies and roles you have for native Amazon Web Services applications to access Amazon Web Services resources. Using IAM Roles Anywhere eliminates the need to
 *          manage long-term credentials for workloads running outside of Amazon Web Services.</p>
 *          <p>
 *          To use IAM Roles Anywhere, your workloads must use X.509 certificates
 *          issued by their certificate authority (CA). You register the CA with IAM
 *          Roles Anywhere as a trust anchor to establish trust between your public key infrastructure
 *          (PKI) and IAM Roles Anywhere. If you don't manage your own PKI system, you
 *          can use Private Certificate Authority to create a CA and then use that to establish trust with
 *          IAM Roles Anywhere.
 *       </p>
 *          <p>This guide describes the IAM Roles Anywhere operations that you can call
 *          programmatically. For more information about IAM Roles Anywhere, see the
 *             <a href="https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html">IAM Roles Anywhere User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./RolesAnywhereClient";
export * from "./RolesAnywhere";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { RolesAnywhereServiceException } from "./models/RolesAnywhereServiceException";
