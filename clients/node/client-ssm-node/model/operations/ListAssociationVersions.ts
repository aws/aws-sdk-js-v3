import { ListAssociationVersionsInput } from "../shapes/ListAssociationVersionsInput";
import { ListAssociationVersionsOutput } from "../shapes/ListAssociationVersionsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAssociationVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssociationVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssociationVersionsInput
  },
  output: {
    shape: ListAssociationVersionsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: AssociationDoesNotExist
    }
  ]
};
