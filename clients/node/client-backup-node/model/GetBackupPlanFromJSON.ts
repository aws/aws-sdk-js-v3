import { GetBackupPlanFromJSONInput } from "./GetBackupPlanFromJSONInput";
import { GetBackupPlanFromJSONOutput } from "./GetBackupPlanFromJSONOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
