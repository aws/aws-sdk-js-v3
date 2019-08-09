import { DeprecateFlowTemplateInput } from "./DeprecateFlowTemplateInput";
import { DeprecateFlowTemplateOutput } from "./DeprecateFlowTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeprecateFlowTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeprecateFlowTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeprecateFlowTemplateInput
  },
  output: {
    shape: DeprecateFlowTemplateOutput
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
