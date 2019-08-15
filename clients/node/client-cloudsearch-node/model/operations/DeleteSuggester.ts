import { DeleteSuggesterInput } from "../shapes/DeleteSuggesterInput";
import { DeleteSuggesterOutput } from "../shapes/DeleteSuggesterOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
