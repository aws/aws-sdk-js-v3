import { DeleteCacheParameterGroupInput } from "./DeleteCacheParameterGroupInput";
import { DeleteCacheParameterGroupOutput } from "./DeleteCacheParameterGroupOutput";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCacheParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCacheParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCacheParameterGroupInput
  },
  output: {
    shape: DeleteCacheParameterGroupOutput
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
