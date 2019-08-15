import { ListVocabulariesInput } from "../shapes/ListVocabulariesInput";
import { ListVocabulariesOutput } from "../shapes/ListVocabulariesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVocabularies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVocabularies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVocabulariesInput
  },
  output: {
    shape: ListVocabulariesOutput
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
    }
  ]
};
