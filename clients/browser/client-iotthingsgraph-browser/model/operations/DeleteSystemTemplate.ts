import { DeleteSystemTemplateInput } from "../shapes/DeleteSystemTemplateInput";
import { DeleteSystemTemplateOutput } from "../shapes/DeleteSystemTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSystemTemplateInput
  },
  output: {
    shape: DeleteSystemTemplateOutput
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
