import { DeleteMountTargetInput } from "../shapes/DeleteMountTargetInput";
import { DeleteMountTargetOutput } from "../shapes/DeleteMountTargetOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { DependencyTimeout } from "../shapes/DependencyTimeout";
import { MountTargetNotFound } from "../shapes/MountTargetNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
