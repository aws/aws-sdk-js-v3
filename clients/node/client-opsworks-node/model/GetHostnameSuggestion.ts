import { GetHostnameSuggestionInput } from "./GetHostnameSuggestionInput";
import { GetHostnameSuggestionOutput } from "./GetHostnameSuggestionOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
