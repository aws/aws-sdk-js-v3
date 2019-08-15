import { RemoveTagsFromResourceInput } from "../shapes/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../shapes/RemoveTagsFromResourceOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { InvalidARNFault } from "../shapes/InvalidARNFault";
import { TagNotFoundFault } from "../shapes/TagNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromResourceInput
  },
  output: {
    shape: RemoveTagsFromResourceOutput,
    resultWrapper: "RemoveTagsFromResourceResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: InvalidARNFault
    },
    {
      shape: TagNotFoundFault
    }
  ]
};
