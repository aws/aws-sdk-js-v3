import { UpdateAssociationStatusInput } from "../shapes/UpdateAssociationStatusInput";
import { UpdateAssociationStatusOutput } from "../shapes/UpdateAssociationStatusOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { StatusUnchanged } from "../shapes/StatusUnchanged";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAssociationStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAssociationStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAssociationStatusInput
  },
  output: {
    shape: UpdateAssociationStatusOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidDocument
    },
    {
      shape: AssociationDoesNotExist
    },
    {
      shape: StatusUnchanged
    },
    {
      shape: TooManyUpdates
    }
  ]
};
