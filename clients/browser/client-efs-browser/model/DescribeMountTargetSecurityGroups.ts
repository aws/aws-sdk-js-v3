import { DescribeMountTargetSecurityGroupsInput } from "./DescribeMountTargetSecurityGroupsInput";
import { DescribeMountTargetSecurityGroupsOutput } from "./DescribeMountTargetSecurityGroupsOutput";
import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { MountTargetNotFound } from "./MountTargetNotFound";
import { IncorrectMountTargetState } from "./IncorrectMountTargetState";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
