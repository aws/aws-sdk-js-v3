import { GetSystemTemplateRevisionsInput } from "../shapes/GetSystemTemplateRevisionsInput";
import { GetSystemTemplateRevisionsOutput } from "../shapes/GetSystemTemplateRevisionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
