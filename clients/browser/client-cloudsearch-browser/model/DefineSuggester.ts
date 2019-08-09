import { DefineSuggesterInput } from "./DefineSuggesterInput";
import { DefineSuggesterOutput } from "./DefineSuggesterOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
