import { UpdateAssociationInput } from "../shapes/UpdateAssociationInput";
import { UpdateAssociationOutput } from "../shapes/UpdateAssociationOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidSchedule } from "../shapes/InvalidSchedule";
import { InvalidParameters } from "../shapes/InvalidParameters";
import { InvalidOutputLocation } from "../shapes/InvalidOutputLocation";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { InvalidUpdate } from "../shapes/InvalidUpdate";
import { TooManyUpdates } from "../shapes/TooManyUpdates";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidTarget } from "../shapes/InvalidTarget";
import { InvalidAssociationVersion } from "../shapes/InvalidAssociationVersion";
import { AssociationVersionLimitExceeded } from "../shapes/AssociationVersionLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
