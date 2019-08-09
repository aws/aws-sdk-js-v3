import { GetFlowTemplateInput } from "./GetFlowTemplateInput";
import { GetFlowTemplateOutput } from "./GetFlowTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
