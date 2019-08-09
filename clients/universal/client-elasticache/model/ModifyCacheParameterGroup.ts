import { ModifyCacheParameterGroupInput } from "./ModifyCacheParameterGroupInput";
import { ModifyCacheParameterGroupOutput } from "./ModifyCacheParameterGroupOutput";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
