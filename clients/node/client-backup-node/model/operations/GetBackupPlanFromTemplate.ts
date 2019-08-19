import { GetBackupPlanFromTemplateInput } from "../shapes/GetBackupPlanFromTemplateInput";
import { GetBackupPlanFromTemplateOutput } from "../shapes/GetBackupPlanFromTemplateOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
