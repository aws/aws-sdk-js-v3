import { UpdateAssociationInput } from "./UpdateAssociationInput";
import { UpdateAssociationOutput } from "./UpdateAssociationOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidSchedule } from "./InvalidSchedule";
import { InvalidParameters } from "./InvalidParameters";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidUpdate } from "./InvalidUpdate";
import { TooManyUpdates } from "./TooManyUpdates";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidAssociationVersion } from "./InvalidAssociationVersion";
import { AssociationVersionLimitExceeded } from "./AssociationVersionLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAssociationInput
  },
  output: {
    shape: UpdateAssociationOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidSchedule
    },
    {
      shape: InvalidParameters
    },
    {
      shape: InvalidOutputLocation
    },
    {
      shape: InvalidDocumentVersion
    },
    {
      shape: AssociationDoesNotExist
    },
    {
      shape: InvalidUpdate
    },
    {
      shape: TooManyUpdates
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidTarget
    },
    {
      shape: InvalidAssociationVersion
    },
    {
      shape: AssociationVersionLimitExceeded
    }
  ]
};
