import { DeleteLogGroupInput } from "../shapes/DeleteLogGroupInput";
import { DeleteLogGroupOutput } from "../shapes/DeleteLogGroupOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
