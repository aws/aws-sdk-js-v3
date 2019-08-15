import { AddTagsToResourceInput } from "../shapes/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "../shapes/AddTagsToResourceOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { TagQuotaPerResourceExceeded } from "../shapes/TagQuotaPerResourceExceeded";
import { InvalidARNFault } from "../shapes/InvalidARNFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTagsToResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToResourceInput
  },
  output: {
    shape: AddTagsToResourceOutput,
    resultWrapper: "AddTagsToResourceResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: TagQuotaPerResourceExceeded
    },
    {
      shape: InvalidARNFault
    }
  ]
};
