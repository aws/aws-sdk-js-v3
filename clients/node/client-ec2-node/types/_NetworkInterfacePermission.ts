import {
  _NetworkInterfacePermissionState,
  _UnmarshalledNetworkInterfacePermissionState
} from "./_NetworkInterfacePermissionState";

/**
 * <p>Describes a permission for a network interface.</p>
 */
export interface _NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The AWS service.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission.</p>
   */
  Permission?: "INSTANCE-ATTACH" | "EIP-ASSOCIATE" | string;

  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: _NetworkInterfacePermissionState;
}

export interface _UnmarshalledNetworkInterfacePermission
  extends _NetworkInterfacePermission {
  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: _UnmarshalledNetworkInterfacePermissionState;
}
