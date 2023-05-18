// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Cloud Map</fullname>
 *          <p>With Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your
 *    microservice applications run in. When an instance becomes available, you can call the Cloud Map
 *    API to register the instance with Cloud Map. For public or private DNS namespaces, Cloud Map
 *    automatically creates DNS records and an optional health check. Clients that submit public or
 *    private DNS queries, or HTTP requests, for the service receive an answer that contains up to
 *    eight healthy records. </p>
 *
 * @packageDocumentation
 */
export * from "./ServiceDiscoveryClient";
export * from "./ServiceDiscovery";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ServiceDiscoveryServiceException } from "./models/ServiceDiscoveryServiceException";
