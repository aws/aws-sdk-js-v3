import { CreateCacheSubnetGroupInput } from "./CreateCacheSubnetGroupInput";
import { CreateCacheSubnetGroupOutput } from "./CreateCacheSubnetGroupOutput";
import { CacheSubnetGroupAlreadyExistsFault } from "./CacheSubnetGroupAlreadyExistsFault";
import { CacheSubnetGroupQuotaExceededFault } from "./CacheSubnetGroupQuotaExceededFault";
import { CacheSubnetQuotaExceededFault } from "./CacheSubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
