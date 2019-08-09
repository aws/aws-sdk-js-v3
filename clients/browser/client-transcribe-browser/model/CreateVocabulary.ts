import { CreateVocabularyInput } from "./CreateVocabularyInput";
import { CreateVocabularyOutput } from "./CreateVocabularyOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
