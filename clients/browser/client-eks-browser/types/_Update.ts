import { _UpdateParam, _UnmarshalledUpdateParam } from "./_UpdateParam";
import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * <p>An object representing an asynchronous update.</p>
 */
export interface _Update {
  /**
   * <p>A UUID that is used to track the update.</p>
   */
  id?: string;

  /**
   * <p>The current status of the update.</p>
   */
  status?: "InProgress" | "Failed" | "Cancelled" | "Successful" | string;

  /**
   * <p>The type of the update.</p>
   */
  type?: "VersionUpdate" | "EndpointAccessUpdate" | "LoggingUpdate" | string;

  /**
   * <p>A key-value map that contains the parameters associated with the update.</p>
   */
  params?: Array<_UpdateParam> | Iterable<_UpdateParam>;

  /**
   * <p>The Unix epoch timestamp in seconds for when the update was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>Any errors associated with a <code>Failed</code> update.</p>
   */
  errors?: Array<_ErrorDetail> | Iterable<_ErrorDetail>;
}

export interface _UnmarshalledUpdate extends _Update {
  /**
   * <p>A key-value map that contains the parameters associated with the update.</p>
   */
  params?: Array<_UnmarshalledUpdateParam>;

  /**
   * <p>The Unix epoch timestamp in seconds for when the update was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Any errors associated with a <code>Failed</code> update.</p>
   */
  errors?: Array<_UnmarshalledErrorDetail>;
}
