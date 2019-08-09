import { PutDeliveryChannelInput } from "./PutDeliveryChannelInput";
import { PutDeliveryChannelOutput } from "./PutDeliveryChannelOutput";
import { MaxNumberOfDeliveryChannelsExceededException } from "./MaxNumberOfDeliveryChannelsExceededException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { InvalidDeliveryChannelNameException } from "./InvalidDeliveryChannelNameException";
import { NoSuchBucketException } from "./NoSuchBucketException";
import { InvalidS3KeyPrefixException } from "./InvalidS3KeyPrefixException";
import { InvalidSNSTopicARNException } from "./InvalidSNSTopicARNException";
import { InsufficientDeliveryPolicyException } from "./InsufficientDeliveryPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutDeliveryChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDeliveryChannel",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutDeliveryChannelInput
  },
  output: {
    shape: PutDeliveryChannelOutput
  },
  errors: [
    {
      shape: MaxNumberOfDeliveryChannelsExceededException
    },
    {
      shape: NoAvailableConfigurationRecorderException
    },
    {
      shape: InvalidDeliveryChannelNameException
    },
    {
      shape: NoSuchBucketException
    },
    {
      shape: InvalidS3KeyPrefixException
    },
    {
      shape: InvalidSNSTopicARNException
    },
    {
      shape: InsufficientDeliveryPolicyException
    }
  ]
};
