import { ListLexiconsInput } from "./ListLexiconsInput";
import { ListLexiconsOutput } from "./ListLexiconsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListLexicons: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLexicons",
  http: {
    method: "GET",
    requestUri: "/v1/lexicons"
  },
  input: {
    shape: ListLexiconsInput
  },
  output: {
    shape: ListLexiconsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
