import { _FileAccessLog, _UnmarshalledFileAccessLog } from "./_FileAccessLog";

/**
 * <p>An object representing the access logging information for a virtual node.</p>
 */
export interface _AccessLog {
  /**
   * <p>The file object to send virtual node access logs to.</p>
   */
  file?: _FileAccessLog;
}

export interface _UnmarshalledAccessLog extends _AccessLog {
  /**
   * <p>The file object to send virtual node access logs to.</p>
   */
  file?: _UnmarshalledFileAccessLog;
}
