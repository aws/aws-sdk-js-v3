import { UpdateScalingParametersInput } from "../shapes/UpdateScalingParametersInput";
import { UpdateScalingParametersOutput } from "../shapes/UpdateScalingParametersOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
