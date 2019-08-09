import { DescribeMountTargetsInput } from "./DescribeMountTargetsInput";
import { DescribeMountTargetsOutput } from "./DescribeMountTargetsOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { FileSystemNotFound } from "./FileSystemNotFound";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
