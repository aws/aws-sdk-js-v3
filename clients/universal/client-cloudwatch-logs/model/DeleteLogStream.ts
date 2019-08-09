import { DeleteLogStreamInput } from "./DeleteLogStreamInput";
import { DeleteLogStreamOutput } from "./DeleteLogStreamOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
