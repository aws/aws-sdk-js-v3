import { DescribeContinuousExportsInput } from "../shapes/DescribeContinuousExportsInput";
import { DescribeContinuousExportsOutput } from "../shapes/DescribeContinuousExportsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeContinuousExports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeContinuousExports",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeContinuousExportsInput
  },
  output: {
    shape: DescribeContinuousExportsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
