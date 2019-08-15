import { DeleteTopicInput } from "../shapes/DeleteTopicInput";
import { DeleteTopicOutput } from "../shapes/DeleteTopicOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { StaleTagException } from "../shapes/StaleTagException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { ConcurrentAccessException } from "../shapes/ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTopicInput
  },
  output: {
    shape: DeleteTopicOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: StaleTagException
    },
    {
      shape: TagPolicyException
    },
    {
      shape: ConcurrentAccessException
    }
  ]
};
