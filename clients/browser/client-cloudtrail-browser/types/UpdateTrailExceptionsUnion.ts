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
export type UpdateTrailExceptionsUnion =
  | S3BucketDoesNotExistException
  | InsufficientS3BucketPolicyException
  | InsufficientSnsTopicPolicyException
  | InsufficientEncryptionPolicyException
  | TrailNotFoundException
  | InvalidS3BucketNameException
  | InvalidS3PrefixException
  | InvalidSnsTopicNameException
  | InvalidKmsKeyIdException
  | InvalidTrailNameException
  | TrailNotProvidedException
  | InvalidParameterCombinationException
  | InvalidHomeRegionException
  | KmsKeyNotFoundException
  | KmsKeyDisabledException
  | KmsException
  | InvalidCloudWatchLogsLogGroupArnException
  | InvalidCloudWatchLogsRoleArnException
  | CloudWatchLogsDeliveryUnavailableException
  | UnsupportedOperationException
  | OperationNotPermittedException
  | CloudTrailAccessNotEnabledException
  | InsufficientDependencyServiceAccessPermissionException
  | OrganizationsNotInUseException
  | NotOrganizationMasterAccountException
  | OrganizationNotInAllFeaturesModeException;
