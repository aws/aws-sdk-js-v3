import { DeleteBucketReplicationInput } from "./DeleteBucketReplicationInput";
import { DeleteBucketReplicationOutput } from "./DeleteBucketReplicationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteBucketReplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketReplication",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?replication"
  },
  input: {
    shape: DeleteBucketReplicationInput
  },
  output: {
    shape: DeleteBucketReplicationOutput
  },
  errors: []
};
