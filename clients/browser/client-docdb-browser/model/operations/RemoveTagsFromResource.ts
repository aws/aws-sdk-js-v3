import { RemoveTagsFromResourceInput } from "../shapes/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../shapes/RemoveTagsFromResourceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
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
    shape: RemoveTagsFromResourceOutput
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBSnapshotNotFoundFault
    },
    {
      shape: DBClusterNotFoundFault
    }
  ]
};
