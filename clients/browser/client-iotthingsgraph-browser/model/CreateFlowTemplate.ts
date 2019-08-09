import { CreateFlowTemplateInput } from "./CreateFlowTemplateInput";
import { CreateFlowTemplateOutput } from "./CreateFlowTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
