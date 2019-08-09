import { DeleteSuggesterInput } from "./DeleteSuggesterInput";
import { DeleteSuggesterOutput } from "./DeleteSuggesterOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSuggester: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSuggester",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSuggesterInput
  },
  output: {
    shape: DeleteSuggesterOutput,
    resultWrapper: "DeleteSuggesterResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
