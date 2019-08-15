import { CreateBackupPlanInput } from "../shapes/CreateBackupPlanInput";
import { CreateBackupPlanOutput } from "../shapes/CreateBackupPlanOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
