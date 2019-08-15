import { DescribeMountTargetSecurityGroupsInput } from "../shapes/DescribeMountTargetSecurityGroupsInput";
import { DescribeMountTargetSecurityGroupsOutput } from "../shapes/DescribeMountTargetSecurityGroupsOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { MountTargetNotFound } from "../shapes/MountTargetNotFound";
import { IncorrectMountTargetState } from "../shapes/IncorrectMountTargetState";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMountTargetSecurityGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMountTargetSecurityGroups",
  http: {
    method: "GET",
    requestUri: "/2015-02-01/mount-targets/{MountTargetId}/security-groups"
  },
  input: {
    shape: DescribeMountTargetSecurityGroupsInput
  },
  output: {
    shape: DescribeMountTargetSecurityGroupsOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: MountTargetNotFound
    },
    {
      shape: IncorrectMountTargetState
    }
  ]
};
