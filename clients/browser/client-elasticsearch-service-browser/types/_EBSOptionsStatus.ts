import { _EBSOptions, _UnmarshalledEBSOptions } from "./_EBSOptions";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 */
export interface _EBSOptionsStatus {
  /**
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   */
  Options: _EBSOptions;

  /**
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledEBSOptionsStatus extends _EBSOptionsStatus {
  /**
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledEBSOptions;

  /**
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
