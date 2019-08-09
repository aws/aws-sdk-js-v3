import {
  _VPCDerivedInfo,
  _UnmarshalledVPCDerivedInfo
} from "./_VPCDerivedInfo";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 */
export interface _VPCDerivedInfoStatus {
  /**
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   */
  Options: _VPCDerivedInfo;

  /**
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledVPCDerivedInfoStatus
  extends _VPCDerivedInfoStatus {
  /**
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledVPCDerivedInfo;

  /**
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
