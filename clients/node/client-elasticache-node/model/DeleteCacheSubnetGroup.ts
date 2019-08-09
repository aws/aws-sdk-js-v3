import { DeleteCacheSubnetGroupInput } from "./DeleteCacheSubnetGroupInput";
import { DeleteCacheSubnetGroupOutput } from "./DeleteCacheSubnetGroupOutput";
import { CacheSubnetGroupInUse } from "./CacheSubnetGroupInUse";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
