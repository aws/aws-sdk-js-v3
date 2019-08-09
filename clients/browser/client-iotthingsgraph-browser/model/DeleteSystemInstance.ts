import { DeleteSystemInstanceInput } from "./DeleteSystemInstanceInput";
import { DeleteSystemInstanceOutput } from "./DeleteSystemInstanceOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
