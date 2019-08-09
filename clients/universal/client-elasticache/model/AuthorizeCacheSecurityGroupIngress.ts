import { AuthorizeCacheSecurityGroupIngressInput } from "./AuthorizeCacheSecurityGroupIngressInput";
import { AuthorizeCacheSecurityGroupIngressOutput } from "./AuthorizeCacheSecurityGroupIngressOutput";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
