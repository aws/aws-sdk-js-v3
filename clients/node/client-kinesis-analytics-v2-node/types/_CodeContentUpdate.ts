import {
  _S3ContentLocationUpdate,
  _UnmarshalledS3ContentLocationUpdate
} from "./_S3ContentLocationUpdate";

/**
 * <p>Describes an update to the code of a Java-based Kinesis Data Analytics application.</p>
 */
export interface _CodeContentUpdate {
  /**
   * <p>Describes an update to the text code for an application.</p>
   */
  TextContentUpdate?: string;

  /**
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: _S3ContentLocationUpdate;
}

export interface _UnmarshalledCodeContentUpdate extends _CodeContentUpdate {
  /**
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: Uint8Array;

  /**
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: _UnmarshalledS3ContentLocationUpdate;
}
