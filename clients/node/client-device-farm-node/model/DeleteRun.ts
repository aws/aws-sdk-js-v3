import { DeleteRunInput } from "./DeleteRunInput";
import { DeleteRunOutput } from "./DeleteRunOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
