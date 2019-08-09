import { _Communication, _UnmarshalledCommunication } from "./_Communication";

/**
 * <p>The five most recent communications associated with the case.</p>
 */
export interface _RecentCaseCommunications {
  /**
   * <p>The five most recent communications associated with the case.</p>
   */
  communications?: Array<_Communication> | Iterable<_Communication>;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;
}

export interface _UnmarshalledRecentCaseCommunications
  extends _RecentCaseCommunications {
  /**
   * <p>The five most recent communications associated with the case.</p>
   */
  communications?: Array<_UnmarshalledCommunication>;
}
