import { DefineExpressionInput } from "../shapes/DefineExpressionInput";
import { DefineExpressionOutput } from "../shapes/DefineExpressionOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DefineExpression: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DefineExpression",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DefineExpressionInput
  },
  output: {
    shape: DefineExpressionOutput,
    resultWrapper: "DefineExpressionResult"
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
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
