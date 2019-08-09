/**
 * <p>If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
 */
export interface _LinkedService {
  /**
   * <p>If the health check or hosted zone was created by another service, the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  ServicePrincipal?: string;

  /**
   * <p>If the health check or hosted zone was created by another service, an optional description that can be provided by the other service. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. </p>
   */
  Description?: string;
}

export type _UnmarshalledLinkedService = _LinkedService;
