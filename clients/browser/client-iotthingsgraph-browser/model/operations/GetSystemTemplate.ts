import { GetSystemTemplateInput } from "../shapes/GetSystemTemplateInput";
import { GetSystemTemplateOutput } from "../shapes/GetSystemTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
