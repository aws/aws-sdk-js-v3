import { CreateBackupPlanInput } from "./CreateBackupPlanInput";
import { CreateBackupPlanOutput } from "./CreateBackupPlanOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBackupPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBackupPlan",
  http: {
    method: "PUT",
    requestUri: "/backup/plans/"
  },
  input: {
    shape: CreateBackupPlanInput
  },
  output: {
    shape: CreateBackupPlanOutput
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
