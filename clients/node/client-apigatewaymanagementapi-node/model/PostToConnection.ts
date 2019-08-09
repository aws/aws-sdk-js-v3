import { PostToConnectionInput } from "./PostToConnectionInput";
import { PostToConnectionOutput } from "./PostToConnectionOutput";
import { GoneException } from "./GoneException";
import { LimitExceededException } from "./LimitExceededException";
import { PayloadTooLargeException } from "./PayloadTooLargeException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
