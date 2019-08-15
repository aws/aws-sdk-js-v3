import { DeprecateSystemTemplateInput } from "../shapes/DeprecateSystemTemplateInput";
import { DeprecateSystemTemplateOutput } from "../shapes/DeprecateSystemTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
