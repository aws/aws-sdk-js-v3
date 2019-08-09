import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The alphabet specified by the lexicon is not a supported alphabet. Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 */
export interface UnsupportedPlsAlphabetException
  extends __ServiceException__<_UnsupportedPlsAlphabetExceptionDetails> {
  name: "UnsupportedPlsAlphabetException";
}

export interface _UnsupportedPlsAlphabetExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
