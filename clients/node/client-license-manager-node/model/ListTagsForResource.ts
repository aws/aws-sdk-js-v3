import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: AuthorizationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: RateLimitExceededException
    }
  ]
};
