import { MaximumNumberOfTrailsExceededException } from "./MaximumNumberOfTrailsExceededException";
import { TrailAlreadyExistsException } from "./TrailAlreadyExistsException";
import { S3BucketDoesNotExistException } from "./S3BucketDoesNotExistException";
import { InsufficientS3BucketPolicyException } from "./InsufficientS3BucketPolicyException";
import { InsufficientSnsTopicPolicyException } from "./InsufficientSnsTopicPolicyException";
import { InsufficientEncryptionPolicyException } from "./InsufficientEncryptionPolicyException";
import { InvalidS3BucketNameException } from "./InvalidS3BucketNameException";
import { InvalidS3PrefixException } from "./InvalidS3PrefixException";
import { InvalidSnsTopicNameException } from "./InvalidSnsTopicNameException";
import { InvalidKmsKeyIdException } from "./InvalidKmsKeyIdException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { TrailNotProvidedException } from "./TrailNotProvidedException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
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
import { NotOrganizationMasterAccountException } from "./NotOrganizationMasterAccountException";
import { OrganizationsNotInUseException } from "./OrganizationsNotInUseException";
import { OrganizationNotInAllFeaturesModeException } from "./OrganizationNotInAllFeaturesModeException";
export type CreateTrailExceptionsUnion =
  | MaximumNumberOfTrailsExceededException
  | TrailAlreadyExistsException
  | S3BucketDoesNotExistException
  | InsufficientS3BucketPolicyException
  | InsufficientSnsTopicPolicyException
  | InsufficientEncryptionPolicyException
  | InvalidS3BucketNameException
  | InvalidS3PrefixException
  | InvalidSnsTopicNameException
  | InvalidKmsKeyIdException
  | InvalidTrailNameException
  | TrailNotProvidedException
  | InvalidParameterCombinationException
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
  | NotOrganizationMasterAccountException
  | OrganizationsNotInUseException
  | OrganizationNotInAllFeaturesModeException;
