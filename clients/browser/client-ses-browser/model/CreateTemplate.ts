import { CreateTemplateInput } from "./CreateTemplateInput";
import { CreateTemplateOutput } from "./CreateTemplateOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidTemplateException } from "./InvalidTemplateException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
