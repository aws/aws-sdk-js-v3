import { _OutputDetail, _UnmarshalledOutputDetail } from "./_OutputDetail";

/**
 * Contains details about the output groups specified in the job settings.
 */
export interface _OutputGroupDetail {
  /**
   * Details about the output
   */
  OutputDetails?: Array<_OutputDetail> | Iterable<_OutputDetail>;
}

export interface _UnmarshalledOutputGroupDetail extends _OutputGroupDetail {
  /**
   * Details about the output
   */
  OutputDetails?: Array<_UnmarshalledOutputDetail>;
}
