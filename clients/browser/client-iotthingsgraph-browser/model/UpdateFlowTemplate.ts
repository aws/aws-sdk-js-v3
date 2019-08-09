import { UpdateFlowTemplateInput } from "./UpdateFlowTemplateInput";
import { UpdateFlowTemplateOutput } from "./UpdateFlowTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFlowTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFlowTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFlowTemplateInput
  },
  output: {
    shape: UpdateFlowTemplateOutput
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
