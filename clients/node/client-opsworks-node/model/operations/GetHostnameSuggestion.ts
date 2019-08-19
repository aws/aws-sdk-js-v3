import { GetHostnameSuggestionInput } from "../shapes/GetHostnameSuggestionInput";
import { GetHostnameSuggestionOutput } from "../shapes/GetHostnameSuggestionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHostnameSuggestion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHostnameSuggestion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetHostnameSuggestionInput
  },
  output: {
    shape: GetHostnameSuggestionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
