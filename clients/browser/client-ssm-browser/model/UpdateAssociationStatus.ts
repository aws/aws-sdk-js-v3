import { UpdateAssociationStatusInput } from "./UpdateAssociationStatusInput";
import { UpdateAssociationStatusOutput } from "./UpdateAssociationStatusOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidDocument } from "./InvalidDocument";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { StatusUnchanged } from "./StatusUnchanged";
import { TooManyUpdates } from "./TooManyUpdates";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
