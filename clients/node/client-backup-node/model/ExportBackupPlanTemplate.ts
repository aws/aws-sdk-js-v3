import { ExportBackupPlanTemplateInput } from "./ExportBackupPlanTemplateInput";
import { ExportBackupPlanTemplateOutput } from "./ExportBackupPlanTemplateOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
