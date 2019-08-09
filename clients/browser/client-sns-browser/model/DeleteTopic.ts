import { DeleteTopicInput } from "./DeleteTopicInput";
import { DeleteTopicOutput } from "./DeleteTopicOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
