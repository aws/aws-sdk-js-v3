import { GetBackupPlanFromTemplateInput } from "./GetBackupPlanFromTemplateInput";
import { GetBackupPlanFromTemplateOutput } from "./GetBackupPlanFromTemplateOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBackupPlanFromTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBackupPlanFromTemplate",
  http: {
    method: "GET",
    requestUri: "/backup/template/plans/{templateId}/toPlan"
  },
  input: {
    shape: GetBackupPlanFromTemplateInput
  },
  output: {
    shape: GetBackupPlanFromTemplateOutput
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
