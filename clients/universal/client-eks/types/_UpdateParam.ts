/**
 * <p>An object representing the details of an update request.</p>
 */
export interface _UpdateParam {
  /**
   * <p>The keys associated with an update request.</p>
   */
  type?:
    | "Version"
    | "PlatformVersion"
    | "EndpointPrivateAccess"
    | "EndpointPublicAccess"
    | "ClusterLogging"
    | string;

  /**
   * <p>The value of the keys submitted as part of an update request.</p>
   */
  value?: string;
}

export type _UnmarshalledUpdateParam = _UpdateParam;
