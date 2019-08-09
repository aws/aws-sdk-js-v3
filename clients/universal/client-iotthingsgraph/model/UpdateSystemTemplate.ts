import { UpdateSystemTemplateInput } from "./UpdateSystemTemplateInput";
import { UpdateSystemTemplateOutput } from "./UpdateSystemTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSystemTemplateInput
  },
  output: {
    shape: UpdateSystemTemplateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
