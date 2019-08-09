import { ListBackupPlansInput } from "./ListBackupPlansInput";
import { ListBackupPlansOutput } from "./ListBackupPlansOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBackupPlans: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupPlans",
  http: {
    method: "GET",
    requestUri: "/backup/plans/"
  },
  input: {
    shape: ListBackupPlansInput
  },
  output: {
    shape: ListBackupPlansOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
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
