import { SuggestInput } from "./SuggestInput";
import { SuggestOutput } from "./SuggestOutput";
import { SearchException } from "./SearchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const Suggest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Suggest",
  http: {
    method: "GET",
    requestUri: "/2013-01-01/suggest?format=sdk&pretty=true"
  },
  input: {
    shape: SuggestInput
  },
  output: {
    shape: SuggestOutput
  },
  errors: [
    {
      shape: SearchException
    }
  ]
};
