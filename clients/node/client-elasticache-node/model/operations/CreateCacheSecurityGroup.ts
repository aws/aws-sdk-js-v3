import { CreateCacheSecurityGroupInput } from "../shapes/CreateCacheSecurityGroupInput";
import { CreateCacheSecurityGroupOutput } from "../shapes/CreateCacheSecurityGroupOutput";
import { CacheSecurityGroupAlreadyExistsFault } from "../shapes/CacheSecurityGroupAlreadyExistsFault";
import { CacheSecurityGroupQuotaExceededFault } from "../shapes/CacheSecurityGroupQuotaExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCacheSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCacheSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCacheSecurityGroupInput
  },
  output: {
    shape: CreateCacheSecurityGroupOutput,
    resultWrapper: "CreateCacheSecurityGroupResult"
  },
  errors: [
    {
      shape: CacheSecurityGroupAlreadyExistsFault
    },
    {
      shape: CacheSecurityGroupQuotaExceededFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
