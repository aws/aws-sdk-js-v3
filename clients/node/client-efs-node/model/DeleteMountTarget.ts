import { DeleteMountTargetInput } from "./DeleteMountTargetInput";
import { DeleteMountTargetOutput } from "./DeleteMountTargetOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { DependencyTimeout } from "./DependencyTimeout";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMountTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMountTarget",
  http: {
    method: "DELETE",
    requestUri: "/2015-02-01/mount-targets/{MountTargetId}"
  },
  input: {
    shape: DeleteMountTargetInput
  },
  output: {
    shape: DeleteMountTargetOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: DependencyTimeout
    },
    {
      shape: MountTargetNotFound
    }
  ]
};
