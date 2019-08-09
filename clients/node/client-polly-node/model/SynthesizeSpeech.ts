import { SynthesizeSpeechInput } from "./SynthesizeSpeechInput";
import { SynthesizeSpeechOutput } from "./SynthesizeSpeechOutput";
import { TextLengthExceededException } from "./TextLengthExceededException";
import { InvalidSampleRateException } from "./InvalidSampleRateException";
import { InvalidSsmlException } from "./InvalidSsmlException";
import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
import { MarksNotSupportedForFormatException } from "./MarksNotSupportedForFormatException";
import { SsmlMarksNotSupportedForTextTypeException } from "./SsmlMarksNotSupportedForTextTypeException";
import { LanguageNotSupportedException } from "./LanguageNotSupportedException";
import { EngineNotSupportedException } from "./EngineNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
