import { UpdateConfigurationTemplateInput } from "./UpdateConfigurationTemplateInput";
import { UpdateConfigurationTemplateOutput } from "./UpdateConfigurationTemplateOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
