import { UpdateVocabularyInput } from "../shapes/UpdateVocabularyInput";
import { UpdateVocabularyOutput } from "../shapes/UpdateVocabularyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVocabulary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVocabulary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateVocabularyInput
  },
  output: {
    shape: UpdateVocabularyOutput
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
      shape: NotFoundException
    },
    {
      shape: ConflictException
    }
  ]
};
