import { ListAssociationsInput } from "../shapes/ListAssociationsInput";
import { ListAssociationsOutput } from "../shapes/ListAssociationsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
