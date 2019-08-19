import { DeleteFlowTemplateInput } from "../shapes/DeleteFlowTemplateInput";
import { DeleteFlowTemplateOutput } from "../shapes/DeleteFlowTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
