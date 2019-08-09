import { _OptionSetting, _UnmarshalledOptionSetting } from "./_OptionSetting";
import {
  _DBSecurityGroupMembership,
  _UnmarshalledDBSecurityGroupMembership
} from "./_DBSecurityGroupMembership";
import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";

/**
 * <p>Option details.</p>
 */
export interface _Option {
  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * <p>The description of the option.</p>
   */
  OptionDescription?: string;

  /**
   * <p>Indicate if this option is persistent.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Indicate if this option is permanent.</p>
   */
  Permanent?: boolean;

  /**
   * <p>If required, the port configured for this option to use.</p>
   */
  Port?: number;

  /**
   * <p>The version of the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>The option settings for this option.</p>
   */
  OptionSettings?: Array<_OptionSetting> | Iterable<_OptionSetting>;

  /**
   * <p>If the option requires access to a port, then this DB security group allows access to the port.</p>
   */
  DBSecurityGroupMemberships?:
    | Array<_DBSecurityGroupMembership>
    | Iterable<_DBSecurityGroupMembership>;

  /**
   * <p>If the option requires access to a port, then this VPC security group allows access to the port.</p>
   */
  VpcSecurityGroupMemberships?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;
}

export interface _UnmarshalledOption extends _Option {
  /**
   * <p>The option settings for this option.</p>
   */
  OptionSettings?: Array<_UnmarshalledOptionSetting>;

  /**
   * <p>If the option requires access to a port, then this DB security group allows access to the port.</p>
   */
  DBSecurityGroupMemberships?: Array<_UnmarshalledDBSecurityGroupMembership>;

  /**
   * <p>If the option requires access to a port, then this VPC security group allows access to the port.</p>
   */
  VpcSecurityGroupMemberships?: Array<_UnmarshalledVpcSecurityGroupMembership>;
}
