import { CreateTrailInput } from "../shapes/CreateTrailInput";
import { CreateTrailOutput } from "../shapes/CreateTrailOutput";
import { MaximumNumberOfTrailsExceededException } from "../shapes/MaximumNumberOfTrailsExceededException";
import { TrailAlreadyExistsException } from "../shapes/TrailAlreadyExistsException";
import { S3BucketDoesNotExistException } from "../shapes/S3BucketDoesNotExistException";
import { InsufficientS3BucketPolicyException } from "../shapes/InsufficientS3BucketPolicyException";
import { InsufficientSnsTopicPolicyException } from "../shapes/InsufficientSnsTopicPolicyException";
import { InsufficientEncryptionPolicyException } from "../shapes/InsufficientEncryptionPolicyException";
import { InvalidS3BucketNameException } from "../shapes/InvalidS3BucketNameException";
import { InvalidS3PrefixException } from "../shapes/InvalidS3PrefixException";
import { InvalidSnsTopicNameException } from "../shapes/InvalidSnsTopicNameException";
import { InvalidKmsKeyIdException } from "../shapes/InvalidKmsKeyIdException";
import { InvalidTrailNameException } from "../shapes/InvalidTrailNameException";
import { TrailNotProvidedException } from "../shapes/TrailNotProvidedException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { KmsKeyNotFoundException } from "../shapes/KmsKeyNotFoundException";
import { KmsKeyDisabledException } from "../shapes/KmsKeyDisabledException";
import { KmsException } from "../shapes/KmsException";
import { InvalidCloudWatchLogsLogGroupArnException } from "../shapes/InvalidCloudWatchLogsLogGroupArnException";
import { InvalidCloudWatchLogsRoleArnException } from "../shapes/InvalidCloudWatchLogsRoleArnException";
import { CloudWatchLogsDeliveryUnavailableException } from "../shapes/CloudWatchLogsDeliveryUnavailableException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { CloudTrailAccessNotEnabledException } from "../shapes/CloudTrailAccessNotEnabledException";
import { InsufficientDependencyServiceAccessPermissionException } from "../shapes/InsufficientDependencyServiceAccessPermissionException";
import { NotOrganizationMasterAccountException } from "../shapes/NotOrganizationMasterAccountException";
import { OrganizationsNotInUseException } from "../shapes/OrganizationsNotInUseException";
import { OrganizationNotInAllFeaturesModeException } from "../shapes/OrganizationNotInAllFeaturesModeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTrail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTrailInput
  },
  output: {
    shape: CreateTrailOutput
  },
  errors: [
    {
      shape: MaximumNumberOfTrailsExceededException
    },
    {
      shape: TrailAlreadyExistsException
    },
    {
      shape: S3BucketDoesNotExistException
    },
    {
      shape: InsufficientS3BucketPolicyException
    },
    {
      shape: InsufficientSnsTopicPolicyException
    },
    {
      shape: InsufficientEncryptionPolicyException
    },
    {
      shape: InvalidS3BucketNameException
    },
    {
      shape: InvalidS3PrefixException
    },
    {
      shape: InvalidSnsTopicNameException
    },
    {
      shape: InvalidKmsKeyIdException
    },
    {
      shape: InvalidTrailNameException
    },
    {
      shape: TrailNotProvidedException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: KmsKeyNotFoundException
    },
    {
      shape: KmsKeyDisabledException
    },
    {
      shape: KmsException
    },
    {
      shape: InvalidCloudWatchLogsLogGroupArnException
    },
    {
      shape: InvalidCloudWatchLogsRoleArnException
    },
    {
      shape: CloudWatchLogsDeliveryUnavailableException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: CloudTrailAccessNotEnabledException
    },
    {
      shape: InsufficientDependencyServiceAccessPermissionException
    },
    {
      shape: NotOrganizationMasterAccountException
    },
    {
      shape: OrganizationsNotInUseException
    },
    {
      shape: OrganizationNotInAllFeaturesModeException
    }
  ]
};
