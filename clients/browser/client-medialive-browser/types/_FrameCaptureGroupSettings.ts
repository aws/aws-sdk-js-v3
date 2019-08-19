import {
  _OutputLocationRef,
  _UnmarshalledOutputLocationRef
} from "./_OutputLocationRef";

/**
 * Frame Capture Group Settings
 */
export interface _FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling_) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling_). The final file names consist of the prefix from the destination field (for example, "curling_") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curlingLow.00001.jpg
   */
  Destination: _OutputLocationRef;
}

export interface _UnmarshalledFrameCaptureGroupSettings
  extends _FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling_) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling_). The final file names consist of the prefix from the destination field (for example, "curling_") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curlingLow.00001.jpg
   */
  Destination: _UnmarshalledOutputLocationRef;
}
