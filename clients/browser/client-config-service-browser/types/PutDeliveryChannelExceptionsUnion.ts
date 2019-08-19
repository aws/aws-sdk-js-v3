import { MaxNumberOfDeliveryChannelsExceededException } from "./MaxNumberOfDeliveryChannelsExceededException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { InvalidDeliveryChannelNameException } from "./InvalidDeliveryChannelNameException";
import { NoSuchBucketException } from "./NoSuchBucketException";
import { InvalidS3KeyPrefixException } from "./InvalidS3KeyPrefixException";
import { InvalidSNSTopicARNException } from "./InvalidSNSTopicARNException";
import { InsufficientDeliveryPolicyException } from "./InsufficientDeliveryPolicyException";
export type PutDeliveryChannelExceptionsUnion =
  | MaxNumberOfDeliveryChannelsExceededException
  | NoAvailableConfigurationRecorderException
  | InvalidDeliveryChannelNameException
  | NoSuchBucketException
  | InvalidS3KeyPrefixException
  | InvalidSNSTopicARNException
  | InsufficientDeliveryPolicyException;
