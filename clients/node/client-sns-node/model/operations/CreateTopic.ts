import { CreateTopicInput } from "../shapes/CreateTopicInput";
import { CreateTopicOutput } from "../shapes/CreateTopicOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TopicLimitExceededException } from "../shapes/TopicLimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { TagLimitExceededException } from "../shapes/TagLimitExceededException";
import { StaleTagException } from "../shapes/StaleTagException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { ConcurrentAccessException } from "../shapes/ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTopic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTopic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTopicInput
  },
  output: {
    shape: CreateTopicOutput,
    resultWrapper: "CreateTopicResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: TopicLimitExceededException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidSecurityException
    },
    {
      shape: TagLimitExceededException
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
