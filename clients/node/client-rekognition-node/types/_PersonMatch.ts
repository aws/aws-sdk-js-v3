import { _PersonDetail, _UnmarshalledPersonDetail } from "./_PersonDetail";
import { _FaceMatch, _UnmarshalledFaceMatch } from "./_FaceMatch";

/**
 * <p>Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. </p>
 */
export interface _PersonMatch {
  /**
   * <p>The time, in milliseconds from the beginning of the video, that the person was matched in the video.</p>
   */
  Timestamp?: number;

  /**
   * <p>Information about the matched person.</p>
   */
  Person?: _PersonDetail;

  /**
   * <p>Information about the faces in the input collection that match the face of a person in the video.</p>
   */
  FaceMatches?: Array<_FaceMatch> | Iterable<_FaceMatch>;
}

export interface _UnmarshalledPersonMatch extends _PersonMatch {
  /**
   * <p>Information about the matched person.</p>
   */
  Person?: _UnmarshalledPersonDetail;

  /**
   * <p>Information about the faces in the input collection that match the face of a person in the video.</p>
   */
  FaceMatches?: Array<_UnmarshalledFaceMatch>;
}
