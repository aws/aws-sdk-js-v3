import { ModifyCacheSubnetGroupInput } from "./ModifyCacheSubnetGroupInput";
import { ModifyCacheSubnetGroupOutput } from "./ModifyCacheSubnetGroupOutput";
import { CacheSubnetGroupNotFoundFault } from "./CacheSubnetGroupNotFoundFault";
import { CacheSubnetQuotaExceededFault } from "./CacheSubnetQuotaExceededFault";
import { SubnetInUse } from "./SubnetInUse";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyCacheSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCacheSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyCacheSubnetGroupInput
  },
  output: {
    shape: ModifyCacheSubnetGroupOutput,
    resultWrapper: "ModifyCacheSubnetGroupResult"
  },
  errors: [
    {
      shape: CacheSubnetGroupNotFoundFault
    },
    {
      shape: CacheSubnetQuotaExceededFault
    },
    {
      shape: SubnetInUse
    },
    {
      shape: InvalidSubnet
    }
  ]
};
