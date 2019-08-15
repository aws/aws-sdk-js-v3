import { GetBackupPlanFromJSONInput } from "../shapes/GetBackupPlanFromJSONInput";
import { GetBackupPlanFromJSONOutput } from "../shapes/GetBackupPlanFromJSONOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBackupPlanFromJSON: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupPlanFromJSON",
  http: {
    method: "POST",
    requestUri: "/backup/template/json/toPlan"
  },
  input: {
    shape: GetBackupPlanFromJSONInput
  },
  output: {
    shape: GetBackupPlanFromJSONOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
