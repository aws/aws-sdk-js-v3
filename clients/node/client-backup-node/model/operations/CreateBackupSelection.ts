import { CreateBackupSelectionInput } from "../shapes/CreateBackupSelectionInput";
import { CreateBackupSelectionOutput } from "../shapes/CreateBackupSelectionOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBackupSelection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBackupSelection",
  http: {
    method: "PUT",
    requestUri: "/backup/plans/{backupPlanId}/selections/"
  },
  input: {
    shape: CreateBackupSelectionInput
  },
  output: {
    shape: CreateBackupSelectionOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
