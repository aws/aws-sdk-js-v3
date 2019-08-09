import { CreateAssociationInput } from "./CreateAssociationInput";
import { CreateAssociationOutput } from "./CreateAssociationOutput";
import { AssociationAlreadyExists } from "./AssociationAlreadyExists";
import { AssociationLimitExceeded } from "./AssociationLimitExceeded";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidParameters } from "./InvalidParameters";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidSchedule } from "./InvalidSchedule";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAssociationInput
  },
  output: {
    shape: CreateAssociationOutput
  },
  errors: [
    {
      shape: AssociationAlreadyExists
    },
    {
      shape: AssociationLimitExceeded
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidDocumentVersion
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: UnsupportedPlatformType
    },
    {
      shape: InvalidOutputLocation
    },
    {
      shape: InvalidParameters
    },
    {
      shape: InvalidTarget
    },
    {
      shape: InvalidSchedule
    }
  ]
};
