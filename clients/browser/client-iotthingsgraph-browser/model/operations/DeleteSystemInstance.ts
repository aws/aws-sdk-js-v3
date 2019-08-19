import { DeleteSystemInstanceInput } from "../shapes/DeleteSystemInstanceInput";
import { DeleteSystemInstanceOutput } from "../shapes/DeleteSystemInstanceOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSystemInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSystemInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSystemInstanceInput
  },
  output: {
    shape: DeleteSystemInstanceOutput
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
