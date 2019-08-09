import { DescribeContinuousExportsInput } from "./DescribeContinuousExportsInput";
import { DescribeContinuousExportsOutput } from "./DescribeContinuousExportsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
