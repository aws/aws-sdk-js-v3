import { GetFlowTemplateInput } from "../shapes/GetFlowTemplateInput";
import { GetFlowTemplateOutput } from "../shapes/GetFlowTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFlowTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFlowTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFlowTemplateInput
  },
  output: {
    shape: GetFlowTemplateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
