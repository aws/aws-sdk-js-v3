import { CreateTopicInput } from "./CreateTopicInput";
import { CreateTopicOutput } from "./CreateTopicOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { TopicLimitExceededException } from "./TopicLimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
