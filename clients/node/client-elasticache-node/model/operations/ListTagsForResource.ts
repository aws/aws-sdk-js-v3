import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "../shapes/SnapshotNotFoundFault";
import { InvalidARNFault } from "../shapes/InvalidARNFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput,
    resultWrapper: "ListTagsForResourceResult"
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
    }
  ]
};
