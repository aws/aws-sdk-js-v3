import { ListAssociationVersionsInput } from "./ListAssociationVersionsInput";
import { ListAssociationVersionsOutput } from "./ListAssociationVersionsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
