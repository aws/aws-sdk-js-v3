import { AddTagsToResourceInput } from "./AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./AddTagsToResourceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
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
