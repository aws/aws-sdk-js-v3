import { _IdFormat, _UnmarshalledIdFormat } from "./_IdFormat";

/**
 * <p>PrincipalIdFormat description</p>
 */
export interface _PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatARN description</p>
   */
  Arn?: string;

  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: Array<_IdFormat> | Iterable<_IdFormat>;
}

export interface _UnmarshalledPrincipalIdFormat extends _PrincipalIdFormat {
  /**
   * <p>PrincipalIdFormatStatuses description</p>
   */
  Statuses?: Array<_UnmarshalledIdFormat>;
}
