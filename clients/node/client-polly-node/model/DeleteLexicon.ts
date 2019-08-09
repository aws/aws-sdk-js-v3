import { DeleteLexiconInput } from "./DeleteLexiconInput";
import { DeleteLexiconOutput } from "./DeleteLexiconOutput";
import { LexiconNotFoundException } from "./LexiconNotFoundException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLexicon: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLexicon",
  http: {
    method: "DELETE",
    requestUri: "/v1/lexicons/{LexiconName}"
  },
  input: {
    shape: DeleteLexiconInput
  },
  output: {
    shape: DeleteLexiconOutput
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
