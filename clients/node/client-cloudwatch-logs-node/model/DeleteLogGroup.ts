import { DeleteLogGroupInput } from "./DeleteLogGroupInput";
import { DeleteLogGroupOutput } from "./DeleteLogGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLogGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLogGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLogGroupInput
  },
  output: {
    shape: DeleteLogGroupOutput
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
