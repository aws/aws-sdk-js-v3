import { UpdateFlowTemplateInput } from "../shapes/UpdateFlowTemplateInput";
import { UpdateFlowTemplateOutput } from "../shapes/UpdateFlowTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
