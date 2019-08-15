import { DeleteConfigurationTemplateInput } from "../shapes/DeleteConfigurationTemplateInput";
import { DeleteConfigurationTemplateOutput } from "../shapes/DeleteConfigurationTemplateOutput";
import { OperationInProgressException } from "../shapes/OperationInProgressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationTemplateInput
  },
  output: {
    shape: DeleteConfigurationTemplateOutput
  },
  errors: [
    {
      shape: OperationInProgressException
    }
  ]
};
