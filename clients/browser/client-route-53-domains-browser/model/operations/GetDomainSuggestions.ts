import { GetDomainSuggestionsInput } from "../shapes/GetDomainSuggestionsInput";
import { GetDomainSuggestionsOutput } from "../shapes/GetDomainSuggestionsOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDomainSuggestions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainSuggestions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDomainSuggestionsInput
  },
  output: {
    shape: GetDomainSuggestionsOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
