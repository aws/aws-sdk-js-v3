import { RevokeCacheSecurityGroupIngressInput } from "./RevokeCacheSecurityGroupIngressInput";
import { RevokeCacheSecurityGroupIngressOutput } from "./RevokeCacheSecurityGroupIngressOutput";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RevokeCacheSecurityGroupIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeCacheSecurityGroupIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeCacheSecurityGroupIngressInput
  },
  output: {
    shape: RevokeCacheSecurityGroupIngressOutput,
    resultWrapper: "RevokeCacheSecurityGroupIngressResult"
  },
  errors: [
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: InvalidCacheSecurityGroupStateFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
