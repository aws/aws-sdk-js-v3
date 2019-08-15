import { DeleteRunInput } from "../shapes/DeleteRunInput";
import { DeleteRunOutput } from "../shapes/DeleteRunOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRunInput
  },
  output: {
    shape: DeleteRunOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
