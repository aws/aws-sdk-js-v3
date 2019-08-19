import { DescribeMountTargetsInput } from "../shapes/DescribeMountTargetsInput";
import { DescribeMountTargetsOutput } from "../shapes/DescribeMountTargetsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { MountTargetNotFound } from "../shapes/MountTargetNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMountTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMountTargets",
  http: {
    method: "GET",
    requestUri: "/2015-02-01/mount-targets"
  },
  input: {
    shape: DescribeMountTargetsInput
  },
  output: {
    shape: DescribeMountTargetsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: MountTargetNotFound
    }
  ]
};
