import { AuthorizeCacheSecurityGroupIngressInput } from "../shapes/AuthorizeCacheSecurityGroupIngressInput";
import { AuthorizeCacheSecurityGroupIngressOutput } from "../shapes/AuthorizeCacheSecurityGroupIngressOutput";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "../shapes/InvalidCacheSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "../shapes/AuthorizationAlreadyExistsFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AuthorizeCacheSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeCacheSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeCacheSecurityGroupIngressInput
  },
  output: {
    shape: AuthorizeCacheSecurityGroupIngressOutput,
    resultWrapper: "AuthorizeCacheSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: InvalidCacheSecurityGroupStateFault
    },
    {
      shape: AuthorizationAlreadyExistsFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
