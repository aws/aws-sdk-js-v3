import { GetVocabularyInput } from "../shapes/GetVocabularyInput";
import { GetVocabularyOutput } from "../shapes/GetVocabularyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
