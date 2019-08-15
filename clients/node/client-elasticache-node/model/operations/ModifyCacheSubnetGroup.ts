import { ModifyCacheSubnetGroupInput } from "../shapes/ModifyCacheSubnetGroupInput";
import { ModifyCacheSubnetGroupOutput } from "../shapes/ModifyCacheSubnetGroupOutput";
import { CacheSubnetGroupNotFoundFault } from "../shapes/CacheSubnetGroupNotFoundFault";
import { CacheSubnetQuotaExceededFault } from "../shapes/CacheSubnetQuotaExceededFault";
import { SubnetInUse } from "../shapes/SubnetInUse";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
