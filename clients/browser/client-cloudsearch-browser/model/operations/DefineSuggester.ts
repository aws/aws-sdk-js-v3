import { DefineSuggesterInput } from "../shapes/DefineSuggesterInput";
import { DefineSuggesterOutput } from "../shapes/DefineSuggesterOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DefineSuggester: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DefineSuggester",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DefineSuggesterInput
  },
  output: {
    shape: DefineSuggesterOutput,
    resultWrapper: "DefineSuggesterResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
