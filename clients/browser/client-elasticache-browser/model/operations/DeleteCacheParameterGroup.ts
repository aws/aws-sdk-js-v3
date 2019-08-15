import { DeleteCacheParameterGroupInput } from "../shapes/DeleteCacheParameterGroupInput";
import { DeleteCacheParameterGroupOutput } from "../shapes/DeleteCacheParameterGroupOutput";
import { InvalidCacheParameterGroupStateFault } from "../shapes/InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "../shapes/CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
