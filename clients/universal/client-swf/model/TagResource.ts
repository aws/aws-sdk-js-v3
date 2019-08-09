import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { TooManyTagsFault } from "./TooManyTagsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: UnknownResourceFault
    },
    {
      shape: TooManyTagsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: OperationNotPermittedFault
    }
  ]
};
