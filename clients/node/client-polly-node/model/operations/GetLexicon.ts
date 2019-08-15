import { GetLexiconInput } from "../shapes/GetLexiconInput";
import { GetLexiconOutput } from "../shapes/GetLexiconOutput";
import { LexiconNotFoundException } from "../shapes/LexiconNotFoundException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLexicon: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLexicon",
  http: {
    method: "GET",
    requestUri: "/v1/lexicons/{LexiconName}"
  },
  input: {
    shape: GetLexiconInput
  },
  output: {
    shape: GetLexiconOutput
  },
  errors: [
    {
      shape: LexiconNotFoundException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
