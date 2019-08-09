import { DeleteExpressionInput } from "./DeleteExpressionInput";
import { DeleteExpressionOutput } from "./DeleteExpressionOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
