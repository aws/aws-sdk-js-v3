import { CreateBackupSelectionInput } from "./CreateBackupSelectionInput";
import { CreateBackupSelectionOutput } from "./CreateBackupSelectionOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
