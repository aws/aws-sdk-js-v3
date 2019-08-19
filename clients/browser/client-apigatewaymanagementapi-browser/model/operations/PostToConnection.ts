import { PostToConnectionInput } from "../shapes/PostToConnectionInput";
import { PostToConnectionOutput } from "../shapes/PostToConnectionOutput";
import { GoneException } from "../shapes/GoneException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { PayloadTooLargeException } from "../shapes/PayloadTooLargeException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PostToConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostToConnection",
  http: {
    method: "POST",
    requestUri: "/@connections/{connectionId}"
  },
  input: {
    shape: PostToConnectionInput
  },
  output: {
    shape: PostToConnectionOutput
  },
  errors: [
    {
      shape: GoneException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: PayloadTooLargeException
    },
    {
      shape: ForbiddenException
    }
  ]
};
