import { RevokeCacheSecurityGroupIngressInput } from "../shapes/RevokeCacheSecurityGroupIngressInput";
import { RevokeCacheSecurityGroupIngressOutput } from "../shapes/RevokeCacheSecurityGroupIngressOutput";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "../shapes/InvalidCacheSecurityGroupStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
