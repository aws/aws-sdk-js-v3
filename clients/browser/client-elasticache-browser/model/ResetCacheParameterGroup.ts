import { ResetCacheParameterGroupInput } from "./ResetCacheParameterGroupInput";
import { ResetCacheParameterGroupOutput } from "./ResetCacheParameterGroupOutput";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetCacheParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetCacheParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetCacheParameterGroupInput
  },
  output: {
    shape: ResetCacheParameterGroupOutput,
    resultWrapper: "ResetCacheParameterGroupResult"
  },
  errors: [
    {
      shape: InvalidCacheParameterGroupStateFault
    },
    {
      shape: CacheParameterGroupNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
