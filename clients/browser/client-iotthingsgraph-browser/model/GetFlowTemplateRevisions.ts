import { GetFlowTemplateRevisionsInput } from "./GetFlowTemplateRevisionsInput";
import { GetFlowTemplateRevisionsOutput } from "./GetFlowTemplateRevisionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
