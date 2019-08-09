import { CreateSystemTemplateInput } from "./CreateSystemTemplateInput";
import { CreateSystemTemplateOutput } from "./CreateSystemTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSystemTemplateInput
  },
  output: {
    shape: CreateSystemTemplateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
