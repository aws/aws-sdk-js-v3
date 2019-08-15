import { CreateLogGroupInput } from "../shapes/CreateLogGroupInput";
import { CreateLogGroupOutput } from "../shapes/CreateLogGroupOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLogGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLogGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLogGroupInput
  },
  output: {
    shape: CreateLogGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
