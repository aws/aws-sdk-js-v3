import { GetSystemTemplateInput } from "./GetSystemTemplateInput";
import { GetSystemTemplateOutput } from "./GetSystemTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSystemTemplateInput
  },
  output: {
    shape: GetSystemTemplateOutput
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
