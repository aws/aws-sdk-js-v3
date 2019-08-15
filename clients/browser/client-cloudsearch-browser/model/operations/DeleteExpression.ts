import { DeleteExpressionInput } from "../shapes/DeleteExpressionInput";
import { DeleteExpressionOutput } from "../shapes/DeleteExpressionOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteExpression: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteExpression",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteExpressionInput
  },
  output: {
    shape: DeleteExpressionOutput,
    resultWrapper: "DeleteExpressionResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
