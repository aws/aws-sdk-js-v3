import { PutDeliveryChannelInput } from "../shapes/PutDeliveryChannelInput";
import { PutDeliveryChannelOutput } from "../shapes/PutDeliveryChannelOutput";
import { MaxNumberOfDeliveryChannelsExceededException } from "../shapes/MaxNumberOfDeliveryChannelsExceededException";
import { NoAvailableConfigurationRecorderException } from "../shapes/NoAvailableConfigurationRecorderException";
import { InvalidDeliveryChannelNameException } from "../shapes/InvalidDeliveryChannelNameException";
import { NoSuchBucketException } from "../shapes/NoSuchBucketException";
import { InvalidS3KeyPrefixException } from "../shapes/InvalidS3KeyPrefixException";
import { InvalidSNSTopicARNException } from "../shapes/InvalidSNSTopicARNException";
import { InsufficientDeliveryPolicyException } from "../shapes/InsufficientDeliveryPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
