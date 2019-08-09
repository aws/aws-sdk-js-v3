import { _Term, _UnmarshalledTerm } from "./_Term";

/**
 * <p>The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.</p>
 */
export interface _AppliedTerminology {
  /**
   * <p>The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.</p>
   */
  Name?: string;

  /**
   * <p>The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text. </p>
   */
  Terms?: Array<_Term> | Iterable<_Term>;
}

export interface _UnmarshalledAppliedTerminology extends _AppliedTerminology {
  /**
   * <p>The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text. </p>
   */
  Terms?: Array<_UnmarshalledTerm>;
}
