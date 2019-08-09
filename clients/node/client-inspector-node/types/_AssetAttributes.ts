import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";

/**
 * <p>A collection of attributes of the host from which the finding is generated.</p>
 */
export interface _AssetAttributes {
  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number;

  /**
   * <p>The ID of the agent that is installed on the EC2 instance where the finding is generated.</p>
   */
  agentId?: string;

  /**
   * <p>The Auto Scaling group of the EC2 instance where the finding is generated.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where the finding is generated.</p>
   */
  amiId?: string;

  /**
   * <p>The hostname of the EC2 instance where the finding is generated.</p>
   */
  hostname?: string;

  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is generated.</p>
   */
  ipv4Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the finding is generated.</p>
   */
  networkInterfaces?: Array<_NetworkInterface> | Iterable<_NetworkInterface>;
}

export interface _UnmarshalledAssetAttributes extends _AssetAttributes {
  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is generated.</p>
   */
  ipv4Addresses?: Array<string>;

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the finding is generated.</p>
   */
  networkInterfaces?: Array<_UnmarshalledNetworkInterface>;
}
