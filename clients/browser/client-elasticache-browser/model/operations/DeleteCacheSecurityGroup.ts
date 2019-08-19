import { DeleteCacheSecurityGroupInput } from "../shapes/DeleteCacheSecurityGroupInput";
import { DeleteCacheSecurityGroupOutput } from "../shapes/DeleteCacheSecurityGroupOutput";
import { InvalidCacheSecurityGroupStateFault } from "../shapes/InvalidCacheSecurityGroupStateFault";
import { CacheSecurityGroupNotFoundFault } from "../shapes/CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
