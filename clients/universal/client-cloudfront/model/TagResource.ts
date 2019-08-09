import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidTagging } from "./InvalidTagging";
import { NoSuchResource } from "./NoSuchResource";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/tagging?Operation=Tag"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidTagging
    },
    {
      shape: NoSuchResource
    }
  ]
};
