import { CreateAssociationBatchInput } from "../shapes/CreateAssociationBatchInput";
import { CreateAssociationBatchOutput } from "../shapes/CreateAssociationBatchOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidDocumentVersion } from "../shapes/InvalidDocumentVersion";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidParameters } from "../shapes/InvalidParameters";
import { DuplicateInstanceId } from "../shapes/DuplicateInstanceId";
import { AssociationLimitExceeded } from "../shapes/AssociationLimitExceeded";
import { UnsupportedPlatformType } from "../shapes/UnsupportedPlatformType";
import { InvalidOutputLocation } from "../shapes/InvalidOutputLocation";
import { InvalidTarget } from "../shapes/InvalidTarget";
import { InvalidSchedule } from "../shapes/InvalidSchedule";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAssociationBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAssociationBatch",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAssociationBatchInput
  },
  output: {
    shape: CreateAssociationBatchOutput
  },
  errors: [
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
      shape: InvalidParameters
    },
    {
      shape: DuplicateInstanceId
    },
    {
      shape: AssociationLimitExceeded
    },
    {
      shape: UnsupportedPlatformType
    },
    {
      shape: InvalidOutputLocation
    },
    {
      shape: InvalidTarget
    },
    {
      shape: InvalidSchedule
    }
  ]
};
