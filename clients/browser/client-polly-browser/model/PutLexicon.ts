import { PutLexiconInput } from "./PutLexiconInput";
import { PutLexiconOutput } from "./PutLexiconOutput";
import { InvalidLexiconException } from "./InvalidLexiconException";
import { UnsupportedPlsAlphabetException } from "./UnsupportedPlsAlphabetException";
import { UnsupportedPlsLanguageException } from "./UnsupportedPlsLanguageException";
import { LexiconSizeExceededException } from "./LexiconSizeExceededException";
import { MaxLexemeLengthExceededException } from "./MaxLexemeLengthExceededException";
import { MaxLexiconsNumberExceededException } from "./MaxLexiconsNumberExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutLexicon: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLexicon",
  http: {
    method: "PUT",
    requestUri: "/v1/lexicons/{LexiconName}"
  },
  input: {
    shape: PutLexiconInput
  },
  output: {
    shape: PutLexiconOutput
  },
  errors: [
    {
      shape: InvalidLexiconException
    },
    {
      shape: UnsupportedPlsAlphabetException
    },
    {
      shape: UnsupportedPlsLanguageException
    },
    {
      shape: LexiconSizeExceededException
    },
    {
      shape: MaxLexemeLengthExceededException
    },
    {
      shape: MaxLexiconsNumberExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
