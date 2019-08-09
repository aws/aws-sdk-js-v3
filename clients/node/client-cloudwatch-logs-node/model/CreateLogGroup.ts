import { CreateLogGroupInput } from "./CreateLogGroupInput";
import { CreateLogGroupOutput } from "./CreateLogGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
