import { CreateConfigurationTemplateInput } from "./CreateConfigurationTemplateInput";
import { CreateConfigurationTemplateOutput } from "./CreateConfigurationTemplateOutput";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { TooManyConfigurationTemplatesException } from "./TooManyConfigurationTemplatesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfigurationTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConfigurationTemplateInput
  },
  output: {
    shape: CreateConfigurationTemplateOutput,
    resultWrapper: "CreateConfigurationTemplateResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: TooManyBucketsException
    },
    {
      shape: TooManyConfigurationTemplatesException
    }
  ]
};
