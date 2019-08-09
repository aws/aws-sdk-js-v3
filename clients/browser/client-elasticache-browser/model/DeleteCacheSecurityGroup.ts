import { DeleteCacheSecurityGroupInput } from "./DeleteCacheSecurityGroupInput";
import { DeleteCacheSecurityGroupOutput } from "./DeleteCacheSecurityGroupOutput";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCacheSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCacheSecurityGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCacheSecurityGroupInput
  },
  output: {
    shape: DeleteCacheSecurityGroupOutput
  },
  errors: [
    {
      shape: InvalidCacheSecurityGroupStateFault
    },
    {
      shape: CacheSecurityGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
