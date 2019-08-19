import { _ComparedFace, _UnmarshalledComparedFace } from "./_ComparedFace";

/**
 * <p>Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.</p>
 */
export interface _Celebrity {
  /**
   * <p>An array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty.</p>
   */
  Urls?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the celebrity. </p>
   */
  Id?: string;

  /**
   * <p>Provides information about the celebrity's face, such as its location on the image.</p>
   */
  Face?: _ComparedFace;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity.</p>
   */
  MatchConfidence?: number;
}

export interface _UnmarshalledCelebrity extends _Celebrity {
  /**
   * <p>An array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty.</p>
   */
  Urls?: Array<string>;

  /**
   * <p>Provides information about the celebrity's face, such as its location on the image.</p>
   */
  Face?: _UnmarshalledComparedFace;
}
