import { ListBackupPlanTemplatesInput } from "../shapes/ListBackupPlanTemplatesInput";
import { ListBackupPlanTemplatesOutput } from "../shapes/ListBackupPlanTemplatesOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBackupPlanTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupPlanTemplates",
  http: {
    method: "GET",
    requestUri: "/backup/template/plans"
  },
  input: {
    shape: ListBackupPlanTemplatesInput
  },
  output: {
    shape: ListBackupPlanTemplatesOutput
  },
  errors: [
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
      shape: ResourceNotFoundException
    }
  ]
};
