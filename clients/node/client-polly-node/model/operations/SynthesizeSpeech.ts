import { SynthesizeSpeechInput } from "../shapes/SynthesizeSpeechInput";
import { SynthesizeSpeechOutput } from "../shapes/SynthesizeSpeechOutput";
import { TextLengthExceededException } from "../shapes/TextLengthExceededException";
import { InvalidSampleRateException } from "../shapes/InvalidSampleRateException";
import { InvalidSsmlException } from "../shapes/InvalidSsmlException";
import { LexiconNotFoundException } from "../shapes/LexiconNotFoundException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { MarksNotSupportedForFormatException } from "../shapes/MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "../shapes/SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "../shapes/LanguageNotSupportedException";
import { EngineNotSupportedException } from "../shapes/EngineNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SynthesizeSpeech: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SynthesizeSpeech",
  http: {
    method: "POST",
    requestUri: "/v1/speech"
  },
  input: {
    shape: SynthesizeSpeechInput
  },
  output: {
    shape: SynthesizeSpeechOutput
  },
  errors: [
    {
      shape: TextLengthExceededException
    },
    {
      shape: InvalidSampleRateException
    },
    {
      shape: InvalidSsmlException
    },
    {
      shape: LexiconNotFoundException
    },
    {
      shape: ServiceFailureException
    },
    {
      shape: MarksNotSupportedForFormatException
    },
    {
      shape: SsmlMarksNotSupportedForTextTypeException
    },
    {
      shape: LanguageNotSupportedException
    },
    {
      shape: EngineNotSupportedException
    }
  ]
};
