import { ListAssociationsInput } from "./ListAssociationsInput";
import { ListAssociationsOutput } from "./ListAssociationsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssociationsInput
  },
  output: {
    shape: ListAssociationsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    }
  ]
};
