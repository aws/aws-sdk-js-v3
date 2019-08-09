import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { MalformedArnException } from "./MalformedArnException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { ResourceArnNotFoundException } from "./ResourceArnNotFoundException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/tagresource"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: MalformedArnException
    },
    {
      shape: TagLimitExceededException
    },
    {
      shape: ResourceArnNotFoundException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
