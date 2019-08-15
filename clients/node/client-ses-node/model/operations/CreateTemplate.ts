import { CreateTemplateInput } from "../shapes/CreateTemplateInput";
import { CreateTemplateOutput } from "../shapes/CreateTemplateOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidTemplateException } from "../shapes/InvalidTemplateException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTemplateInput
  },
  output: {
    shape: CreateTemplateOutput,
    resultWrapper: "CreateTemplateResult"
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: InvalidTemplateException
    },
    {
      shape: LimitExceededException
    }
  ]
};
