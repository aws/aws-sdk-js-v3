import {
  _VirtualServiceProvider,
  _UnmarshalledVirtualServiceProvider
} from "./_VirtualServiceProvider";

/**
 * <p>An object representing the specification of a virtual service.</p>
 */
export interface _VirtualServiceSpec {
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You can specify
   *          a single virtual node or virtual router.</p>
   */
  provider?: _VirtualServiceProvider;
}

export interface _UnmarshalledVirtualServiceSpec extends _VirtualServiceSpec {
  /**
   * <p>The App Mesh object that is acting as the provider for a virtual service. You can specify
   *          a single virtual node or virtual router.</p>
   */
  provider?: _UnmarshalledVirtualServiceProvider;
}
