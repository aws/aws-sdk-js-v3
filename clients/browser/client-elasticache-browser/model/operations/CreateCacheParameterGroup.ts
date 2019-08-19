import { CreateCacheParameterGroupInput } from "../shapes/CreateCacheParameterGroupInput";
import { CreateCacheParameterGroupOutput } from "../shapes/CreateCacheParameterGroupOutput";
import { CacheParameterGroupQuotaExceededFault } from "../shapes/CacheParameterGroupQuotaExceededFault";
import { CacheParameterGroupAlreadyExistsFault } from "../shapes/CacheParameterGroupAlreadyExistsFault";
import { InvalidCacheParameterGroupStateFault } from "../shapes/InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCacheParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCacheParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCacheParameterGroupInput
  },
  output: {
    shape: CreateCacheParameterGroupOutput,
    resultWrapper: "CreateCacheParameterGroupResult"
  },
  errors: [
    {
      shape: CacheParameterGroupQuotaExceededFault
    },
    {
      shape: CacheParameterGroupAlreadyExistsFault
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
