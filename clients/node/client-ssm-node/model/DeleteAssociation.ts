import { DeleteAssociationInput } from "./DeleteAssociationInput";
import { DeleteAssociationOutput } from "./DeleteAssociationOutput";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAssociationInput
  },
  output: {
    shape: DeleteAssociationOutput
  },
  errors: [
    {
      shape: AssociationDoesNotExist
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: TooManyUpdates
    }
  ]
};
