import { ModifyCacheParameterGroupInput } from "../shapes/ModifyCacheParameterGroupInput";
import { ModifyCacheParameterGroupOutput } from "../shapes/ModifyCacheParameterGroupOutput";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidCacheParameterGroupStateFault } from "../shapes/InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyCacheParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCacheParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyCacheParameterGroupInput
  },
  output: {
    shape: ModifyCacheParameterGroupOutput,
    resultWrapper: "ModifyCacheParameterGroupResult"
  },
  errors: [
    {
      shape: CacheParameterGroupNotFoundFault
    },
    {
      shape: InvalidCacheParameterGroupStateFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
