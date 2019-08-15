import { UpdateRecordsInput } from "../shapes/UpdateRecordsInput";
import { UpdateRecordsOutput } from "../shapes/UpdateRecordsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { InvalidLambdaFunctionOutputException } from "../shapes/InvalidLambdaFunctionOutputException";
import { LambdaThrottledException } from "../shapes/LambdaThrottledException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
