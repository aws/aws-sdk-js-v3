import { UpdateConfigurationTemplateInput } from "../shapes/UpdateConfigurationTemplateInput";
import { UpdateConfigurationTemplateOutput } from "../shapes/UpdateConfigurationTemplateOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfigurationTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConfigurationTemplateInput
  },
  output: {
    shape: UpdateConfigurationTemplateOutput,
    resultWrapper: "UpdateConfigurationTemplateResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: TooManyBucketsException
    }
  ]
};
