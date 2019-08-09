import { ListBackupPlanTemplatesInput } from "./ListBackupPlanTemplatesInput";
import { ListBackupPlanTemplatesOutput } from "./ListBackupPlanTemplatesOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
