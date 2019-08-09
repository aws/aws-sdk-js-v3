import { CreateCacheParameterGroupInput } from "./CreateCacheParameterGroupInput";
import { CreateCacheParameterGroupOutput } from "./CreateCacheParameterGroupOutput";
import { CacheParameterGroupQuotaExceededFault } from "./CacheParameterGroupQuotaExceededFault";
import { CacheParameterGroupAlreadyExistsFault } from "./CacheParameterGroupAlreadyExistsFault";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
