import { CreateCacheSecurityGroupInput } from "./CreateCacheSecurityGroupInput";
import { CreateCacheSecurityGroupOutput } from "./CreateCacheSecurityGroupOutput";
import { CacheSecurityGroupAlreadyExistsFault } from "./CacheSecurityGroupAlreadyExistsFault";
import { CacheSecurityGroupQuotaExceededFault } from "./CacheSecurityGroupQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
