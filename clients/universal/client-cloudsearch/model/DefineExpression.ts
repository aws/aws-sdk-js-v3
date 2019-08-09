import { DefineExpressionInput } from "./DefineExpressionInput";
import { DefineExpressionOutput } from "./DefineExpressionOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
