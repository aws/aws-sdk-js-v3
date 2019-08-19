import { DeleteAssociationInput } from "../shapes/DeleteAssociationInput";
import { DeleteAssociationOutput } from "../shapes/DeleteAssociationOutput";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
