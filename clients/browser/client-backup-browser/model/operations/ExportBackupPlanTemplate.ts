import { ExportBackupPlanTemplateInput } from "../shapes/ExportBackupPlanTemplateInput";
import { ExportBackupPlanTemplateOutput } from "../shapes/ExportBackupPlanTemplateOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportBackupPlanTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportBackupPlanTemplate",
  http: {
    method: "GET",
    requestUri: "/backup/plans/{backupPlanId}/toTemplate/"
  },
  input: {
    shape: ExportBackupPlanTemplateInput
  },
  output: {
    shape: ExportBackupPlanTemplateOutput
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
