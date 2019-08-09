import { UpdateRecordsInput } from "./UpdateRecordsInput";
import { UpdateRecordsOutput } from "./UpdateRecordsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceConflictException } from "./ResourceConflictException";
import { InvalidLambdaFunctionOutputException } from "./InvalidLambdaFunctionOutputException";
import { LambdaThrottledException } from "./LambdaThrottledException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRecords: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRecords",
  http: {
    method: "POST",
    requestUri:
      "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}"
  },
  input: {
    shape: UpdateRecordsInput
  },
  output: {
    shape: UpdateRecordsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: InvalidLambdaFunctionOutputException
    },
    {
      shape: LambdaThrottledException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
