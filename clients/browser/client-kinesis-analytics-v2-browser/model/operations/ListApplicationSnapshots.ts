import { ListApplicationSnapshotsInput } from "../shapes/ListApplicationSnapshotsInput";
import { ListApplicationSnapshotsOutput } from "../shapes/ListApplicationSnapshotsOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApplicationSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplicationSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListApplicationSnapshotsInput
  },
  output: {
    shape: ListApplicationSnapshotsOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
