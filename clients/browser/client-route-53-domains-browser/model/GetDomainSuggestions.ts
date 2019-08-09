import { GetDomainSuggestionsInput } from "./GetDomainSuggestionsInput";
import { GetDomainSuggestionsOutput } from "./GetDomainSuggestionsOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
