import { AddTagsToResourceInput } from "../shapes/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "../shapes/AddTagsToResourceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
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
    shape: AddTagsToResourceOutput
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
