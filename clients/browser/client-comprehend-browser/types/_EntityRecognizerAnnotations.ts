/**
 * <p>Describes the annotations associated with a entity recognizer.</p>
 */
export interface _EntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the annotations for an entity recognizer are located. The URI must be in the same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string;
}

export type _UnmarshalledEntityRecognizerAnnotations = _EntityRecognizerAnnotations;
