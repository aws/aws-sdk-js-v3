import { DeprecateSystemTemplateInput } from "./DeprecateSystemTemplateInput";
import { DeprecateSystemTemplateOutput } from "./DeprecateSystemTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeprecateSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprecateSystemTemplateInput
  },
  output: {
    shape: DeprecateSystemTemplateOutput
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
