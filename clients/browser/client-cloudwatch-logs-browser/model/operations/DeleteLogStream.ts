import { DeleteLogStreamInput } from "../shapes/DeleteLogStreamInput";
import { DeleteLogStreamOutput } from "../shapes/DeleteLogStreamOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLogStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLogStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLogStreamInput
  },
  output: {
    shape: DeleteLogStreamOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
