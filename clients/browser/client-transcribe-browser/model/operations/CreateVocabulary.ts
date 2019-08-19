import { CreateVocabularyInput } from "../shapes/CreateVocabularyInput";
import { CreateVocabularyOutput } from "../shapes/CreateVocabularyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVocabulary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVocabulary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVocabularyInput
  },
  output: {
    shape: CreateVocabularyOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ConflictException
    }
  ]
};
