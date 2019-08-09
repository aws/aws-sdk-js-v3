import { UpdateVocabularyInput } from "./UpdateVocabularyInput";
import { UpdateVocabularyOutput } from "./UpdateVocabularyOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
