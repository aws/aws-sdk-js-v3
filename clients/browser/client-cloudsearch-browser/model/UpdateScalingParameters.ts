import { UpdateScalingParametersInput } from "./UpdateScalingParametersInput";
import { UpdateScalingParametersOutput } from "./UpdateScalingParametersOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidTypeException } from "./InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateScalingParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateScalingParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateScalingParametersInput
  },
  output: {
    shape: UpdateScalingParametersOutput,
    resultWrapper: "UpdateScalingParametersResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidTypeException
    }
  ]
};
