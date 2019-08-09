import { GetSystemTemplateRevisionsInput } from "./GetSystemTemplateRevisionsInput";
import { GetSystemTemplateRevisionsOutput } from "./GetSystemTemplateRevisionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSystemTemplateRevisions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSystemTemplateRevisions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSystemTemplateRevisionsInput
  },
  output: {
    shape: GetSystemTemplateRevisionsOutput
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
