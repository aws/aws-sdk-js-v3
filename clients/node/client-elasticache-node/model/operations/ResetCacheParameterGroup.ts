import { ResetCacheParameterGroupInput } from "../shapes/ResetCacheParameterGroupInput";
import { ResetCacheParameterGroupOutput } from "../shapes/ResetCacheParameterGroupOutput";
import { InvalidCacheParameterGroupStateFault } from "../shapes/InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
