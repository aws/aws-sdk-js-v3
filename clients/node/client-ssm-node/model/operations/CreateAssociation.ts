import { CreateAssociationInput } from "../shapes/CreateAssociationInput";
import { CreateAssociationOutput } from "../shapes/CreateAssociationOutput";
import { AssociationAlreadyExists } from "../shapes/AssociationAlreadyExists";
import { AssociationLimitExceeded } from "../shapes/AssociationLimitExceeded";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { UnsupportedPlatformType } from "../shapes/UnsupportedPlatformType";
import { InvalidOutputLocation } from "../shapes/InvalidOutputLocation";
import { InvalidParameters } from "../shapes/InvalidParameters";
import { InvalidTarget } from "../shapes/InvalidTarget";
import { InvalidSchedule } from "../shapes/InvalidSchedule";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
