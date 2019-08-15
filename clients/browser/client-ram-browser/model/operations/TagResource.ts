import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { TagLimitExceededException } from "../shapes/TagLimitExceededException";
import { ResourceArnNotFoundException } from "../shapes/ResourceArnNotFoundException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
