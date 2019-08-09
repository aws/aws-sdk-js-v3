/**
 * <p>Describes the training documents submitted with an entity recognizer.</p>
 */
export interface _EntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer are located. The URI must be in the same region as the API endpoint that you are calling.</p>
   */
  S3Uri: string;
}

export type _UnmarshalledEntityRecognizerDocuments = _EntityRecognizerDocuments;
