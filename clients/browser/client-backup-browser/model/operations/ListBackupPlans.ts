import { ListBackupPlansInput } from "../shapes/ListBackupPlansInput";
import { ListBackupPlansOutput } from "../shapes/ListBackupPlansOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
