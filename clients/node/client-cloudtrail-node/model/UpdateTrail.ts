import { UpdateTrailInput } from "./UpdateTrailInput";
import { UpdateTrailOutput } from "./UpdateTrailOutput";
import { S3BucketDoesNotExistException } from "./S3BucketDoesNotExistException";
import { InsufficientS3BucketPolicyException } from "./InsufficientS3BucketPolicyException";
import { InsufficientSnsTopicPolicyException } from "./InsufficientSnsTopicPolicyException";
import { InsufficientEncryptionPolicyException } from "./InsufficientEncryptionPolicyException";
import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidS3BucketNameException } from "./InvalidS3BucketNameException";
import { InvalidS3PrefixException } from "./InvalidS3PrefixException";
import { InvalidSnsTopicNameException } from "./InvalidSnsTopicNameException";
import { InvalidKmsKeyIdException } from "./InvalidKmsKeyIdException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { TrailNotProvidedException } from "./TrailNotProvidedException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InvalidHomeRegionException } from "./InvalidHomeRegionException";
import { KmsKeyNotFoundException } from "./KmsKeyNotFoundException";
import { KmsKeyDisabledException } from "./KmsKeyDisabledException";
import { KmsException } from "./KmsException";
import { InvalidCloudWatchLogsLogGroupArnException } from "./InvalidCloudWatchLogsLogGroupArnException";
import { InvalidCloudWatchLogsRoleArnException } from "./InvalidCloudWatchLogsRoleArnException";
import { CloudWatchLogsDeliveryUnavailableException } from "./CloudWatchLogsDeliveryUnavailableException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { CloudTrailAccessNotEnabledException } from "./CloudTrailAccessNotEnabledException";
import { InsufficientDependencyServiceAccessPermissionException } from "./InsufficientDependencyServiceAccessPermissionException";
import { OrganizationsNotInUseException } from "./OrganizationsNotInUseException";
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { OrganizationNotInAllFeaturesModeException } from "./OrganizationNotInAllFeaturesModeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateTrail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTrail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTrailInput
  },
  output: {
    shape: UpdateTrailOutput
  },
  errors: [
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
      shape: TrailNotFoundException
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
      shape: InvalidHomeRegionException
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
      shape: OrganizationsNotInUseException
    },
    {
      shape: NotOrganizationMasterAccountException
    },
    {
      shape: OrganizationNotInAllFeaturesModeException
    }
  ]
};
