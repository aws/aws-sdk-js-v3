import { CreateConfigurationTemplateInput } from "../shapes/CreateConfigurationTemplateInput";
import { CreateConfigurationTemplateOutput } from "../shapes/CreateConfigurationTemplateOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { TooManyConfigurationTemplatesException } from "../shapes/TooManyConfigurationTemplatesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
