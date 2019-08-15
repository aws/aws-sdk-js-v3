import { CreateFlowTemplateInput } from "../shapes/CreateFlowTemplateInput";
import { CreateFlowTemplateOutput } from "../shapes/CreateFlowTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFlowTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFlowTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFlowTemplateInput
  },
  output: {
    shape: CreateFlowTemplateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    }
  ]
};
