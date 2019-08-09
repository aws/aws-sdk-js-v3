import { InvalidLexiconException } from "./InvalidLexiconException";
import { UnsupportedPlsAlphabetException } from "./UnsupportedPlsAlphabetException";
import { UnsupportedPlsLanguageException } from "./UnsupportedPlsLanguageException";
import { LexiconSizeExceededException } from "./LexiconSizeExceededException";
import { MaxLexemeLengthExceededException } from "./MaxLexemeLengthExceededException";
import { MaxLexiconsNumberExceededException } from "./MaxLexiconsNumberExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type PutLexiconExceptionsUnion =
  | InvalidLexiconException
  | UnsupportedPlsAlphabetException
  | UnsupportedPlsLanguageException
  | LexiconSizeExceededException
  | MaxLexemeLengthExceededException
  | MaxLexiconsNumberExceededException
  | ServiceFailureException;
