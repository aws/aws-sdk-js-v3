import { GetVocabularyInput } from "./GetVocabularyInput";
import { GetVocabularyOutput } from "./GetVocabularyOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVocabulary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVocabulary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetVocabularyInput
  },
  output: {
    shape: GetVocabularyOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};
