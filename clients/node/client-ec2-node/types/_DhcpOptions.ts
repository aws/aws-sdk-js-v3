import {
  _DhcpConfiguration,
  _UnmarshalledDhcpConfiguration
} from "./_DhcpConfiguration";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a set of DHCP options.</p>
 */
export interface _DhcpOptions {
  /**
   * <p>One or more DHCP options in the set.</p>
   */
  DhcpConfigurations?: Array<_DhcpConfiguration> | Iterable<_DhcpConfiguration>;

  /**
   * <p>The ID of the set of DHCP options.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The ID of the AWS account that owns the DHCP options set.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledDhcpOptions extends _DhcpOptions {
  /**
   * <p>One or more DHCP options in the set.</p>
   */
  DhcpConfigurations?: Array<_UnmarshalledDhcpConfiguration>;

  /**
   * <p>Any tags assigned to the DHCP options set.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
