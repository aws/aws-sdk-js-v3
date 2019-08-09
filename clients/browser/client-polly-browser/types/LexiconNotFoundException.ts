import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
 */
export interface LexiconNotFoundException
  extends __ServiceException__<_LexiconNotFoundExceptionDetails> {
  name: "LexiconNotFoundException";
}

export interface _LexiconNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
