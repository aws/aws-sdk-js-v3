import { ListApplicationSnapshotsInput } from "./ListApplicationSnapshotsInput";
import { ListApplicationSnapshotsOutput } from "./ListApplicationSnapshotsOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
