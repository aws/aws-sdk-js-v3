import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledPersonMatch } from "./_PersonMatch";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFaceSearchOutput shape
 */
export interface GetFaceSearchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the face search job.</p>
   */
  JobStatus?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results. </p>
   */
  NextToken?: string;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition Video operation. </p>
   */
  VideoMetadata?: _UnmarshalledVideoMetadata;

  /**
   * <p>An array of persons, <a>PersonMatch</a>, in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information for when persons are matched in the video. You specify the input collection in an initial call to <code>StartFaceSearch</code>. Each <code>Persons</code> element includes a time the person was matched, face match details (<code>FaceMatches</code>) for matching faces in the collection, and person information (<code>Person</code>) for the matched person. </p>
   */
  Persons?: Array<_UnmarshalledPersonMatch>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
