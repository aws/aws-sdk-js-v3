import { CreateAssociationBatchInput } from "./CreateAssociationBatchInput";
import { CreateAssociationBatchOutput } from "./CreateAssociationBatchOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidParameters } from "./InvalidParameters";
import { DuplicateInstanceId } from "./DuplicateInstanceId";
import { AssociationLimitExceeded } from "./AssociationLimitExceeded";
import { UnsupportedPlatformType } from "./UnsupportedPlatformType";
import { InvalidOutputLocation } from "./InvalidOutputLocation";
import { InvalidTarget } from "./InvalidTarget";
import { InvalidSchedule } from "./InvalidSchedule";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
