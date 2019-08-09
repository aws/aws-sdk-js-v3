import { AddTagsToResourceInput } from "./AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./AddTagsToResourceOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { InvalidARNFault } from "./InvalidARNFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
