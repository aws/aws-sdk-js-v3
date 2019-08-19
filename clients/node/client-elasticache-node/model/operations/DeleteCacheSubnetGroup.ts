import { DeleteCacheSubnetGroupInput } from "../shapes/DeleteCacheSubnetGroupInput";
import { DeleteCacheSubnetGroupOutput } from "../shapes/DeleteCacheSubnetGroupOutput";
import { CacheSubnetGroupInUse } from "../shapes/CacheSubnetGroupInUse";
import { CacheSubnetGroupNotFoundFault } from "../shapes/CacheSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCacheSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCacheSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCacheSubnetGroupInput
  },
  output: {
    shape: DeleteCacheSubnetGroupOutput
  },
  errors: [
    {
      shape: CacheSubnetGroupInUse
    },
    {
      shape: CacheSubnetGroupNotFoundFault
    }
  ]
};
