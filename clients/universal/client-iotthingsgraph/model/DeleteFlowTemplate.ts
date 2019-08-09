import { DeleteFlowTemplateInput } from "./DeleteFlowTemplateInput";
import { DeleteFlowTemplateOutput } from "./DeleteFlowTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFlowTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFlowTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFlowTemplateInput
  },
  output: {
    shape: DeleteFlowTemplateOutput
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
      shape: ResourceInUseException
    }
  ]
};
