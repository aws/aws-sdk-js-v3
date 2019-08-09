import { DeleteSystemTemplateInput } from "./DeleteSystemTemplateInput";
import { DeleteSystemTemplateOutput } from "./DeleteSystemTemplateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
