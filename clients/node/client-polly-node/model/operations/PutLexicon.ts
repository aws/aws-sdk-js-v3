import { PutLexiconInput } from "../shapes/PutLexiconInput";
import { PutLexiconOutput } from "../shapes/PutLexiconOutput";
import { InvalidLexiconException } from "../shapes/InvalidLexiconException";
import { UnsupportedPlsAlphabetException } from "../shapes/UnsupportedPlsAlphabetException";
import { UnsupportedPlsLanguageException } from "../shapes/UnsupportedPlsLanguageException";
import { LexiconSizeExceededException } from "../shapes/LexiconSizeExceededException";
import { MaxLexemeLengthExceededException } from "../shapes/MaxLexemeLengthExceededException";
import { MaxLexiconsNumberExceededException } from "../shapes/MaxLexiconsNumberExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
