import { CreateCacheSubnetGroupInput } from "../shapes/CreateCacheSubnetGroupInput";
import { CreateCacheSubnetGroupOutput } from "../shapes/CreateCacheSubnetGroupOutput";
import { CacheSubnetGroupAlreadyExistsFault } from "../shapes/CacheSubnetGroupAlreadyExistsFault";
import { CacheSubnetGroupQuotaExceededFault } from "../shapes/CacheSubnetGroupQuotaExceededFault";
import { CacheSubnetQuotaExceededFault } from "../shapes/CacheSubnetQuotaExceededFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCacheSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCacheSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCacheSubnetGroupInput
  },
  output: {
    shape: CreateCacheSubnetGroupOutput,
    resultWrapper: "CreateCacheSubnetGroupResult"
  },
  errors: [
    {
      shape: CacheSubnetGroupAlreadyExistsFault
    },
    {
      shape: CacheSubnetGroupQuotaExceededFault
    },
    {
      shape: CacheSubnetQuotaExceededFault
    },
    {
      shape: InvalidSubnet
    }
  ]
};
