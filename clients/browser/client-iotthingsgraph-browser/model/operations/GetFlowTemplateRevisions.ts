import { GetFlowTemplateRevisionsInput } from "../shapes/GetFlowTemplateRevisionsInput";
import { GetFlowTemplateRevisionsOutput } from "../shapes/GetFlowTemplateRevisionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFlowTemplateRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFlowTemplateRevisions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetFlowTemplateRevisionsInput
  },
  output: {
    shape: GetFlowTemplateRevisionsOutput
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
